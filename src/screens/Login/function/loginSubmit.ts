import axios from "axios";
import { type LoginSchemaProps } from "../schema";
import { UserData } from "@/types";
import { handleRequestError } from "@/functions";
import { API_BASE_URL, LOGIN_ENDPOINT } from "@/utils/apiPaths";

export interface loginResponseProps {
  success: boolean;
  userData?: UserData;
}

export async function loginSubmit(
  data: LoginSchemaProps
) {
  const { userData } = data;

  try {
    const response = await axios.post(
      `${API_BASE_URL}${LOGIN_ENDPOINT}`,
      {
        email: userData.email,
        password: userData.password
      });

    if (response.status === 200) {
      return {
        success: true,
        userData: response.data
      };
    } else {
      return {
        success: false
      };
    }
  } catch (error) {
    return handleRequestError(error);
  }
}
