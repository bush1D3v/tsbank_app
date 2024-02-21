import { globals } from "@/styles";
import { View, Text } from "react-native";

export function DepositScreen(): React.JSX.Element {
  return (
    <View style={globals.container} className="justify-center">
      <Text style={globals.text}>Deposit</Text>
    </View>
  );
}
