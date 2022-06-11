import * as React from "react";
import { StatusBar } from "react-native";
import {
  createDrawerNavigator,
  DrawerNavigationOptions,
} from "@react-navigation/drawer";
import { RootDrawerParamList, RootDrawerScreenProps } from "../types";
import { MainStackNavigator } from "../Stacks/MainStack";
import tw from "../../styles/tailwind/tailwind";
import ModalScreen from "../../screens/ModalScreen";
import { HeaderBackButton } from "@react-navigation/elements";
import { CustomDrawerContent } from "./DrawerContent";

const Drawer = createDrawerNavigator<RootDrawerParamList>();
export const RootDrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="MainStack"
      screenOptions={drawerScreenOptions}
      drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="MainStack"
        component={MainStackNavigator}
        options={{ drawerItemStyle: tw``, headerShown: false, }}
      />
      <Drawer.Screen
        name="Profile"
        component={ModalScreen}
        options={{ drawerItemStyle: tw`` }}
      />
      <Drawer.Screen
        name="Lists"
        component={ModalScreen}
        options={{ drawerItemStyle: tw`` }}
      />
      <Drawer.Screen
        name="Topics"
        component={ModalScreen}
        options={{ drawerItemStyle: tw`` }}
      />
      <Drawer.Screen
        name="Bookmarks"
        component={ModalScreen}
        options={{ drawerItemStyle: tw`` }}
      />
      <Drawer.Screen
        name="Moments"
        component={ModalScreen}
        options={{ drawerItemStyle: tw`` }}
      />
      <Drawer.Screen
        name="Monetisation"
        component={ModalScreen}
        options={{ drawerItemStyle: tw`` }}
      />
      <Drawer.Screen
        name="TwitterForProfessionals"
        component={ModalScreen}
        options={{ drawerItemStyle: tw``, }}
      />
      <Drawer.Screen
        name="TwitterAds"
        component={ModalScreen}
        options={{ drawerItemStyle: tw`` }}
      />
      <Drawer.Screen
        name="SettingsAndPrivacy"
        component={ModalScreen}
        options={{ drawerItemStyle: tw`` }}
      />
      <Drawer.Screen
        name="HelpCenter"
        component={ModalScreen}
        options={{ drawerItemStyle: tw`` }}
      />
    </Drawer.Navigator>
  );
};

const drawerScreenOptions = ({
  navigation,
}: RootDrawerScreenProps<keyof RootDrawerParamList>): DrawerNavigationOptions => {
  return {
    headerShown: true,
    drawerStyle: tw`w-4/5 `,
    headerLeft: (props) => (
      <HeaderBackButton
        {...props}
        onPress={() => {
          navigation.canGoBack() && navigation.goBack();
        }}
      />
    ),
  };
};
