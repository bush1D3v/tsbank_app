import type { Meta, StoryObj } from "@storybook/react";
import { Logo } from ".";
import { globals } from "@/styles";
import { View } from "react-native";

const LogoMeta: Meta<typeof Logo> = {
  title: "Layout/Header/Logo",
  component: Logo,
  decorators: [
    Story => (
      <View style={globals.container} className="justify-center">
        <View className="h-14" >
          <Story />
        </View>
      </View>
    )
  ]
};

export default LogoMeta;

export const Default: StoryObj<typeof Logo> = {};
