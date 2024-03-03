import type { Meta, StoryObj } from "@storybook/react";
import { ErrorScreen } from ".";

const ErrorMeta: Meta<typeof ErrorScreen> = {
  title: "Screens/Error",
  component: ErrorScreen
};

export default ErrorMeta;

export const Default: StoryObj<typeof ErrorScreen> = {};
