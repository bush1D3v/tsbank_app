import {
  Text,
  Button,
  View
} from "react-native";
import { globals } from "@/styles";
import { FormInput } from "@/components";
import { Link } from "expo-router";

export function LoginScreen(): React.JSX.Element {
  return (
    <View style={globals.container} className="justify-between py-20 font-bold">
      <Text style={globals.text} className="font-bold text-5xl text-center">
        Welcome back!! 👋
      </Text>
      <View className="w-4/5">
        <Text style={globals.text} className="text-3xl text-center mb-2 font-body">
          Sign in
        </Text>
        <FormInput placeholder="Email" ariaLabel="Email" autoComplete="email" autoFocus />
        <FormInput placeholder="Password" ariaLabel="Password" autoComplete="password" />
        <Button title="Login" />
      </View>
      <View className="flex flex-row gap-2">
        <Text style={globals.text} className="text-xl text-center">
          Don't have an account?
        </Text>
        <Link style={globals.text} href="/register" className="underline
          text-xl text-center">
          Sign Up
        </Link>
      </View>
    </View >
  );
}
