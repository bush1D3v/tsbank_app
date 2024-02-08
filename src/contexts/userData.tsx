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
    console.error("Erro ao obter informações do usuário:", error);
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
  isUserLoggedIn: boolean;
  setIsUserLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  userData: prevUserInfo(),
  setUserData: () => { },
  isUserLoggedIn: false,
  setIsUserLoggedIn: () => { },
});

const getUserIsLogged = async (callback: (isLogged: boolean) => void) => {
  try {
    const isLoggedIn = await AsyncStorage.getItem("isLoggedIn");
    callback(isLoggedIn ? JSON.parse(isLoggedIn) : true);
  } catch (error) {
    console.error("Erro ao obter informações do usuário:", error);
    callback(true);
  }
};

const isUserLogged = (): boolean => {
  let result: boolean | null = null;

  const callback = (isLogged: boolean) => {
    result = isLogged;
  };

  getUserIsLogged(callback);

  return result !== null ? result : true;
};

export const UserDataProvider = ({ children }: ProviderProp): ReactElement => {
  const [ userData, setUserData ] = useState(prevUserInfo);
  const [ isUserLoggedIn, setIsUserLoggedIn ] = useState<boolean>(isUserLogged);

  return (
    <UserDataContext.Provider
      value={{ userData, setUserData, isUserLoggedIn, setIsUserLoggedIn }}
    >
      {children}
    </UserDataContext.Provider>
  );
};
