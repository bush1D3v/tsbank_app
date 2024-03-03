import {
  type ReactElement,
  createContext,
  useState
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { type User } from "@/types";

const initialUser: User = {
  id: 0,
  name: "John Doe",
  balance: 0,
  cpf: "12345678912",
  email: "johndoe@gmail.com",
  phone: "21123456789"
};

const getUserInfo = async (callback: (user: User) => void) => {
  try {
    const userInfo = await AsyncStorage.getItem("userData");
    callback(userInfo ? JSON.parse(userInfo) : initialUser);
  } catch (error) {
    callback(initialUser);
  }
};

interface ProviderProp {
  children: React.ReactNode;
}

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
