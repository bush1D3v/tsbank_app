import { SafeAreaView } from "react-native-safe-area-context";
import { Slot } from "expo-router";

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold
} from "@expo-google-fonts/inter";
import { Loading } from "@/components";

export default function Layout(): React.JSX.Element {
  const [ fontsLoaded ] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <SafeAreaView className="flex-1 bg-blueBase">
      <Slot />
    </SafeAreaView>
  );
}
