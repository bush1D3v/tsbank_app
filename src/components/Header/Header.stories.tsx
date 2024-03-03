import type { Meta, StoryObj } from "@storybook/react";
import { Header } from ".";
import { globals } from "@/styles";
import { View } from "react-native";

const HeaderMeta: Meta<typeof Header> = {
  title: "Layout/Header",
  component: Header,
  decorators: [
    Story => (
      <View style={globals.container} className="justify-center">
        <Story />
      </View>
    )
  ]
};

export default HeaderMeta;

export const Default: StoryObj<typeof Header> = {};
