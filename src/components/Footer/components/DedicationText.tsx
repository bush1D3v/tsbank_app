import { globals } from "@/styles";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export function DedicationText(): React.JSX.Element {
  return (
    <View className="flex text-center">
      <Text style={globals.text}>
        Made with 💖
      </Text>
      <Text style={globals.text}>
        by&nbsp;
        <Link style={globals.text}
          className="font-bold underline"
          href="https://bushi-links.vercel.app/"
          rel="noreferrer noopener">
          bush1D3v
        </Link>
      </Text>
    </View>
  );
}
