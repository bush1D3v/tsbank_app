import { AnchorLink } from "@/components";
import { globals } from "@/styles";
import { HOME } from "@/utils/routerPaths";
import { View, Text } from "react-native";

export function ErrorScreen(): React.JSX.Element {
  return (
    <View style={globals.container} className="justify-around text-center py-24">
      <Text style={globals.text} className="text-4xl font-bold">
        Oops! 😯
      </Text>
      <View className="flex p-4 gap-4">
        <Text style={globals.text} className="text-2xl">
          It seems like you got lost in the financial maze, but don't worry!
          Our experts are working to resolve this. 👨‍💻 🛠️
        </Text>
        <Text style={globals.text} className="text-2xl">
          In the meantime, check out our&nbsp;
          <Text className="underline">amazing resources!</Text>&nbsp;
          🚀 🌟
        </Text >
      </View>
      <Text style={globals.text} className="text-6xl font-bold">
        404
      </Text>
      <AnchorLink
        text="Return to home screen"
        href={HOME}
        buttonBg="bg-saturatedBlue"
        className="py-3 px-5 text-white text-2xl"
      />
    </View>
  );
}
