import { globals } from "@/styles";
import { View, Text } from "react-native";

export function PixScreen(): React.JSX.Element {
  return (
    <View style={globals.container} className="justify-center" testID="PixScreen">
      <Text style={globals.text}>Pix</Text>
    </View>
  );
}
