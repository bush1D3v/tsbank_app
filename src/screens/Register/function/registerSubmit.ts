import axios from "axios";
import { type RegisterSchemaProps } from "../schema";
import { handleRequestError } from "@/functions";
import { API_BASE_URL, REGISTER_ENDPOINT } from "@/utils/apiPaths";

export interface registerResponseProps {
  success: boolean;
}

export async function registerSubmit(
  data: RegisterSchemaProps
) {
  const { userData } = data;

  try {
    const response = await axios.post(
      `${API_BASE_URL}${REGISTER_ENDPOINT}`,
      {
        name: userData.name,
        email: userData.email,
        password: userData.password,
        cpf: userData.cpf,
        phone: userData.phone
      });

    if (response.status === 201) {
      return {
        success: true
      };
    } else {
      return {
        success: false
      };
    }
  } catch (error) {
    handleRequestError(error);
  }
}
