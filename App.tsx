import { StatusBar } from "expo-status-bar";
import { TouchableOpacity } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useDeviceContext, useAppColorScheme } from "twrnc";
import { Text } from "./src/components/Themed";
import useCachedResources from "./src/hooks/useCachedResources";
import useColorScheme from "./src/hooks/useColorScheme";
import Navigation from "./src/navigation";
import tw from "./src/styles/tailwind/tailwind";

export default function App() {
  useDeviceContext(tw, { withDeviceColorScheme: true });
  const isLoadingComplete = useCachedResources();
  // const [colorScheme, toggleColorScheme, setColorScheme] = useAppColorScheme(tw);

  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />

        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
