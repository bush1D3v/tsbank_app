import type { Meta, StoryObj } from "@storybook/react";
import { RegisterScreen } from ".";

const RegisterMeta: Meta<typeof RegisterScreen> = {
  title: "Screens/Register",
  component: RegisterScreen
};

export default RegisterMeta;

export const Default: StoryObj<typeof RegisterScreen> = {};
