import { AnchorLink } from "@/components";
import { ABOUT, HOME } from "@/utils/routerPaths";
import { View } from "react-native";

export function NavLinks(): React.JSX.Element {
  return (
    <View className="flex justify-center items-center flex-row">
      <AnchorLink text="Home" href={HOME} buttonBg="bg-blueBase" />
      <AnchorLink text="About" href={ABOUT} buttonBg="bg-blueBase" />
    </View>
  );
}
