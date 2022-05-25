/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */

import { DefaultTheme, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName } from "react-native";
import ModalScreen from "../../screens/ModalScreen";
import GetStartedScreen from "../../screens/onboarding/GetStartedScreen";

import { OnboardingStackParamList } from "../types";

const FakeComponent = () => {
  return <></>;
};
/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<OnboardingStackParamList>();

export function OnboardingStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="GetStarted" component={GetStartedScreen} options={{}} />
      <Stack.Screen
        name="Username"
        component={FakeComponent}
        options={{ title: "Oops!" }}
      />
      <Stack.Screen
        name="Notfound"
        component={FakeComponent}
        options={{ title: "Oops!" }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen
          name="VerifyCode"
          component={ModalScreen}
          options={{ headerShown: true }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}
