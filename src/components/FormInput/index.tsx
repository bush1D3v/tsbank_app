import { TextInput, TextInputProps } from "react-native";
import {
  InputErrorHandling,
  type FormStateData,
  type UserDatas,
  type CardDatas
} from "./components";
import {
  type Control,
  type FormState,
  type UseFormClearErrors,
  type UseFormGetFieldState,
  type UseFormGetValues,
  type UseFormHandleSubmit,
  type UseFormRegister,
  type UseFormReset,
  type UseFormResetField,
  type UseFormSetError,
  type UseFormSetFocus,
  type UseFormSetValue,
  type UseFormTrigger,
  type UseFormUnregister,
  type UseFormWatch
} from "react-hook-form";

/* eslint-disable @typescript-eslint/no-explicit-any */
interface FormMethodsProps {
  formState: FormState<FormStateData>;
  setFocus: UseFormSetFocus<FormStateData>;
  getFieldState: UseFormGetFieldState<FormStateData>;
  handleSubmit: UseFormHandleSubmit<FormStateData>;
  setValue: UseFormSetValue<any>;
  trigger: UseFormTrigger<any>;
  register: UseFormRegister<any>;
  unregister: UseFormUnregister<any>;
  clearErrors: UseFormClearErrors<any>;
  watch: UseFormWatch<any>;
  getValues: UseFormGetValues<any>;
  reset: UseFormReset<any>;
  resetField: UseFormResetField<any>;
  setError: UseFormSetError<any>;
  control: Control<any>;
}

type FormInputProps = TextInputProps & {
  placeholder: string;
  inputLabel: UserDatas | CardDatas;
  formMethods: FormMethodsProps;
}

export function FormInput({
  placeholder,
  inputLabel,
  formMethods,
  ...rest
}: FormInputProps): React.JSX.Element {
  return (
    <>
      <InputErrorHandling
        formState={formMethods.formState}
        inputDatas={inputLabel}
      />
      {formMethods.formState.defaultValues?.userData ? (
        <TextInput
          className="h-10 w-full bg-white rounded-lg placeholder:pl-4 my-2
          self-center border-2 border-white focus:border-blackBlue"
          placeholder={placeholder}
          aria-label={placeholder}
          accessibilityLabel={placeholder}
          onChangeText={(text: string) => {
            formMethods.setValue(`userData.${inputLabel}`, text);
            formMethods.trigger(`userData.${inputLabel}`);
          }}
          {...formMethods.register(`userData.${inputLabel}`)}
          {...rest}
        />
      ) : (
        <TextInput
          className="h-10 w-full bg-white rounded-lg placeholder:pl-4 my-2
          self-center border-2 border-white focus:border-blackBlue"
          placeholder={placeholder}
          aria-label={placeholder}
          accessibilityLabel={placeholder}
          onChangeText={(text: string) => {
            formMethods.setValue(`cardData.${inputLabel}`, text);
            formMethods.trigger(`cardData.${inputLabel}`);
          }}
          {...formMethods.register(`cardData.${inputLabel}`)}
          {...rest}
        />
      )}
    </>
  );
}
