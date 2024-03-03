import { View } from "react-native";
import {
  Logo,
  ProfileIcon
} from "./components";
import { AnchorLink } from "../AnchorLink";
import { ABOUT, HOME } from "@/utils/routerPaths";

export function Header(): React.JSX.Element {
  return (
    <View className="bg-saturatedBlue flex flex-row items-center
    justify-between py-2 px-4 w-full h-16" testID="Header">
      <Logo />
      <View className="flex justify-center items-center flex-row">
        <AnchorLink text="Home" href={HOME} buttonBg="bg-blueBase" />
        <AnchorLink text="About" href={ABOUT} buttonBg="bg-blueBase" />
      </View>
      <ProfileIcon />
    </View>
  );
}
