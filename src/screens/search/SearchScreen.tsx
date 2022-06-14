import { HeaderTitleProps } from "@react-navigation/elements";
import { StatusBar } from "expo-status-bar";
import { useCallback, useEffect } from "react";
import { Alert, Platform, StyleSheet, TextInput } from "react-native";
import { SearchBar } from "react-native-elements";

import { Text, View } from "../../components/Themed";
import { MainBottomTabScreenProps, RootStackScreenProps } from "../../navigation/types";
import tw from "../../styles/tailwind/tailwind";

export default function SearchScreen({
  navigation: { setOptions },
}: RootStackScreenProps<"NotFound">) {
  const handleSearch = useCallback((searchKeyWord: string) => {
    console.log(searchKeyWord);
  }, []);

  useEffect(() => {
    setOptions({
      headerTitleAlign: "left",
      headerSearchBarOptions: {
        inputType: "text",
        placeholder: "Search Twitter",
        onChangeText: (event) => Alert.alert(event.nativeEvent.text),
      },
      headerTransparent: false,
      headerTitle: "",
      // headerTitleContainerStyle:tw` bg-green-500 flex-2`,
      headerRight: () => {
        return (
          <TextInput
            value={undefined}
            style={tw`text-input-round border-1 `}
            onChangeText={handleSearch}
            onBlur={() =>3}
            placeholder={'Search Twitter'}
          />
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
