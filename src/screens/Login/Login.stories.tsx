import type { Meta, StoryObj } from "@storybook/react";
import { LoginScreen } from ".";

const LoginMeta: Meta<typeof LoginScreen> = {
  title: "Screens/Login",
  component: LoginScreen
};

export default LoginMeta;

export const Default: StoryObj<typeof LoginScreen> = {};
