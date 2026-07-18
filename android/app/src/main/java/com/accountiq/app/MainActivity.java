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
    }

    @Override
    public void onStart() {
        super.onStart();
        // Check if an OTA version is active and load from OTA directory.
        SharedPreferences prefs = getSharedPreferences("ota_prefs", MODE_PRIVATE);
        String activeVersion = prefs.getString("active_version", null);
        if (activeVersion != null) {
            File otaIndex = new File(getFilesDir(), "ota/" + activeVersion + "/index.html");
            if (otaIndex.exists() && otaIndex.length() > 0) {
                WebView wv = bridge.getWebView();
                if (wv != null) {
                    wv.loadUrl("file://" + otaIndex.getAbsolutePath());
                }
            } else {
                // OTA files are missing or corrupted — fall back to the bundled
                // assets and clear the flag so we don't retry a broken build.
                prefs.edit().remove("active_version").apply();
            }
        }
    }
}
