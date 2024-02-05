import { TextInput } from "react-native";

interface FormInputProps {
  placeholder: string;
  ariaLabel: string;
}

export default function FormInput({
  placeholder,
  ariaLabel
}: FormInputProps): React.JSX.Element {
  return (
    <TextInput
      className="h-10 w-full bg-white rounded-lg placeholder:pl-4 my-2 self-center
      border-2 border-white focus:border-[#112069]"
      placeholder={placeholder}
      aria-label={ariaLabel}
    />
  );
}
