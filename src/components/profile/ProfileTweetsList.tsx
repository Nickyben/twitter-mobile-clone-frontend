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
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import {
  ProfileTabScreenParams,
  ProfileTopTabParamList,
  ProfileTopTabScreenProps,
} from "../../navigation/types";
import { fakeLogout } from "../../redux/actions/auth/loginAction";
import tw from "../../styles/tailwind/tailwind";
import Tweet from "../tweet/Tweet";
import ProfileTopContent from "./ProfileTopContent";

type IProps = ProfileTopTabScreenProps<keyof ProfileTopTabParamList> &
  ProfileTabScreenParams;

export default function ProfileTweetsList({
  listKey,
  animateFlatListScroll,
  scrollY,
  scrollY2,
  // flatListRef,
  topContentLayout,
}: IProps) {
  const flatListRef: LegacyRef<Animated.FlatList<number>> = useRef(null);
  const topContentHeight = topContentLayout?.height || 0;
  const flatListScrollY = useRef(scrollY).current;
    const flatListScrollY2 = useRef(scrollY2).current;

  const isFocused = useIsFocused();
  const [isTouched, setIsTouched] = useState<boolean>(false)
  const headerHeight = useHeaderHeight();
  const [listTopLayout, setListTopLayout] = useState<LayoutRectangle>();
  const user = useAppSelector((state) => state.authReducer.user);

  const renderItem = useCallback(({ item }) => {
    return <Tweet {...{ author: user }} />;
  }, [user]);

  useEffect(() => {
    const flatList = flatListRef?.current as FlatList;
    const scrollYListener = flatListScrollY.addListener(({ value }) => {
      if (!isFocused) {
        if (listTopLayout?.height) {
          if (value < Number(listTopLayout?.height) - headerHeight) {
            flatList.scrollToOffset({ offset: value, animated: false });
          }
        } else {
          flatList.scrollToOffset({ offset: value, animated: false });
        }
      }
    });

    return () => flatListScrollY.removeListener(scrollYListener);
  }, [isFocused, listTopLayout?.height, headerHeight]);

  useEffect(() => {
    const flatList = flatListRef?.current as FlatList;
    const scrollY2Listener = flatListScrollY2.addListener(({ value }) => {
      if (isFocused) {
        if (listTopLayout?.height) {
          if (value < Number(listTopLayout?.height) - headerHeight) {
            flatList.scrollToOffset({ offset: value, animated: false });
          }
        } else {
         flatList.scrollToOffset({ offset: value, animated: false });
        }
      }
    });

    return () => flatListScrollY2.removeListener(scrollY2Listener);
  }, [isFocused, listTopLayout?.height, headerHeight]);

  const onListTopLayout = useCallback(
    ({ nativeEvent: { layout } }: LayoutChangeEvent) => {
      setListTopLayout(layout);
    },
    []
  );

  return (
    <Animated.FlatList
      ref={flatListRef}
      onScroll={isFocused && isTouched ? animateFlatListScroll : () => null}
      onTouchStart={() => setIsTouched(true)}
      onTouchEnd={() => setIsTouched(false)}
      style={[]}
      data={Array.from({length:17})}
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
