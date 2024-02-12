import { globals } from "@/styles";
import { View, Text } from "react-native";

export function Header(): React.JSX.Element {
  return (
    <View className="bg-saturatedBlue flex items-center justify-center py-2
    px-4 w-full h-14">
      <Text style={globals.text}>Header</Text>
    </View>
  );
}
