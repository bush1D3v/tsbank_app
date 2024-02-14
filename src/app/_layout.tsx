import { SafeAreaView } from "react-native-safe-area-context";
import { Slot, usePathname } from "expo-router";
import {
  Footer,
  Header,
  Loading
} from "@/components";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold
} from "@expo-google-fonts/inter";
import { UserDataProvider } from "@/contexts";
import { QueryClient, QueryClientProvider } from "react-query";

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

  const AdaptableSlot = () => {
    const actualPath = usePathname();

    return (
      <>
        {actualPath === "/" || actualPath === "/register" ? (
          <Slot />
        ) : (
          <>
            <Header />
            <Slot />
            <Footer />
          </>
        )}
      </>
    );
  };

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <UserDataProvider>
        <SafeAreaView className="flex-1 bg-blueBase">
          <AdaptableSlot />
        </SafeAreaView>
      </UserDataProvider>
    </QueryClientProvider>
  );
}
