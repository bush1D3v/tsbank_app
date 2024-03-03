import type { Meta, StoryObj } from "@storybook/react";
import { CopyrightText } from ".";
import { View } from "react-native";
import { globals } from "@/styles";

const CopyrightTextMeta: Meta<typeof CopyrightText> = {
  title: "Layout/Footer/CopyrightText",
  component: CopyrightText,
  decorators: [
    Story => (
      <View style={globals.container} className="justify-center">
        <Story />
      </View>
    )
  ]
};

export default CopyrightTextMeta;

export const Default: StoryObj<typeof CopyrightText> = {};
