package com.accountiq.app;

import android.content.Context;
import android.content.SharedPreferences;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.zip.ZipEntry;
import java.util.zip.ZipInputStream;

@CapacitorPlugin(name = "OtaUpdater")
public class OtaUpdaterPlugin extends Plugin {

    private static final String PREFS_NAME = "ota_prefs";
    private static final String KEY_ACTIVE_VERSION = "active_version";
    private static final String KEY_DOWNLOADED_VERSION = "downloaded_version";

    @PluginMethod
    public void getActiveVersion(PluginCall call) {
        SharedPreferences prefs = getContext().getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE);
        String version = prefs.getString(KEY_ACTIVE_VERSION, null);
        JSObject ret = new JSObject();
        ret.put("version", version);
        call.resolve(ret);
    }

    @PluginMethod
    public void getDownloadedVersion(PluginCall call) {
        SharedPreferences prefs = getContext().getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE);
        String version = prefs.getString(KEY_DOWNLOADED_VERSION, null);
        JSObject ret = new JSObject();
        ret.put("version", version);
        call.resolve(ret);
    }

    @PluginMethod
    public void downloadAndExtract(PluginCall call) {
        String url = call.getString("url");
        String version = call.getString("version");
        if (url == null || version == null) {
            call.reject("url and version are required");
            return;
        }

        new Thread(() -> {
            try {
                File otaDir = new File(getContext().getFilesDir(), "ota/" + version);
                if (otaDir.exists()) deleteDir(otaDir);
                otaDir.mkdirs();

                HttpURLConnection conn = (HttpURLConnection) new URL(url).openConnection();
                conn.connect();
                try (InputStream is = conn.getInputStream();
                     ZipInputStream zis = new ZipInputStream(is)) {
                    ZipEntry entry;
                    byte[] buffer = new byte[8192];
                    while ((entry = zis.getNextEntry()) != null) {
                        File targetFile = new File(otaDir, entry.getName());
                        if (entry.isDirectory()) {
                            targetFile.mkdirs();
                        } else {
                            targetFile.getParentFile().mkdirs();
                            try (FileOutputStream fos = new FileOutputStream(targetFile)) {
                                int len;
                                while ((len = zis.read(buffer)) > 0) {
                                    fos.write(buffer, 0, len);
                                }
                            }
                        }
                        zis.closeEntry();
                    }
                }

                SharedPreferences prefs = getContext().getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE);
                prefs.edit().putString(KEY_DOWNLOADED_VERSION, version).apply();

                JSObject ret = new JSObject();
                ret.put("success", true);
                ret.put("version", version);
                ret.put("path", otaDir.getAbsolutePath());
                call.resolve(ret);
            } catch (Exception e) {
                call.reject("Download failed: " + e.getMessage());
            }
        }).start();
    }

    @PluginMethod
    public void applyVersion(PluginCall call) {
        String version = call.getString("version");
        if (version == null) {
            call.reject("version is required");
            return;
        }

        File otaDir = new File(getContext().getFilesDir(), "ota/" + version);
        if (!otaDir.exists() || !new File(otaDir, "index.html").exists()) {
            call.reject("OTA files not found for version " + version);
            return;
        }

        SharedPreferences prefs = getContext().getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE);
        prefs.edit().putString(KEY_ACTIVE_VERSION, version).apply();

        // Dynamically update the bridge and reload on the UI thread
        if (getActivity() != null) {
            getActivity().runOnUiThread(() -> {
                bridge.setServerBasePath(otaDir.getAbsolutePath());
                bridge.reload();
            });
        }

        JSObject ret = new JSObject();
        ret.put("success", true);
        ret.put("version", version);
        ret.put("path", otaDir.getAbsolutePath());
        call.resolve(ret);
    }

    @PluginMethod
    public void getOtaIndexPath(PluginCall call) {
        SharedPreferences prefs = getContext().getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE);
        String version = prefs.getString(KEY_ACTIVE_VERSION, null);
        if (version == null) {
            call.resolve(new JSObject() {{ put("path", null); }});
            return;
        }
        File indexHtml = new File(getContext().getFilesDir(), "ota/" + version + "/index.html");
        if (indexHtml.exists()) {
            JSObject ret = new JSObject();
            ret.put("path", indexHtml.getAbsolutePath());
            call.resolve(ret);
        } else {
            call.resolve(new JSObject() {{ put("path", null); }});
        }
    }

    @PluginMethod
    public void clearOta(PluginCall call) {
        SharedPreferences prefs = getContext().getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE);
        prefs.edit().remove(KEY_ACTIVE_VERSION).remove(KEY_DOWNLOADED_VERSION).apply();
        call.resolve(new JSObject() {{ put("success", true); }});
    }

    private void deleteDir(File dir) {
        File[] files = dir.listFiles();
        if (files != null) {
            for (File f : files) {
                if (f.isDirectory()) deleteDir(f);
                else f.delete();
            }
        }
        dir.delete();
    }
}
