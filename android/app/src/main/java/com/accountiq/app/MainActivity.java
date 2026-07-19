package com.accountiq.app;

import android.content.SharedPreferences;
import android.os.Bundle;
import android.webkit.WebView;

import com.getcapacitor.BridgeActivity;

import java.io.File;

public class MainActivity extends BridgeActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        registerPlugin(ApkUpdaterPlugin.class);
        registerPlugin(OtaUpdaterPlugin.class);
        super.onCreate(savedInstanceState);

        try {
            long currentVersionCode;
            if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.P) {
                currentVersionCode = getPackageManager().getPackageInfo(getPackageName(), 0).getLongVersionCode();
            } else {
                currentVersionCode = getPackageManager().getPackageInfo(getPackageName(), 0).versionCode;
            }
            SharedPreferences prefs = getSharedPreferences("ota_prefs", MODE_PRIVATE);
            long savedVersionCode = prefs.getLong("native_version_code", -1);
            if (savedVersionCode != -1 && savedVersionCode != currentVersionCode) {
                prefs.edit().remove("active_version").remove("downloaded_version").putLong("native_version_code", currentVersionCode).apply();
            } else if (savedVersionCode == -1) {
                prefs.edit().putLong("native_version_code", currentVersionCode).apply();
            }
        } catch (Exception e) {}

        // Check if an OTA version is active and load from OTA directory.
        SharedPreferences prefs = getSharedPreferences("ota_prefs", MODE_PRIVATE);
        String activeVersion = prefs.getString("active_version", null);
        if (activeVersion != null) {
            File otaDir = new File(getFilesDir(), "ota/" + activeVersion);
            File otaIndex = new File(otaDir, "index.html");
            if (otaIndex.exists() && otaIndex.length() > 0) {
                bridge.setServerBasePath(otaDir.getAbsolutePath());
                bridge.reload();
            } else {
                // OTA files are missing or corrupted — fall back to the bundled
                // assets and clear the flag so we don't retry a broken build.
                prefs.edit().remove("active_version").apply();
            }
        }
    }
}
