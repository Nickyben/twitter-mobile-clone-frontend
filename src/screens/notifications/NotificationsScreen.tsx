import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { Platform, StyleSheet } from "react-native";

import { Text, View } from "../../components/Themed";
import { MainBottomTabScreenProps } from "../../navigation/types";
import tw from "../../styles/tailwind/tailwind";

export default function NotificationsScreen({
  navigation: { setOptions },
}: MainBottomTabScreenProps<"Notifications">) {
  useEffect(() => {
    setOptions({
      headerRight: () => {
        return <Ionicons name="md-settings-outline" size={24} style={tw`mr-4`} />;
      },
    });
  }, [setOptions]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notifications Screen</Text>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
