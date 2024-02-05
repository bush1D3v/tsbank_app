import { FormInput } from "@/components";
import { globals } from "@/styles";
import { Link } from "expo-router";
import {
  Button,
  Text,
  View
} from "react-native";

export default function RegisterScreen(): React.JSX.Element {
  return (
    <View style={globals.container} className="flex-1 items-center justify-between py-20">
      <Text style={globals.text} className="font-bold text-5xl">
        Welcome to TSBank!! 🏦
      </Text>
      <View className="w-4/5">
        <Text style={globals.text} className="text-3xl mb-2">
          Sign up
        </Text>
        <FormInput placeholder="Name" ariaLabel="Name" />
        <FormInput placeholder="Email" ariaLabel="Email" />
        <View className="w-[48%] flex-row">
          <View className="w-full mr-[2vw]">
            <FormInput placeholder="Cpf" ariaLabel="Cpf" />
          </View>
          <View className="w-full ml-[1vw]">
            <FormInput placeholder="Phone" ariaLabel="Phone" />
          </View>
        </View>
        <FormInput placeholder="Password" ariaLabel="Password" />
        <Button title="Create Account" />
      </View>
      <View className="flex flex-row gap-2">
        <Text style={globals.text} className="text-xl">
          Already have an account?
        </Text>
        <Link href="/login">
          <Text style={globals.text} className="underline text-xl">
            Sign In
          </Text>
        </Link>
      </View>
    </View>
  );
}
