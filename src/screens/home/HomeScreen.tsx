import React, { LegacyRef, useRef } from "react";
import { Animated, ScrollView, StyleSheet } from "react-native";
import { Button } from "react-native-elements";

import { Text, View } from "../../components/Themed";
import Tweet from "../../components/tweet/Tweet";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fakeLogout } from "../../redux/actions/auth/loginAction";
import tw from "../../styles/tailwind/tailwind";

export default function HomeScreen() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.authReducer.user);

  const flatListRef: LegacyRef<Animated.FlatList<number>> = useRef(null);
  const renderItem = React.useCallback(
    ({ item }) => {
      return <Tweet {...{ author: user }} />;
    },
    [user]
  );
  return (
    <Animated.FlatList
      ref={flatListRef}
      style={[]}
      data={Array.from({ length: 17 })}
      renderItem={renderItem}
      ListHeaderComponent={<View style={tw`    `}></View>}
      contentContainerStyle={[tw`pb-5 grow   `]}
      keyExtractor={(item, index) => index.toString() + "topTabFlatList"}
    />
  );
}
