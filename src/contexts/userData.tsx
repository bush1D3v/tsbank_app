import {
  type ReactElement,
  createContext,
  useState
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { type User } from "@/types";

const getUserInfo = async (callback: (user: User) => void) => {
  try {
    const userInfo = await AsyncStorage.getItem("userData");
    callback(userInfo ? JSON.parse(userInfo) : initialUser);
  } catch (error) {
    console.error("Error getting user information:", error);
    callback(initialUser);
  }
};

interface ProviderProp {
  children: React.ReactNode;
}

const initialUser: User = {
  id: 0,
  name: "",
  balance: 0,
  cpf: "",
  email: "",
  phone: ""
};


const prevUserInfo = (): User => {
  let result: User | null = null;

  const callback = (user: User) => {
    result = user;
  };

  getUserInfo(callback);

  return result || initialUser;
};

export const UserDataContext = createContext<{
  userData: User;
  setUserData: React.Dispatch<React.SetStateAction<User>>;
}>({
  userData: prevUserInfo(),
  setUserData: () => { },
});

export const UserDataProvider = ({ children }: ProviderProp): ReactElement => {
  const [ userData, setUserData ] = useState(prevUserInfo);

  return (
    <UserDataContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserDataContext.Provider>
  );
};
