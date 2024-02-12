import { TextInput, TextInputProps } from "react-native";

type FormInputProps = TextInputProps & {
  placeholder: string;
  ariaLabel: string;
}

export function FormInput({
  placeholder,
  ariaLabel,
  ...rest
}: FormInputProps): React.JSX.Element {
  return (
    <TextInput
      className="h-10 w-full bg-white rounded-lg placeholder:pl-4 my-2
      self-center border-2 border-white focus:border-blackBlue"
      placeholder={placeholder}
      aria-label={ariaLabel}
      accessibilityLabel={ariaLabel}
      {...rest}
    />
  );
}
