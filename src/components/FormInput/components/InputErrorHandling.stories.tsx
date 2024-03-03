import type { Meta } from "@storybook/react";
import {
  Button,
  View,
  Text
} from "react-native";
import { FormProvider, useForm } from "react-hook-form";
import { globals } from "@/styles";
import { InputErrorHandling } from ".";
import { useState } from "react";
import { LoginSchemaProps, loginSchema } from "@/screens/Login/schema";
import { loginSubmit } from "@/screens/Login/function";
import { zodResolver } from "@hookform/resolvers/zod";

const InputErrorHandlingMeta: Meta<typeof InputErrorHandling> = {
  title: "Components/FormInput/InputErrorHandling",
  component: InputErrorHandling
};

export default InputErrorHandlingMeta;

type loginProps = {
  userData: {
    email: string;
    password: string;
  };
}

export const Default = () => {
  const [ isLoading, setIsLoading ] = useState<boolean>(false);

  const {
    ...methods
  } = useForm<loginProps>({
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

    await loginSubmit(data);

    setIsLoading(false);
  };

  return (
    <View style={globals.container} className="p-8 justify-center">
      <Text style={globals.text} className="text-2xl font-bold">
        CLICK ON THE BUTTON TO SEE THE COMPONENT
      </Text>
      <FormProvider {...methods}>
        <View className="m-10">
          <InputErrorHandling
            formState={methods.formState}
            inputDatas="email"
          />
        </View>
      </FormProvider>
      <Button
        disabled={!!isLoading}
        title={isLoading ? "Clicked..." : "CLICK ME"}
        onPress={methods.handleSubmit(onSubmit)}
        color={globals.inputFormButton.color}
      />
    </View>
  );
};
