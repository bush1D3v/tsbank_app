import type { Meta, StoryObj } from "@storybook/react";
import { HooksList } from ".";
import { View } from "react-native";
import { globals } from "@/styles";

const HooksListMeta: Meta<typeof HooksList> = {
  title: "Screens/Home/HooksList",
  component: HooksList,
  decorators: [
    Story => (
      <View style={globals.container} className="justify-center">
        <Story />
      </View>
    )
  ]
};

export default HooksListMeta;

export const Default: StoryObj<typeof HooksList> = {};
