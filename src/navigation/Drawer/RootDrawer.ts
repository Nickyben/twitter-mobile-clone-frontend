import * as React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../../screens/home/HomeScreen";
import NotificationsScreen from "../../screens/notifications/NotificationsScreen";

const Drawer = createDrawerNavigator();

export default function RootDrawer() {
  return;
}

// <Drawer.Navigator initialRouteName="Home">
//   <Drawer.Screen name="Home" component={HomeScreen} />
//   <Drawer.Screen name="Notifications" component={NotificationsScreen} />
// </Drawer.Navigator>;
