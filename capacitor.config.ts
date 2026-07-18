import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.accountiq.app',
  appName: 'AccountIQ',
  webDir: 'dist',
  backgroundColor: '#0f1115',
  android: {
    backgroundColor: '#0f1115',
  },
  plugins: {
    StatusBar: {
      overlaysWebView: false,
      style: 'DARK',
      backgroundColor: '#0f1115',
    },
    SplashScreen: {
      launchShowDuration: 600,
      backgroundColor: '#0f1115',
    },
    CapacitorSQLite: {
      androidIsEncryption: false,
    },
  },
};

export default config;
