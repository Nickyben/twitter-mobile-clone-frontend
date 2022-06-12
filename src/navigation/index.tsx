/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */

import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import * as React from "react";
import { ColorSchemeName } from "react-native";

import LinkingConfiguration from "./LinkingConfiguration";
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
  const token = useAppSelector((state) => state.authReducer.token);

  const dispatch = useAppDispatch();
  const [isReady, setIsReady] = React.useState(false);

  const handleChangedState = React.useCallback((state) => {
    dispatch(updateNavState(state));
  }, []);
console.log({ token, authStatus});

  return (
    <NavigationContainer
      onReady={() => 0}
      initialState={appNavState}
      onStateChange={handleChangedState}
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : TwitterTheme}>
      {authStatus !== AuthStatus.AUTHENTICATED ? (
        <OnboardingStackNavigator />
      ) : (
        <RootDrawerNavigator />
      )}
    </NavigationContainer>
  );
}
