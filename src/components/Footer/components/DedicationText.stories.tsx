import type { Meta, StoryObj } from "@storybook/react";
import { DedicationText } from ".";
import { View } from "react-native";
import { globals } from "@/styles";

const DedicationTextMeta: Meta<typeof DedicationText> = {
  title: "Layout/Footer/DedicationText",
  component: DedicationText,
  decorators: [
    Story => (
      <View style={globals.container} className="justify-center">
        <Story />
      </View>
    )
  ]
};

export default DedicationTextMeta;

export const Default: StoryObj<typeof DedicationText> = {};
