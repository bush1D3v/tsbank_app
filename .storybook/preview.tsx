import { themes } from "@storybook/theming";
import type { Preview } from "@storybook/react";
import "../src/styles/globals"

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      theme: themes.dark,
    },
    layout: "fullscreen"
  },
};

export default preview;
