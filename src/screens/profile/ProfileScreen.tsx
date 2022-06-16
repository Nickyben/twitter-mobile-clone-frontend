import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { HeaderBackButton, useHeaderHeight } from "@react-navigation/elements";
import { Fragment, useCallback, useEffect, useState } from "react";
import {
  LayoutChangeEvent,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Platform,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import { Button } from "react-native-elements";
import ProfileTopContent from "../../components/profile/ProfileTopContent";
import { isAndroid } from "../../../Config";

import { Text, View } from "../../components/Themed";
import Colors, { tintColorDark, tintColorPrimary } from "../../constants/Colors";
import { useAppDispatch } from "../../hooks/redux";
import { RootDrawerScreenProps } from "../../navigation/types";
import { fakeLogout } from "../../redux/actions/auth/loginAction";
import tw from "../../styles/tailwind/tailwind";
import { ProfileTopTab } from "../../navigation/Tabs/ProfileTopTab";
import { NativeEvent } from "react-native-reanimated/lib/types/lib/reanimated2/commonTypes";
import { StatusBar } from "expo-status-bar";
import { useProfileScroll } from "../../hooks/useProfileScroll";

export default function ProfileScreen({
  navigation: { setOptions, goBack, canGoBack },
}: RootDrawerScreenProps<"Profile">) {
  const dispatch = useAppDispatch();
  const headerHeight = useHeaderHeight();
  const { height } = useWindowDimensions();
  
  const { handleScroll,handleTopTabScroll, colorHeader, startTopBarScroll, setTopBarPosition} = useProfileScroll();
 
  

  useEffect(() => {
    setOptions({
      headerTitleStyle: tw`hidden` as any,
      headerTransparent: true,
      headerBackgroundContainerStyle: tw`${colorHeader ? "bg-primary" : ""}`,
      headerTintColor: tintColorDark,
      headerLeft: () => {
        return (
          <HeaderBackButton
            onPress={() => canGoBack() && goBack()}
            backImage={() => (
              <Ionicons
                name={`${isAndroid ? "arrow-back" : "chevron-back"}`}
                color={tintColorDark}
                size={22}
                style={tw`rounded-full p-2 bg-black-transparent`}
              />
            )}
            style={tw``}
            tintColor={tintColorDark}
          />
        );
      },
      headerRight: () => {
        return (
          <View
            style={tw`flex-row  self-start w-full justify-end pr-4 items-center bg-transparent`}>
            <Ionicons
              name="search"
              color={tintColorDark}
              size={22}
              style={tw`ml-6 rounded-full p-2 bg-black-transparent`}
            />
            <SimpleLineIcons
              name="options-vertical"
              color={tintColorDark}
              size={22}
              style={tw`ml-6 rounded-full p-2 bg-black-transparent`}
            />
          </View>
        );
      },
    });
  }, [setOptions, colorHeader]);
  return (
    <Fragment>
      <ScrollView
        scrollEnabled={!startTopBarScroll}
        onScroll={handleScroll}
        style={tw`  py-0  `}
        contentContainerStyle={tw` min-h-full pb-5`}>
        <ProfileTopContent userId={null} />
        <View
          style={tw`h-[${height}px]  `}
          onLayout={setTopBarPosition}>
          <ProfileTopTab
            startScrollTabBar={startTopBarScroll}
            onTabBarScrollToTop={handleTopTabScroll}
          />
        </View>
        <StatusBar style={"auto"} />
      </ScrollView>
    </Fragment>
  );
}
