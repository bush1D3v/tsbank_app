import { Text } from "react-native";
import { globals } from "@/styles";
import { FormState } from "react-hook-form";

export type FormStateData = {
  userData?: {
    id?: string;
    name?: string;
    email?: string;
    password?: string;
    cpf?: string;
    phone?: string;
    balance?: string;
  }
  cardData?: {
    id?: number;
    card_number?: string;
    cardholder_name?: string;
    expiration_date?: string;
    cvv?: string;
    user_id?: number;
    created_at?: string;
    balance?: number;
  }
}

export type UserDatas = "id" | "cpf" | "name" | "email" | "phone" | "balance";
export type CardDatas = "id" | "card_number" | "cardholder_name" | "balance" |
  "cvv" | "user_id" | "created_at" | "expiration_date";

export interface InputErrorHandlingProps {
  formState: FormState<FormStateData>;
  inputDatas: UserDatas | CardDatas;
}

export function InputErrorHandling({
  formState,
  inputDatas
}: InputErrorHandlingProps): React.JSX.Element {
  return (
    <>
      {formState.errors.userData?.[ inputDatas as UserDatas ]?.message && (
        <Text style={globals.error}>
          {formState.errors.userData?.[ inputDatas as UserDatas ]?.message}
        </Text>
      )}
      {formState.errors.cardData?.[ inputDatas as CardDatas ]?.message && (
        <Text style={globals.error}>
          {formState.errors.cardData?.[ inputDatas as CardDatas ]?.message}
        </Text>
      )}
    </>
  );
}
