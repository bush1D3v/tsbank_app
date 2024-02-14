import { View, Text } from "react-native";
import { globals } from "@/styles";

export function AboutScreen(): React.JSX.Element {
  return (
    <View style={globals.container} className="justify-center">
      <Text style={globals.text}>
        About
      </Text>
    </View>
  );
}
