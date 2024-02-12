import { globals } from "@/styles";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, router } from "expo-router";
import { FormInput, Modal } from "@/components";
import {
  Button,
  Text,
  View
} from "react-native";
import { type RegisterSchemaProps, registerSchema } from "./schema";
import { useForm, FormProvider } from "react-hook-form";
import { useState } from "react";
import { registerSubmit } from "./function";

export function RegisterScreen(): React.JSX.Element {
  const [ error, setError ] = useState<string>("");
  const [ isLoading, setIsLoading ] = useState<boolean>(false);
  const [ isModalOpen, setIsModalOpen ] = useState<boolean>(false);

  const {
    ...methods
  } = useForm<RegisterSchemaProps>({
    criteriaMode: "all",
    mode: "onSubmit",
    resolver: zodResolver(registerSchema),
    defaultValues: {
      userData: {
        name: "",
        email: "",
        password: "",
        cpf: "",
        phone: ""
      }
    }
  });

  const onSubmit = async (data: RegisterSchemaProps): Promise<void> => {
    setIsLoading(!isLoading);
    const result = await registerSubmit(data);

    if (result?.success) {
      setIsLoading(false);
      router.replace("/");
    } else {
      setError(result.message);
      setIsLoading(false);
      setIsModalOpen(!isModalOpen);
    }
  };

  return (
    <View style={globals.container} className="justify-between py-20">
      <Modal
        isOpen={isModalOpen}
        setOpen={setIsModalOpen}
        title="Something went wrong!"
        description={error}
        btnMessage="Try again"
      />
      <Text style={globals.text} className="font-bold text-5xl">
        Welcome to TSBank!! 🏦
      </Text>
      <View className="w-4/5">
        <Text style={globals.text} className="text-3xl mb-2">
          Sign up
        </Text>
        <FormProvider {...methods}>
          {methods.formState.errors.userData?.name?.message && (
            <Text style={globals.error}>
              {methods.formState.errors.userData?.name?.message}
            </Text>
          )}
          <FormInput
            placeholder="Name"
            ariaLabel="Name"
            autoComplete="name"
            onChangeText={(text) => {
              methods.setValue("userData.name", text);
              methods.trigger("userData.name");
            }}
            {...methods.register("userData.name")}
          />
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
          <View className="w-[48%] flex-row">
            <View className="w-full mr-[2vw]">
              {methods.formState.errors.userData?.cpf?.message && (
                <Text style={globals.error}>
                  {methods.formState.errors.userData?.cpf?.message}
                </Text>
              )}
              <FormInput
                keyboardType="numeric"
                placeholder="Cpf"
                ariaLabel="Cpf"
                autoComplete="off"
                maxLength={11}
                onChangeText={(text) => {
                  methods.setValue("userData.cpf", text);
                  methods.trigger("userData.cpf");
                }}
                {...methods.register("userData.cpf")}
              />
            </View>
            <View className="w-full ml-[1vw]">
              {methods.formState.errors.userData?.phone?.message && (
                <Text style={globals.error}>
                  {methods.formState.errors.userData?.phone?.message}
                </Text>
              )}
              <FormInput
                keyboardType="numeric"
                placeholder="Phone"
                ariaLabel="Phone"
                autoComplete="tel"
                maxLength={11}
                onChangeText={(text) => {
                  methods.setValue("userData.phone", text);
                  methods.trigger("userData.phone");
                }}
                {...methods.register("userData.phone")}
              />
            </View>
          </View>
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
          accessibilityLabel={isLoading ? "Creating..." : "Create Account"}
          title={isLoading ? "Creating..." : "Create Account"}
          onPress={methods.handleSubmit(onSubmit)}
        />
      </View>
      <View className="flex flex-row gap-2">
        <Text style={globals.text} className="text-xl">
          Already have an account?
        </Text>
        <Link style={globals.text} href="/" className="underline text-xl">
          Sign In
        </Link>
      </View>
    </View >
  );
}
