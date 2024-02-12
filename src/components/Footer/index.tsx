import { View } from "react-native";
import {
  CopyrightText,
  DedicationText,
  PolicyAndTerms
} from "./components";

export function Footer(): React.JSX.Element {
  return (
    <View className="text-sm w-full bg-saturatedBlue flex flex-row
    justify-between py-2 px-4 relative h-14">
      <CopyrightText />
      <PolicyAndTerms />
      <DedicationText />
    </View>
  );
}
