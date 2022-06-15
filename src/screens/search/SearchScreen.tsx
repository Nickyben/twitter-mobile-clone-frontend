import { Ionicons } from "@expo/vector-icons";
import { HeaderTitleProps } from "@react-navigation/elements";
import { StatusBar } from "expo-status-bar";
import { useCallback, useEffect } from "react";
import { Alert, Platform, StyleSheet, TextInput,} from "react-native";
import { SearchBar } from "react-native-elements";

import { Text, View } from "../../components/Themed";
import {
  MainBottomTabScreenProps,
} from "../../navigation/types";
import tw from "../../styles/tailwind/tailwind";

export default function SearchScreen({
  navigation: { setOptions },
}: MainBottomTabScreenProps<"Search">) {

  
  const handleSearch = useCallback((searchKeyWord: string) => {
    console.log(searchKeyWord);
  }, []);

  useEffect(() => {
    setOptions({
      headerTitleStyle: tw`hidden` as any,
      headerRight: () => {
        return (
          <View
            style={tw`flex-row  self-start w-full justify-between pr-4 items-center`}>
            <TextInput
              value={undefined}
              style={tw`text-input-round `}
              onChangeText={handleSearch}
              onBlur={() => 3}
              placeholder={"Search Twitter"}
            />
            <Ionicons name="md-settings-outline" size={24} style={tw`ml-6`} />
          </View>
        );
      },
    });
  }, [setOptions]);


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search Screen</Text>

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
