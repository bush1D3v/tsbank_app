import { globals } from "@/styles";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Text,
  Button,
  View
} from "react-native";
import { FormInput, Modal } from "@/components";
import { Link, router } from "expo-router";
import { type LoginSchemaProps, loginSchema } from "./schema";
import { loginSubmit } from "./function";
import { FormProvider, useForm } from "react-hook-form";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function LoginScreen(): React.JSX.Element {
  const [ error, setError ] = useState<string>("");
  const [ isLoading, setIsLoading ] = useState<boolean>(false);
  const [ isModalOpen, setIsModalOpen ] = useState<boolean>(false);

  const {
    ...methods
  } = useForm<LoginSchemaProps>({
    criteriaMode: "all",
    mode: "onSubmit",
    resolver: zodResolver(loginSchema),
    defaultValues: {
      userData: {
        email: "",
        password: ""
      }
    }
  });

  const onSubmit = async (data: LoginSchemaProps): Promise<void> => {
    setIsLoading(!isLoading);
    const result = await loginSubmit(data);

    if (result?.success) {
      setIsLoading(false);
      await AsyncStorage.setItem("userData", JSON.stringify(result.userData));
      router.replace("/home");
    } else {
      setError(result.message);
      setIsLoading(false);
      setIsModalOpen(!isModalOpen);
    }
  };

  return (
    <View style={globals.container} className="justify-between py-20 font-bold">
      <Modal
        isOpen={isModalOpen}
        setOpen={setIsModalOpen}
        title="Something went wrong!"
        description={error}
        btnMessage="Try again"
      />
      <Text style={globals.text} className="font-bold text-5xl text-center">
        Welcome back!! 👋
      </Text>
      <View className="w-4/5">
        <Text style={globals.text} className="text-3xl text-center mb-2 font-body">
          Sign in
        </Text>
        <FormProvider {...methods}>
          {methods.formState.errors.userData?.email?.message && (
            <Text style={globals.error}>
              {methods.formState.errors.userData?.email?.message}
            </Text>
          )}
          <FormInput
            placeholder="Email"
            ariaLabel="Email"
            autoComplete="email"
            keyboardType="email-address"
            onChangeText={(text) => {
              methods.setValue("userData.email", text);
              methods.trigger("userData.email");
            }}
            {...methods.register("userData.email")}
          />
          {methods.formState.errors.userData?.password?.message && (
            <Text style={globals.error}>
              {methods.formState.errors.userData?.password?.message}
            </Text>
          )}
          <FormInput
            secureTextEntry
            placeholder="Password"
            ariaLabel="Password"
            autoComplete="password"
            maxLength={16}
            onChangeText={(text) => {
              methods.setValue("userData.password", text);
              methods.trigger("userData.password");
            }}
            {...methods.register("userData.password")}
          />
        </FormProvider>
        <Button
          disabled={!!isLoading}
          accessibilityLabel={isLoading ? "Logging in..." : "Login"}
          title={isLoading ? "Logging in..." : "Login"}
          onPress={methods.handleSubmit(onSubmit)}
        />
      </View>
      <View className="flex flex-row gap-2">
        <Text style={globals.text} className="text-xl">
          Don't have an account?
        </Text>
        <Link style={globals.text} href="/register" className="underline text-xl">
          Sign Up
        </Link>
      </View>
    </View >
  );
}
