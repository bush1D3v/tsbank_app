import { Text } from "react-native";
import { globals } from "@/styles";
import { FormState } from "react-hook-form";

export type FormStateData = {
  userData?: {
    id?: number;
    cpf?: string;
    name?: string;
    email?: string;
    phone?: string;
    balance?: number;
    new_phone?: string;
    new_email?: string;
    new_password?: string;
    password?: string;
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
    value?: number;
    card_type?: string;
  }
  transactionData?: {
    email?: string;
    value?: number;
    password?: string;
    cpf?: string;
  }
}

export type UserDatas = "id" | "cpf" | "name" | "email" | "phone" | "balance" |
  "new_phone" | "new_email" | "new_password" | "password";
export type CardDatas = "id" | "card_number" | "cardholder_name" | "expiration_date" |
  "cvv" | "user_id" | "created_at" | "balance" | "value" | "card_type";
export type TransactionDatas = "email" | "value" | "password" | "cpf";

interface InputErrorHandlingProps {
  formState: FormState<FormStateData>;
  inputDatas: UserDatas | CardDatas | TransactionDatas;
}

export function InputErrorHandling({
  formState,
  inputDatas
}: InputErrorHandlingProps): React.JSX.Element {
  return (
    <>
      {formState.errors.userData?.[ inputDatas as UserDatas ]?.message && (
        <Text style={globals.error} testID="InputErrorHandling">
          {formState.errors.userData?.[ inputDatas as UserDatas ]?.message}
        </Text>
      )}
      {formState.errors.cardData?.[ inputDatas as CardDatas ]?.message && (
        <Text style={globals.error} testID="InputErrorHandling">
          {formState.errors.cardData?.[ inputDatas as CardDatas ]?.message}
        </Text>
      )}
      {formState.errors.transactionData?.[ inputDatas as TransactionDatas ]?.message && (
        <Text style={globals.error} testID="InputErrorHandling">
          {formState.errors.transactionData?.[ inputDatas as TransactionDatas ]?.message}
        </Text>
      )}
    </>
  );
}
