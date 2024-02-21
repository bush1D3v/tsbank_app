import { Link } from "expo-router";
import { View, Text } from "react-native";
import { globals } from "@/styles";
import { REGISTER } from "@/utils/routerPaths";

export function RegisterRedirect(): React.JSX.Element {
  return (
    <View className="flex flex-row gap-2">
      <Text style={globals.text} className="text-xl">
        Don't have an account?
      </Text>
      <Link style={globals.text} href={REGISTER} className="underline text-xl">
        Sign Up
      </Link>
    </View>
  );
}
