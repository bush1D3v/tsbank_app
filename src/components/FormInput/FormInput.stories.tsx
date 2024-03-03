import type { Meta } from "@storybook/react";
import { FormInput } from ".";
import { View } from "react-native";
import { useForm } from "react-hook-form";
import { globals } from "@/styles";

const FormInputMeta: Meta<typeof FormInput> = {
  title: "Components/FormInput",
  component: FormInput
};

export default FormInputMeta;

type loginProps = {
  userData: {
    email: string;
    password: string;
  };
}

export const Default = () => {
  const {
    ...methods
  } = useForm<loginProps>({
    defaultValues: {
      userData: {
        email: "",
        password: "",
      },
    },
  });

  return (
    <View style={globals.container} className="p-8 justify-center">
      <FormInput
        placeholder="Email"
        inputLabel="email"
        formMethods={methods}
        autoComplete="email"
        maxLength={75}
        keyboardType="email-address"
      />
    </View>
  );
};
