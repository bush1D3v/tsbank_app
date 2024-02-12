import { Footer, Header } from "@/components";
import { globals } from "@/styles";
import { View, Text } from "react-native";

export function HomeScreen(): React.JSX.Element {
  return (
    <View style={globals.container} className="justify-between">
      <Header />
      <Text style={globals.text}>
        Home
      </Text>
      <Footer />
    </View>
  );
}
