import type { Meta, StoryObj } from "@storybook/react";
import { AnchorLink } from ".";
import { globals } from "@/styles";
import { View } from "react-native";
import { HOME } from "@/utils/routerPaths";

const AnchorLinkMeta: Meta<typeof AnchorLink> = {
  title: "Components/AnchorLink",
  component: AnchorLink,
  decorators: [
    Story => (
      <View style={globals.container} className="justify-center">
        <Story />
      </View>
    )
  ]
};

export default AnchorLinkMeta;

export const Default: StoryObj<typeof AnchorLink> = {
  args: {
    text: "HOME",
    buttonBg: "bg-saturatedBlue",
    href: HOME
  }
};
