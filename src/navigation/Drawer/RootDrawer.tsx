import * as React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { RootDrawerParamList } from "../types";
import { MainStackNavigator } from "../Stacks/MainStack";
import tw from "../../styles/tailwind/tailwind";

const Drawer = createDrawerNavigator<RootDrawerParamList>();

export const RootDrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="MainStack"
      screenOptions={{ headerShown: false, }}>
      <Drawer.Screen
        name="MainStack"
        component={MainStackNavigator}
        options={{ drawerItemStyle: tw`` }}
      />
      <Drawer.Screen
        name="Profile"
        component={MainStackNavigator}
        options={{ drawerItemStyle: tw`` }}
      />
    </Drawer.Navigator>
  );
};
