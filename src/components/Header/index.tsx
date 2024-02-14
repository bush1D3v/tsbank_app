import { View } from "react-native";
import {
  Logo,
  ProfileIcon,
  NavLinks
} from "./components";

export function Header(): React.JSX.Element {
  return (
    <View className="bg-saturatedBlue flex flex-row items-center
    justify-between py-2 px-4 w-full h-16">
      <Logo />
      <NavLinks />
      <ProfileIcon />
    </View>
  );
}
