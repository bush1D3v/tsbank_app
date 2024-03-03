import type { Meta, StoryObj } from "@storybook/react";
import { LoginRedirect } from ".";
import { View } from "react-native";
import { globals } from "@/styles";

const LoginRedirectMeta: Meta<typeof LoginRedirect> = {
  title: "Screens/Register/LoginRedirect",
  component: LoginRedirect,
  decorators: [
    Story => (
      <View style={globals.container} className="justify-center">
        <Story />
      </View>
    )
  ]
};

export default LoginRedirectMeta;

export const Default: StoryObj<typeof LoginRedirect> = {};
