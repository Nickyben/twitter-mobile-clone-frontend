/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome, Fontisto, Ionicons, Octicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import * as React from "react";
import { Image, Pressable } from "react-native";
import SvgIcon from "../../components/icons/svg/TabIcons";
import Colors from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";
import HomeScreen from "../../screens/home/HomeScreen";
import MessagesScreen from "../../screens/messages/MessagesScreen";
import NotificationsScreen from "../../screens/notifications/NotificationsScreen";
import SearchScreen from "../../screens/search/SearchScreen";
import SpacesScreen from "../../screens/spaces/SpacesScreen";

import { RootTabParamList, RootTabScreenProps } from "../../types";

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

export function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }: RootTabScreenProps<"Home">) => ({
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name="home" color={color} focused={focused} />
          ),
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate("Modal")}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: "Search",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name="search" color={color} focused={focused} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Spaces"
        component={SpacesScreen}
        options={{
          title: "Spaces",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name="spaces" color={color} focused={focused} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          title: "Notifications",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name="notifications" color={color} focused={focused} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Messages"
        component={MessagesScreen}
        options={{
          title: "Messages",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name="messages" color={color} focused={focused} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon({
  focused,
  name,
}: {
  name: "home" | "search" | "spaces" | "notifications" | "messages";
  color: string;
  focused: boolean;
}) {
  const colorScheme = useColorScheme();
  if (name === "spaces") {
    if (focused) {
      return (
        <Image
          source={require("../../assets/icons/images/SpacesBlue.png")}
          width={24}
          height={22}
        />
      );
    }
    return (
      <Image
        source={require("../../assets/icons/images/Spaces.png")}
        width={24}
        height={22}
      />
    );
  }
  // if (name === "spaces") {
  //   return (
  //     <Ionicons
  //       name={focused ? "mic" : "mic-outline"}
  //       size={35}
  //       color={focused ? Colors[colorScheme].primary : Colors[colorScheme].dark}
  //     />
  //   );
  // }

  if (name === "search") {
    return (
      <Ionicons
        name={focused ? "ios-search" : "ios-search-outline"}
        size={28}
        color={focused ? Colors[colorScheme].primary : Colors[colorScheme].dark}
      />
    );
  }

  if (name === "messages") {
    return (
      <Ionicons
        name={focused ? "mail" : "mail-outline"}
        size={28}
        color={focused ? Colors[colorScheme].primary : Colors[colorScheme].dark}
      />
    );
  }

  if (name === "notifications") {
    return (
      <Octicons
        name={focused ? "bell-fill" : "bell"}
        size={24}
        color={focused ? Colors[colorScheme].primary : Colors[colorScheme].dark}
      />
    );
  }

  return (
    <SvgIcon
      name={name}
      fill={focused ? Colors[colorScheme].primary : Colors[colorScheme].transparent}
      stroke={focused ? Colors[colorScheme].primary : Colors[colorScheme].tint}
    />
  );
}
