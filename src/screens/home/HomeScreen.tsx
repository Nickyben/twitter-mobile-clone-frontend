import { useHeaderHeight, Header } from "@react-navigation/elements";
import React, { LegacyRef, useCallback, useEffect, useRef, useState } from "react";
import {
  Animated,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
} from "react-native";
import { Button } from "react-native-elements";
import SpaceHeaderItem from "../../components/spaces/SpaceHeaderItem";

import { Text, View } from "../../components/Themed";
import Tweet from "../../components/tweet/Tweet";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { useCollapsStickyHeader } from "../../hooks/useCollapsStickyHeader";
import { HomeTopTabScreenProps } from "../../navigation/types";
import { fakeLogout } from "../../redux/actions/auth/loginAction";
import tw from "../../styles/tailwind/tailwind";

export default function HomeScreen({
  navigation: { setOptions },
  flatListRef,
}: HomeTopTabScreenProps<"Home"> & { headerHeight?: number } & ReturnType<
    typeof useCollapsStickyHeader
  >) {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.authReducer.user);
  const headerHeight = useHeaderHeight() + 20;
  const { translateY, handleScroll } = useCollapsStickyHeader({
    headerHeight,
  });

  const renderItem = React.useCallback(
    ({ item }) => {
      return <Tweet {...{ author: user }} />;
    },
    [user]
  );

  const renderSpacesItem = React.useCallback(
    ({ item }) => {
      return (
        <SpaceHeaderItem
          title="Space of elites"
          listeners={Array.from({ length: 3 })}
          listenersCount={589}
        />
      );
    },
    [user]
  );

  const SpacesHeader = () => {
    return (
      <Animated.View
        style={[
          tw`w-full h-[${headerHeight}px] absolute top-0 z-100   justify-center border-b-gray-300  bg-white `,
          { transform: [{ translateY }], borderBottomWidth: 0.2 },
        ]}>
        <Animated.FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          style={[]}
          data={Array.from({ length: 17 })}
          renderItem={renderSpacesItem}
          contentContainerStyle={[tw`pl-4 grow  items-end pb-1`]}
          keyExtractor={(item, index) => index.toString() + "spaceItemsFlatList"}
        />
      </Animated.View>
    );
  };

  return (
    <>
      <SpacesHeader />
      <Animated.FlatList
        ref={flatListRef}
        onScroll={handleScroll}
        // onMomentumScrollEnd={handleSnapOnMomentumEnd}
        style={[]}
        data={Array.from({ length: 17 })}
        renderItem={renderItem}
        contentContainerStyle={[tw`pb-5 grow mt-[${headerHeight}px] `]}
        keyExtractor={(item, index) => index.toString() + "topTabFlatList"}
      />
    </>
  );
}
