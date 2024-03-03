import { globals } from "@/styles";
import { View, Text } from "react-native";

export function CardScreen(): React.JSX.Element {
  return (
    <View style={globals.container} className="justify-center" testID="CardScreen">
      <Text style={globals.text}>Card</Text>
    </View>
  );
}
