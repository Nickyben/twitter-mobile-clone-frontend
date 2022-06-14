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
import LoginScreen from "../../screens/auth/LoginScreen";
import ModalScreen from "../../screens/ModalScreen";
import NotFoundScreen from "../../screens/NotFoundScreen";
import BioScreen from "../../screens/onboarding/BioScreen";
import ConnectAddressBookScreen from "../../screens/onboarding/ConnectAddressBookScreen";
import CreateAccountScreen from "../../screens/onboarding/CreateAccountScreen";
import CustomizeExpScreen from "../../screens/onboarding/CustomizeExpScreen";
import GetStartedScreen from "../../screens/onboarding/GetStartedScreen";
import InterestedInScreen from "../../screens/onboarding/InterestedInScreen";
import LanguagesScreen from "../../screens/onboarding/LanguagesScreen";
import PasswordScreen from "../../screens/onboarding/PasswordScreen";
import ProfilePictureScreen from "../../screens/onboarding/ProfilePictureScreen";
import SuggestionsScreen from "../../screens/onboarding/SuggestionsScreen";
import TurnOnNotificationsScreen from "../../screens/onboarding/TurnOnNotificationsScreen";
import UsernameScreen from "../../screens/onboarding/UserNameScreen";
import VerifyCodeScreen from "../../screens/onboarding/VerifyCodeScreen";

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
      initialRouteName="GetStarted"
      screenOptions={{
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
      <Stack.Screen
        name="CreateAccount"
        component={CreateAccountScreen}
        options={{}}
      />
      <Stack.Screen name="VerifyCode" component={VerifyCodeScreen} options={{}} />
      <Stack.Screen name="Password" component={PasswordScreen} options={{}} />
      <Stack.Screen
        name="ProfilePicture"
        component={ProfilePictureScreen}
        options={{}}
      />
      <Stack.Screen name="Bio" component={BioScreen} options={{}} />

      <Stack.Screen
        name="CustomizeExperience"
        component={CustomizeExpScreen}
        options={{}}
      />
      <Stack.Screen
        name="ConnectAddressBook"
        component={ConnectAddressBookScreen}
        options={{}}
      />
      <Stack.Screen name="Languages" component={LanguagesScreen} options={{}} />
      <Stack.Screen
        name="InterestedIn"
        component={InterestedInScreen}
        options={{}}
      />
      <Stack.Screen name="Suggestions" component={SuggestionsScreen} options={{}} />
      <Stack.Screen
        name="TurnOnNotifications"
        component={TurnOnNotificationsScreen}
        options={{}}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{}}
      />

      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{}} />
      {/* <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="VerifyCode" component={ModalScreen} options={{}} />
      </Stack.Group> */}
    </Stack.Navigator>
  );
}