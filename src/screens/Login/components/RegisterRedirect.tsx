import { Link } from "expo-router";
import { View, Text } from "react-native";
import { globals } from "@/styles";
import { REGISTER } from "@/utils/routerPaths";

export function RegisterRedirect(): React.JSX.Element {
  return (
    <View className="flex flex-row gap-2" testID="RegisterRedirect">
      <Text style={globals.text} testID="RegisterRedirectText" className="text-xl">
        Don't have an account?
      </Text>
      <Link style={globals.text} href={REGISTER} testID="RegisterRedirectLink"
        className="underline text-xl">
        Sign Up
      </Link>
    </View>
  );
}
