import type { Meta, StoryObj } from "@storybook/react";
import { Loading } from ".";
import { globals } from "@/styles";
import { View } from "react-native";

const LoadingMeta: Meta<typeof Loading> = {
  title: "Components/Loading",
  component: Loading,
  decorators: [
    Story => (
      <View style={globals.container} className="justify-center">
        <Story />
      </View>
    )
  ]
};

export default LoadingMeta;

export const Default: StoryObj<typeof Loading> = {};
