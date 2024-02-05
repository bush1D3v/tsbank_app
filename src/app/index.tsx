import { globals } from "@/styles";
import { Link } from "expo-router";
import { View, Text } from "react-native";

export default function Index(): React.JSX.Element {
  return (
    <View style={globals.container} className="justify-center gap-4 p-20">
      <Text style={globals.text} className="text-4xl">
        Home
      </Text>
      <Link style={globals.text} href="/login" className="text-2xl bg-black py-2 rounded-2xl w-full">
        Login
      </Link>
      <Link style={globals.text} href="/register" className="text-2xl bg-black py-2 rounded-2xl w-full">
        Register
      </Link>
    </View>
  );
}
