import { globals } from "@/styles";
import { View, Text } from "react-native";

export function WithdrawScreen(): React.JSX.Element {
  return (
    <View style={globals.container} className="justify-center">
      <Text style={globals.text}>Withdraw</Text>
    </View>
  );
}
