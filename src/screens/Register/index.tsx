import { FormInput } from "@/components";
import { globals } from "@/styles";
import { Link } from "expo-router";
import {
  Button,
  Text,
  View
} from "react-native";

export function RegisterScreen(): React.JSX.Element {
  return (
    <View style={globals.container} className="justify-between py-20">
      <Text style={globals.text} className="font-bold text-5xl">
        Welcome to TSBank!! 🏦
      </Text>
      <View className="w-4/5">
        <Text style={globals.text} className="text-3xl mb-2">
          Sign up
        </Text>
        <FormInput placeholder="Name" ariaLabel="Name" autoComplete="name" autoFocus />
        <FormInput placeholder="Email" ariaLabel="Email" autoComplete="email" />
        <View className="w-[48%] flex-row">
          <View className="w-full mr-[2vw]">
            <FormInput placeholder="Cpf" ariaLabel="Cpf" />
          </View>
          <View className="w-full ml-[1vw]">
            <FormInput placeholder="Phone" ariaLabel="Phone" autoComplete="tel" />
          </View>
        </View>
        <FormInput placeholder="Password" ariaLabel="Password" autoComplete="password" />
        <Button title="Create Account" />
      </View>
      <View className="flex flex-row gap-2">
        <Text style={globals.text} className="text-xl">
          Already have an account?
        </Text>
        <Link style={globals.text} href="/" className="underline text-xl">
          Sign In
        </Link>
      </View>
    </View>
  );
}
