import { globals } from "@/styles";
import { Text, View } from "react-native";

export function CopyrightText(): React.JSX.Element {
  return (
    <View className="flex text-start">
      <Text className="text-white">
        TSBank
      </Text>
      <Text style={globals.text}>
        Corporation &copy;
      </Text>
    </View>
  );
}
