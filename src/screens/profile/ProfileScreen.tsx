import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { HeaderBackButton, useHeaderHeight } from "@react-navigation/elements";
import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import {
  FlatList,
  LayoutChangeEvent,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Platform,
  TouchableOpacity,
  ScrollView,
  useWindowDimensions,
  Animated,
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
import { useNestedScroll } from "../../hooks/useNestedScroll";

export default function ProfileScreen({
  navigation: { setOptions, goBack, canGoBack },
}: RootDrawerScreenProps<"Profile">) {
  const dispatch = useAppDispatch();
  const headerHeight = useHeaderHeight();
  const { height } = useWindowDimensions();
  const scrollY = useRef(new Animated.Value(0)).current;

  const {
    handleScroll,
    handleTopTabScroll,
    colorHeader,
    startTopBarScroll,
    onParentEndReached,
    onChildEndReached,
    setTopBarPosition,
    onChildScrollViewEndDrag,
  } = useProfileScroll();

  const animateFlatListScroll = Animated.event(
    [
      {
        nativeEvent: {
          contentOffset: {
            y: scrollY,
          },
        },
      },
    ],
    { useNativeDriver: true }
  );

  const inputRange = [-1, 0, headerHeight / 2, headerHeight, headerHeight * 1.5];
  const outputRange = [1, 1, 1 / 1.5, 1 / 2, 1 / 2];

  const scale = scrollY.interpolate({
    inputRange,
    outputRange,
  });

  const headerOpacity = scrollY.interpolate({
    inputRange,
    outputRange: [0, 0, 1 / 1.25, 1, 1],
  });

  const renderItem = useCallback(({ item }) => {
    return null;
  }, []);

  useEffect(() => {
    setOptions({
      headerTitleStyle: tw`hidden` as any,
      headerTransparent: true,
      headerBackgroundContainerStyle: {
        ...tw`bg-primary`,
        opacity: headerOpacity,
      },
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
                style={tw`rounded-full p-2 bg-primary-transparent`}
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
              style={tw`ml-6 rounded-full p-2 bg-primary-transparent`}
            />
            <SimpleLineIcons
              name="options-vertical"
              color={tintColorDark}
              size={22}
              style={tw`ml-6 rounded-full p-2 bg-primary-transparent`}
            />
          </View>
        );
      },
    });
  }, [setOptions, colorHeader, goBack, canGoBack]);
  return (
    <>
      <Animated.FlatList
        onScroll={animateFlatListScroll}
        style={[tw` `]}
        data={[]}
        renderItem={renderItem}
        contentContainerStyle={tw``}
        ListHeaderComponent={
          <ProfileTopContent scaleImage={scale} scrollY={scrollY} />
        }
        ListFooterComponent={
          <ProfileTopTab
            {...{
              startTopBarScroll,
              onChildScrollViewEndDrag,
              onChildEndReached,
            }}
          />
        }
        keyExtractor={(item, index) => index.toString() + "containerFlatList"}
        extraData={[
          startTopBarScroll,
          onParentEndReached,
          onChildScrollViewEndDrag,
          onChildEndReached,
        ]}
      />
      <Button
        title={<Ionicons name="add" size={35} color={tintColorDark} style={tw``} />}
        buttonStyle={tw`p-4 rounded-full`}
        containerStyle={tw` mt-4 rounded-full ml-auto absolute bottom-4 right-4 bg-yellow-500`}
        titleStyle={tw`btn-text text-md text-gray-800 `}
        onPress={() => alert("Not yet ready!")}
      />
    </>
  );
}

{
  /* <FlatList
  //       scrollEnabled={parentScrollEnabled}
  // ref={parentScrollView}
  scrollEnabled={true}
  onEndReached={onParentEndReached}
  style={[tw` `]}
  data={[]}
  renderItem={renderItem}
  contentContainerStyle={tw`pb-5 grow bg-purple-300`}
  ListHeaderComponent={<ProfileTopContent />}
  ListFooterComponent={
    <ProfileTopTab
      {...{
        startTopBarScroll,
        childScrollEnabled,
        onChildScrollViewBeginDrag,
        onChildScrollViewEndDrag,
        onPressInChildScrollView,
      }}
    />
  }
  keyExtractor={(item, index) => index.toString() + "containerFlatList"}
  extraData={[startTopBarScroll, onParentEndReached]}
/>; */
}
