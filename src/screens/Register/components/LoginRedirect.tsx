import { Link } from "expo-router";
import { View, Text } from "react-native";
import { globals } from "@/styles";
import { LOGIN } from "@/utils/routerPaths";

export function LoginRedirect(): React.JSX.Element {
  return (
    <View className="flex flex-row gap-2" testID="LoginRedirect">
      <Text style={globals.text} className="text-xl" testID="LoginRedirectText">
        Already have an account?
      </Text>
      <Link style={globals.text} href={LOGIN} testID="LoginRedirectLink"
        className="underline text-xl">
        Sign In
      </Link>
    </View>
  );
}
