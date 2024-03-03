import type { Meta, StoryObj } from "@storybook/react";
import { UserReception } from ".";
import { View } from "react-native";
import { globals } from "@/styles";

const UserReceptionMeta: Meta<typeof UserReception> = {
  title: "Screens/Home/UserReception",
  component: UserReception,
  decorators: [
    Story => (
      <View style={globals.container} className="justify-center">
        <Story />
      </View>
    )
  ]
};

export default UserReceptionMeta;

export const Default: StoryObj<typeof UserReception> = {};
