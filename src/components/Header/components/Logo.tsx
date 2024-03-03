import { HOME } from "@/utils/routerPaths";
import { Link } from "expo-router";
import { ImageBackground } from "react-native";

export function Logo(): React.JSX.Element {
  return (
    <ImageBackground
      source={require("@/assets/tsbank-logo.png")}
      className="h-full w-[52px]"
      testID="Logo">
      <Link href={HOME} className="w-full h-full" testID="LogoLink" />
    </ImageBackground>
  );
}
