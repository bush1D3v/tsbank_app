import axios from "axios";
import { type RegisterSchemaProps } from "../schema";
import { handleRequestError } from "@/functions";
import { API_BASE_URL, REGISTER_ENDPOINT } from "@/utils/apiPaths";

export interface registerResponseProps {
  success: boolean;
  message: string;
}

export async function registerSubmit(
  data: RegisterSchemaProps
): Promise<registerResponseProps> {
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
        success: true,
        message: "User registered successfully!"
      };
    } else {
      return {
        success: false,
        message: "An error occurred while registering the user."
      };
    }
  } catch (error) {
    return handleRequestError(error);
  }
}
