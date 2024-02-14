import { globals } from "@/styles";
import { Text, View } from "react-native";

export function ProfileScreen(): React.JSX.Element {
  return (
    <View style={globals.container} className="justify-center">
      <Text style={globals.text}>
        Profile
      </Text>
    </View>
  );
}
