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
import ModalScreen from "../../screens/ModalScreen";
import GetStartedScreen from "../../screens/onboarding/GetStartedScreen";
import UsernameScreen from "../../screens/onboarding/UserNameScreen";

import { OnboardingStackParamList, OnboardingStackScreenProps } from "../types";

const FakeComponent = () => {
  return <></>;
};
/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<OnboardingStackParamList>();

export function OnboardingStackNavigator() {
  const colorScheme = useColorScheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerTitleAlign: "center",
        headerTransparent: true,
        headerTintColor: Colors[colorScheme].primary,
        headerStyle: { backgroundColor: Colors[colorScheme].background },
        headerTitle: () => (
          <Image
            source={require("../../../assets/images/twitterLogoBlue.png")}
            width={27}
            style={{ aspectRatio: 27 / 22 }}
          />
        ),
      }}>
      <Stack.Screen name="GetStarted" component={GetStartedScreen} options={{}} />
      <Stack.Screen name="Username" component={UsernameScreen} options={{}} />
      <Stack.Screen name="Notfound" component={FakeComponent} options={{}} />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="VerifyCode" component={ModalScreen} options={{}} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
