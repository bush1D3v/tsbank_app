import { UserDataContext } from "@/contexts";
import { balanceFormat } from "@/functions";
import { globals } from "@/styles";
import { useContext } from "react";
import { Text, View } from "react-native";
import Money from "@expo/vector-icons/FontAwesome";

export function UserReception(): React.JSX.Element {
  const { userData } = useContext(UserDataContext);

  return (
    <View className="flex items-center gap-4">
      <Text style={globals.text} className="text-3xl font-bold">
        Hello {"\n"}
        {userData.name} 👋
      </Text>
      <View className="flex flex-row items-center mb-4">
        <Money name="money" size={25} color="white" />
        <Text style={globals.text} className="text-2xl font-bold ml-3">
          {balanceFormat(userData.balance)}
        </Text>
      </View>
    </View>
  );
}
