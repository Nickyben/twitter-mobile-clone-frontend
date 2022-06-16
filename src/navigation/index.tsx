/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */

import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  NavigationState,
} from "@react-navigation/native";
import * as React from "react";
import { ColorSchemeName, Platform } from "react-native";
import * as Linking from "expo-linking";
import {
  OnboardingStackNavLinking,
  RootDrawerNavLinking,
} from "./LinkingConfiguration";
import { OnboardingStackNavigator } from "./Stacks/OnboardingStack";
import { TwitterTheme } from "../constants/TwitterTheme";
import { RootDrawerNavigator } from "./Drawer/RootDrawer";
import { updateNavState } from "../redux/actions/navigation";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { AuthStatus } from "../redux/enums";

interface IProps {
  colorScheme: ColorSchemeName;
}
export default function Navigation({ colorScheme }: IProps) {
  const appNavState = useAppSelector((state) => state.navReducer.appNavState);
  const authStatus = useAppSelector((state) => state.authReducer.status);
  const dispatch = useAppDispatch();
  const [initialState, setInitialState] =
    React.useState<NavigationState>(appNavState);
  const [isReady, setIsReady] = React.useState(false);

  const AUTHENTICATED = authStatus === AuthStatus.AUTHENTICATED;
  const navLinking = AUTHENTICATED
    ? RootDrawerNavLinking
    : OnboardingStackNavLinking;

  const handleChangedState = React.useCallback(
    (state) => {
      return dispatch(updateNavState(state));
    },
    [updateNavState, dispatch]
  );

  const checkLinkingInitialUrl = React.useCallback(async () => {
    try {
      const initialUrl = await Linking.getInitialURL();
      if (Platform.OS === "web" || initialUrl != null) {
        console.log("nav state set to undefined");
        setInitialState(undefined);
      }
    } finally {
      setIsReady(true);
    }
  }, []);

  React.useEffect(() => {
    !isReady && checkLinkingInitialUrl();
  }, [checkLinkingInitialUrl]);

  if (!isReady) {
    return null;
  }

  // console.log({ initialState });
  return (
    <NavigationContainer
      onReady={() => 0}
      // fallback
      initialState={initialState}
      onStateChange={handleChangedState}
      linking={navLinking}
      theme={colorScheme === "dark" ? DarkTheme : TwitterTheme}>
      {AUTHENTICATED ? <RootDrawerNavigator /> : <OnboardingStackNavigator />}
    </NavigationContainer>
  );
}
