import { globals } from "@/styles";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export function DedicationText(): React.JSX.Element {
  return (
    <View className="flex text-center" testID="DedicationText">
      <Text style={globals.text} testID="DedicationTextMade">
        Made with 💖
      </Text>
      <Text style={globals.text} testID="DedicationTextBy">
        by&nbsp;
        <Link
          className="font-bold underline"
          href="https://bushi-links.vercel.app/"
          rel="noreferrer noopener"
          testID="DedicationTextLink">
          bush1D3v
        </Link>
      </Text>
    </View>
  );
}
