import type { Meta, StoryObj } from "@storybook/react";
import { RegisterRedirect } from ".";
import { View } from "react-native";
import { globals } from "@/styles";

const RegisterRedirectMeta: Meta<typeof RegisterRedirect> = {
  title: "Screens/Login/RegisterRedirect",
  component: RegisterRedirect,
  decorators: [
    Story => (
      <View style={globals.container} className="justify-center">
        <Story />
      </View>
    )
  ]
};

export default RegisterRedirectMeta;

export const Default: StoryObj<typeof RegisterRedirect> = {};
