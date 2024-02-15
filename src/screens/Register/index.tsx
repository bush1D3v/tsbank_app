import { globals } from "@/styles";
import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "expo-router";
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
import { LoginRedirect } from "./components";

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
          <FormInput
            placeholder="Name"
            inputLabel="name"
            autoComplete="name"
            maxLength={75}
            formMethods={methods}
          />
          <FormInput
            placeholder="Email"
            inputLabel="email"
            autoComplete="email"
            maxLength={75}
            keyboardType="email-address"
            formMethods={methods}
          />
          <View className="w-[48%] flex-row">
            <View className="w-full mr-[2vw]">
              <FormInput
                placeholder="Cpf"
                inputLabel="cpf"
                keyboardType="numeric"
                maxLength={11}
                formMethods={methods}
                autoComplete="off"
              />
            </View>
            <View className="w-full ml-[1vw]">
              <FormInput
                placeholder="Phone"
                inputLabel="phone"
                keyboardType="numeric"
                autoComplete="tel"
                maxLength={11}
                formMethods={methods}
              />
            </View>
          </View>
          <FormInput
            placeholder="Password"
            inputLabel="password"
            secureTextEntry
            autoComplete="password"
            maxLength={16}
            formMethods={methods}
          />
        </FormProvider>
        <Button
          disabled={!!isLoading}
          accessibilityLabel={isLoading ? "Creating..." : "Create Account"}
          title={isLoading ? "Creating..." : "Create Account"}
          onPress={methods.handleSubmit(onSubmit)}
        />
      </View>
      <LoginRedirect />
    </View >
  );
}
