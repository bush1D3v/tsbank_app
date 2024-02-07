import { View, ActivityIndicator } from "react-native";
import colors from "tailwindcss/colors";

export function Loading(): React.JSX.Element {
  return (
    <View className="flex-1 justify-center items-center bg-blueBase">
      <ActivityIndicator color={colors.white} />
    </View>
  );
}
