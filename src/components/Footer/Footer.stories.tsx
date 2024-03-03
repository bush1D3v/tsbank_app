import type { Meta, StoryObj } from "@storybook/react";
import { Footer } from ".";
import { globals } from "@/styles";
import { View } from "react-native";

const FooterMeta: Meta<typeof Footer> = {
  title: "Layout/Footer",
  component: Footer,
  decorators: [
    Story => (
      <View style={globals.container} className="justify-center">
        <Story />
      </View>
    )
  ]
};

export default FooterMeta;

export const Default: StoryObj<typeof Footer> = {};
