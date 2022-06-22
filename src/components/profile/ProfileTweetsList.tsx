import { transform } from "@babel/core";
import { useHeaderHeight } from "@react-navigation/elements";
import { useIsFocused } from "@react-navigation/native";
import { LegacyRef, useCallback, useEffect, useRef, useState } from "react";
import {
  NativeSyntheticEvent,
  Pressable,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Animated,
  NativeScrollEvent,
  LayoutChangeEvent,
  LayoutRectangle,
} from "react-native";
import { Button } from "react-native-elements";

import { Text, View } from "../../components/Themed";
import { useAppDispatch } from "../../hooks/redux";
import { useProfileScroll } from "../../hooks/useProfileScroll";
import {
  ProfileTabScreenParams,
  ProfileTopTabParamList,
  ProfileTopTabScreenProps,
} from "../../navigation/types";
import { fakeLogout } from "../../redux/actions/auth/loginAction";
import tw from "../../styles/tailwind/tailwind";
import Tweet from "../Tweet";
import ProfileTopContent from "./ProfileTopContent";

type IProps = ProfileTopTabScreenProps<keyof ProfileTopTabParamList> &
  ProfileTabScreenParams;

export default function ProfileTweetsList({
  listKey,
  animateFlatListScroll,
  scrollY,
  topContentLayout,
}: IProps) {
  const flatListRef: LegacyRef<Animated.FlatList<number>> = useRef(null);
  const topContentHeight = topContentLayout?.height || 0;
  const flatListScrollY = useRef(scrollY).current;
  const isFocused = useIsFocused();
  const headerHeight = useHeaderHeight();
  const [listTopLayout, setListTopLayout] = useState<LayoutRectangle>();
  const animateScroll = Animated.event(
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

  const renderItem = useCallback(({ item }) => {
    return <Tweet {...{}} />;
  }, []);

  useEffect(() => {
    const flatList = flatListRef?.current as FlatList;
    const scrollYListener = flatListScrollY.addListener(({ value }) => {
      if (!isFocused && value < Number(listTopLayout?.height) - headerHeight) {
        !isFocused && flatList.scrollToOffset({ offset: value, animated: false });
      }

      console.log({  value });
    });

    return () => flatListScrollY.removeListener(scrollYListener);
  }, [isFocused]);

  const onListTopLayout = useCallback(
    ({ nativeEvent: { layout } }: LayoutChangeEvent) => {
      console.log({layoutHeight:layout.height})
      setListTopLayout(layout);
    },
    []
  );

  return (
    <Animated.FlatList
      ref={flatListRef}
      onScroll={isFocused ? animateFlatListScroll : () => null}
      style={[]}
      data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17]}
      renderItem={renderItem}
      ListHeaderComponent={
        <View
          style={tw`  min-h-[${topContentHeight}px]  `}
          onLayout={onListTopLayout}></View>
      }
      contentContainerStyle={[tw`pb-5 grow   `]}
      keyExtractor={(item, index) => index.toString() + "topTabFlatList"}
    />
  );
}
