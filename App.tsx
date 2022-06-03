import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useDeviceContext, useAppColorScheme } from "twrnc";
import useCachedResources from "./src/hooks/useCachedResources";
import useColorScheme from "./src/hooks/useColorScheme";
import Navigation from "./src/navigation";
import tw from "./src/styles/tailwind/tailwind";
import { Provider } from "react-redux";
import { persistor, store } from "./src/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Text, View } from "./src/components/Themed";

export default function App() {
  useDeviceContext(tw, { withDeviceColorScheme: true });
  const { isLoadingComplete, setPersistorIsReady } = useCachedResources();
  // const [colorScheme, toggleColorScheme, setColorScheme] = useAppColorScheme(tw);
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Provider store={store}>
          <PersistGate
            loading={null}
            // loading={<View style={tw`flex-1 bg-red-600 w-full h-full`}></View>}
            persistor={persistor}>
            <Navigation colorScheme={colorScheme} />
          </PersistGate>
        </Provider>
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
