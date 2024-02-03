import {
  Button,
  Linking,
  Text,
  View
} from "react-native";

export default function Home(): React.JSX.Element {
  return (
    <View className="flex-1 items-center justify-center bg-blueBase">
      <Text className="font-bold text-3xl text-white">
        Welcome to TSBank!! 🏦
      </Text>
      <Text className="text-white text-xl text-center mb-2">
        While developers are working on the app, you can view the source here:
      </Text>
      <Button
        title="View Source"
        onPress={() => {
          Linking.openURL("https://github.com/bush1D3v/tsbank_app");
        }}
      />
    </View>
  );
}
