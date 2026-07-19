package com.accountiq.app;

import android.content.SharedPreferences;
import android.os.Bundle;
import android.util.Log;
import android.webkit.WebView;

import com.getcapacitor.BridgeActivity;

import java.io.File;
import java.util.Arrays;

public class MainActivity extends BridgeActivity {
    private static final String TAG = "CMACompass";
    private static final String[] CRITICAL_FILES = {
        "index.html",
        "assets/index.js",
        "assets/index.css"
    };

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        registerPlugin(ApkUpdaterPlugin.class);
        registerPlugin(OtaUpdaterPlugin.class);
        super.onCreate(savedInstanceState);
    }

    /** Validate that all critical OTA bundle files exist and are non-empty. */
    private boolean validateOtaBundle(File otaDir) {
        return Arrays.stream(CRITICAL_FILES).allMatch(relPath -> {
            File f = new File(otaDir, relPath);
            boolean valid = f.exists() && f.length() > 0;
            if (!valid) {
                Log.w(TAG, "OTA bundle missing or empty: " + f.getAbsolutePath()
                    + " (exists=" + f.exists() + ", size=" + f.length() + ")");
            }
            return valid;
        });
    }

    @Override
    public void onStart() {
        super.onStart();
        SharedPreferences prefs = getSharedPreferences("ota_prefs", MODE_PRIVATE);
        String activeVersion = prefs.getString("active_version", null);
        if (activeVersion != null) {
            File otaDir = new File(getFilesDir(), "ota/" + activeVersion);
            if (validateOtaBundle(otaDir)) {
                Log.i(TAG, "Loading OTA version " + activeVersion + " from " + otaDir.getAbsolutePath());
                WebView wv = bridge.getWebView();
                if (wv != null) {
                    wv.loadUrl("file://" + new File(otaDir, "index.html").getAbsolutePath());
                }
            } else {
                Log.w(TAG, "OTA bundle corrupted for version " + activeVersion
                    + " — falling back to bundled assets");
                prefs.edit().remove("active_version").apply();
            }
        }
    }
}
