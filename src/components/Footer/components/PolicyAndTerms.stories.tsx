import type { Meta, StoryObj } from "@storybook/react";
import { PolicyAndTerms } from ".";
import { View } from "react-native";
import { globals } from "@/styles";

const PolicyAndTermsMeta: Meta<typeof PolicyAndTerms> = {
  title: "Layout/Footer/PolicyAndTerms",
  component: PolicyAndTerms,
  decorators: [
    Story => (
      <View style={globals.container} className="justify-center">
        <Story />
      </View>
    )
  ]
};

export default PolicyAndTermsMeta;

export const Default: StoryObj<typeof PolicyAndTerms> = {};
