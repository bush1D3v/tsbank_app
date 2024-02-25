import { StorybookConfig } from "@storybook/react-native";

const main: StorybookConfig = {
  stories: [
    "../src/screens/**/*.stories.?(ts|tsx|js|jsx)",
    "../src/components/**/*.stories.?(ts|tsx|js|jsx)"
  ],
  addons: [ "@storybook/addon-ondevice-controls", "@storybook/addon-ondevice-actions" ],
};

export default main;
