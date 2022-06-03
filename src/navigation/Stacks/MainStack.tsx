/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */

import { FontAwesome } from "@expo/vector-icons";
import { DefaultTheme, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, Image, Pressable } from "react-native";
import Colors from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";
import { BottomTabNavigator } from "../Tabs/BottomTab";


import { MainStackParamList, OnboardingStackParamList, OnboardingStackScreenProps } from "../types";

const FakeComponent = () => {
  return <></>;
};
/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<MainStackParamList>();

export function MainStackNavigator() {
  const colorScheme = useColorScheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      
      }}>
      <Stack.Screen
        name="MainTab"
        component={BottomTabNavigator}
        options={{}}
      />

    

      <Stack.Screen name="Notfound" component={FakeComponent} options={{}} />
      {/* <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="VerifyCode" component={ModalScreen} options={{}} />
      </Stack.Group> */}
    </Stack.Navigator>
  );
}
