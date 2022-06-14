/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { Ionicons, Octicons } from "@expo/vector-icons";
import {
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { DrawerActions,  } from "@react-navigation/native";
import * as React from "react";
import { Alert, Image, Pressable } from "react-native";
import { Avatar } from "react-native-elements";
import Config from "../../../Config";
import SvgIcon from "../../components/icons/svg/TabIcons";
import Colors from "../../constants/Colors";
import { useAppSelector } from "../../hooks/redux";
import useColorScheme from "../../hooks/useColorScheme";
import HomeScreen from "../../screens/home/HomeScreen";
import MessagesScreen from "../../screens/messages/MessagesScreen";
import NotificationsScreen from "../../screens/notifications/NotificationsScreen";
import SearchScreen from "../../screens/search/SearchScreen";
import SpacesScreen from "../../screens/spaces/SpacesScreen";
import tw from "../../styles/tailwind/tailwind";

import {
  MainBottomTabParamList,
  MainBottomTabScreenProps,
} from "../types";
import { HomeTopTabNavigator } from "./HomeTopTab";

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */


const { BASE_URL } = Config || {};

const BottomTab = createBottomTabNavigator<MainBottomTabParamList>();

//TODO: CALL USE_SELECTOR FOR THE AVATAR
export function BottomTabNavigator() {
  const colorScheme = useColorScheme();
  const user = useAppSelector((state) => state.authReducer.user);

  const { avatarUrl } = user || {};

  return (
    <BottomTab.Navigator
      initialRouteName="HomeTopTab"
      screenOptions={({
        navigation,
      }: MainBottomTabScreenProps<keyof MainBottomTabParamList>) => ({
        tabBarShowLabel: false,
        tabBarActiveTintColor: Colors[colorScheme].tint,
        headerLeft: () => (
          <Pressable
            style={({ pressed }) => ({
              opacity: pressed ? 0.5 : 1,
            })}>
            <Avatar
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
              size={"small"}
              rounded
              containerStyle={tw`ml-4`}
              source={
                avatarUrl
                  ? { uri: `${BASE_URL}/${avatarUrl}` }
                  : require("../../../assets/images/user.png")
              }
            />
          </Pressable>
        ),
      })}>
      <BottomTab.Screen
        name="HomeTopTab"
        component={HomeTopTabNavigator}
        options={({ navigation }: MainBottomTabScreenProps<"HomeTopTab">) => ({
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name="home" color={color} focused={focused} />
          ),
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
          headerRight: () => (
            <Pressable
              onPress={() => Alert.alert("Not yet ready")}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <Image
                source={require("../../../assets/icons/images/timeline.png")}
                width={27}
                style={tw`mr-4`}
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
          source={require("../../../assets/icons/images/SpacesBlue.png")}
          width={24}
          height={22}
        />
      );
    }
    return (
      <Image
        source={require("../../../assets/icons/images/Spaces.png")}
        width={24}
        height={22}
      />
    );
  }

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
