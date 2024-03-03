import { AnchorLink } from "@/components";
import { globals } from "@/styles";
import { HOME } from "@/utils/routerPaths";
import { View, Text } from "react-native";

export function ErrorScreen(): React.JSX.Element {
  return (
    <View style={globals.container} testID="ErrorScreen"
      className="justify-around text-center py-24">
      <Text style={globals.text} testID="ErrorScreenTitle" className="text-4xl font-bold">
        Oops! 😯
      </Text>
      <Text style={globals.text} className="text-2xl p-4" testID="ErrorScreenText">
        It seems like you got lost in the financial maze, but don't worry!
        Our experts are working to resolve this. 👨‍💻 🛠️ {"\n"}
        In the meantime, check out our&nbsp;
        <Text className="underline">amazing resources!</Text>&nbsp;
        🚀 🌟
      </Text >
      <Text style={globals.text} testID="ErrorScreenNumber" className="text-6xl font-bold">
        404
      </Text>
      <AnchorLink
        text="Return to home screen"
        href={HOME}
        buttonBg="bg-blackBlue"
        className="py-3 px-5 text-white text-2xl"
        testID="ErrorScreenButton"
      />
    </View>
  );
}
