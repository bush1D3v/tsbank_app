import type { Meta, StoryObj } from "@storybook/react";
import { ProfileIcon } from ".";
import { globals } from "@/styles";
import { View } from "react-native";

const ProfileIconMeta: Meta<typeof ProfileIcon> = {
  title: "Layout/Header/ProfileIcon",
  component: ProfileIcon,
  decorators: [
    Story => (
      <View style={globals.container} className="justify-center">
        <View className="h-14">
          <Story />
        </View>
      </View>
    )
  ]
};

export default ProfileIconMeta;

export const Default: StoryObj<typeof ProfileIcon> = {};
