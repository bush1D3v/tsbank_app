import { globals } from "@/styles";
import { View } from "react-native";
import { HooksList, UserReception } from "./components";

export function HomeScreen(): React.JSX.Element {
  return (
    <View style={globals.container} className="justify-center">
      <UserReception />
      <HooksList />
    </View>
  );
}
