import {
  Button,
  Text,
  View
} from "react-native";
import { globals } from "@/styles";
import { FormInput } from "@/components";
import { Link } from "expo-router";

export default function LoginScreen(): React.JSX.Element {
  return (
    <View style={globals.container} className="flex-1 items-center justify-between py-20">
      <Text style={globals.text} className="font-bold text-5xl text-center">
        Welcome back!! 👋
      </Text>
      <View className="w-4/5">
        <Text style={globals.text} className="text-3xl text-center mb-2">
          Sign in
        </Text>
        <FormInput placeholder="Email" ariaLabel="Email" />
        <FormInput placeholder="Password" ariaLabel="Password" />
        <Button title="Login" />
      </View>
      <View className="flex flex-row gap-2">
        <Text style={globals.text} className="text-xl text-center">
          Don't have an account?
        </Text>
        <Link href="/register">
          <Text style={globals.text} className="underline text-xl text-center">
            Sign Up
          </Text>
        </Link>
      </View>
    </View>
  );
}
