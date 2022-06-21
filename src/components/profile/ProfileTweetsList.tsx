import { useCallback, useEffect, useRef, useState } from "react";
import {
  NativeSyntheticEvent,
  Pressable,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Button } from "react-native-elements";
import { FlatList } from "react-native-gesture-handler";

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
  startTopBarScroll: scrollEnabled,
  onChildScrollViewEndDrag,
  startTopBarScroll,
  onChildEndReached,
}: IProps) {
  const renderItem = useCallback(({ item }) => {
    return (
     <Tweet />
    );
  }, []);

  return (
    <FlatList
      listKey={listKey}
//       scrollEnabled={startTopBarScroll}
      // onScrollEndDrag={onChildScrollViewEndDrag}
//       onEndReached={onChildEndReached}
      style={[tw`   `]}
      data={[1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 0, 11, 21, 23]}
      renderItem={renderItem}
      contentContainerStyle={tw`pb-5 grow bg-green-200`}
      keyExtractor={(item, index) => index.toString() + "topTabFlatList"}
      extraData={[scrollEnabled]}
    />
  );
}
