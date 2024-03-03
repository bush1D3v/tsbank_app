import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from ".";
import { View } from "react-native";
import { globals } from "@/styles";

const ModalMeta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  decorators: [
    Story => (
      <View style={globals.container}>
        <Story />
      </View>
    )
  ]
};

export default ModalMeta;

export const Default: StoryObj<typeof Modal> = {
  args: {
    isOpen: true,
    setOpen: () => { },
    title: "Something went wrong!",
    description: "Error 401: Invalid email and/or password.",
    btnMessage: "Try again"
  }
};
