import { globals } from "@/styles";
import { Text, View } from "react-native";

export function CopyrightText(): React.JSX.Element {
  return (
    <View className="flex text-start" testID="CopyrightText">
      <Text className="text-white" testID="CopyrightTextName">
        TSBank
      </Text>
      <Text style={globals.text} testID="CopyrightTextCorp">
        Corporation &copy;
      </Text>
    </View>
  );
}
