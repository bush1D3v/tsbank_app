import {
  Text,
  Button,
  View
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { loginSubmit } from "./function";
import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "expo-router";
import { type LoginSchemaProps, loginSchema } from "./schema";
import { FormProvider, useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { globals } from "@/styles";
import { FormInput, Modal } from "@/components";
import { HOME } from "@/utils/routerPaths";
import { UserDataContext } from "@/contexts";
import { RegisterRedirect } from "./components";

export function LoginScreen(): React.JSX.Element {
  const [ error, setError ] = useState<string>("");
  const [ isLoading, setIsLoading ] = useState<boolean>(false);
  const [ isModalOpen, setIsModalOpen ] = useState<boolean>(false);
  const { setUserData } = useContext(UserDataContext);

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

    if (!result.success) {
      setError(result.message);
      setIsLoading(false);
      setIsModalOpen(!isModalOpen);
    } else if (result.success && result.userData) {
      setIsLoading(false);
      await AsyncStorage.setItem("userData", JSON.stringify(result.userData));
      setUserData(result.userData.user);
      router.replace(HOME);
    }
  };

  return (
    <View
      style={globals.container} testID="LoginScreen"
      className="justify-between py-20 font-bold"
    >
      <Modal
        isOpen={isModalOpen}
        setOpen={setIsModalOpen}
        title="Something went wrong!"
        description={error}
        btnMessage="Try again"
      />
      <Text style={globals.text} testID="LoginScreenWelcomeText"
        className="font-bold text-5xl text-center"
      >
        Welcome back!! {"\n"}
        👋
      </Text>
      <View className="w-4/5">
        <Text style={globals.text} testID="LoginScreenSignInText"
          className="text-3xl text-center mb-2 font-body"
        >
          Sign in
        </Text>
        <FormProvider {...methods}>
          <FormInput
            placeholder="Email"
            inputLabel="email"
            autoComplete="email"
            keyboardType="email-address"
            maxLength={75}
            formMethods={methods}
            testID="LoginScreenEmailInput"
          />
          <FormInput
            placeholder="Password"
            inputLabel="password"
            secureTextEntry
            autoComplete="current-password"
            maxLength={16}
            formMethods={methods}
            testID="LoginScreenPasswordInput"
          />
        </FormProvider>
        <Button
          disabled={!!isLoading}
          accessibilityLabel={isLoading ? "Logging in..." : "Login"}
          title={isLoading ? "Logging in..." : "Login"}
          onPress={methods.handleSubmit(onSubmit)}
          color={globals.inputFormButton.color}
          testID="LoginScreenSubmitButton"
        />
      </View>
      <RegisterRedirect />
    </View >
  );
}
