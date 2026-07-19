import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.accountiq.app',
  appName: 'CMA Compass',
  webDir: 'dist',
  backgroundColor: '#FBFBF9',
  android: {
    backgroundColor: '#FBFBF9',
  },
  plugins: {
    StatusBar: {
      overlaysWebView: false,
      style: 'LIGHT',
      backgroundColor: '#FBFBF9',
    },
    SplashScreen: {
      launchShowDuration: 600,
      backgroundColor: '#FBFBF9',
    },
    CapacitorSQLite: {
      androidIsEncryption: false,
    },
    // Route fetch()/XHR through native HTTP so cross-origin PDFs (ICMAI
    // study-material books & past papers on the CloudFront CDN) load without
    // CORS blocking on Android.
    CapacitorHttp: {
      enabled: true,
    },
  },
};

export default config;
