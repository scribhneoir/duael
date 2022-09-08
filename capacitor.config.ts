import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.duael.app',
  appName: 'DUæL',
  webDir: 'dist',
  bundledWebRuntime: false,
  //TODO: remove in production. Used for live reload in a dev env
  server: {
    url: 'http://127.0.0.1:5173/'
  }
};

export default config;
