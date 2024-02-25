import { ExpoConfig, ConfigContext } from "expo/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  "name": "tsbank_app",
  "slug": "tsbank_app",
  "version": "1.0.0",
  "orientation": "portrait",
  "icon": "./public/icon.png",
  "scheme": "tsbank_app",
  "userInterfaceStyle": "automatic",
  "splash": {
    "image": "./public/splash.png",
    "resizeMode": "contain",
    "backgroundColor": "#3178c6"
  },
  "assetBundlePatterns": [ "**/*" ],
  "ios": {
    "supportsTablet": true,
    "bundleIdentifier": "com.tsbank.app"
  },
  "android": {
    "adaptiveIcon": {
      "foregroundImage": "./public/adaptive-icon.png",
      "backgroundColor": "#3178c6"
    },
    "package": "com.tsbank.app"
  },
  "web": {
    "favicon": "./public/favicon.png",
    "bundler": "metro"
  },
  "plugins": [ "expo-router", "expo-font" ],
  "experiments": {
    "typedRoutes": true
  },
  extra: {
    storybookEnabled: process.env.STORYBOOK_ENABLED,
  },
});
