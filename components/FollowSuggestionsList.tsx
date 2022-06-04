import { Ionicons } from "@expo/vector-icons";
import { useHeaderHeight } from "@react-navigation/elements";
import React, { useCallback, useEffect, useState } from "react";
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  StatusBar,
  Alert,
  Pressable,
} from "react-native";
import { Button } from "react-native-elements";
import OnboardHeadTexts from "../src/components/onboarding/OnboardHeadTexts";
import { Text, View } from "../src/components/Themed";
import { FollowUser } from "../src/data/onboarding";
import tw from "../src/styles/tailwind/tailwind";
import FollowPerson from "./FollowPerson";
interface IProps {
  followUsers: Array<FollowUser>;
  followedUsers: Array<string>;
  handleFollow: (userId: string) => void;
}
const ListHeader = () => {
  return (
    <>
      <View style={tw`w-full px-7 pb-7  pt-7 `}>
        <OnboardHeadTexts
          title={"Suggestions for you to follow"}
          description="When you follow someone, you'll see their Tweets in your Home Timeline."
        />
      </View>
      <View
        style={tw`w-full  px-5  py-3 bg-white w-full border-t border-b-1 border-gray-200`}>
        <Text style={tw`text-[20px] font-bold  text-left `}>
          You may be interested in
        </Text>
      </View>
    </>
  );
};

const FollowSuggestionsList = ({
  handleFollow,
  followUsers,
  followedUsers,
}: IProps) => {
  const headerHeight = useHeaderHeight();

  const renderItem = useCallback(
    ({ item: user }: { item: FollowUser }) => {
      const {
        userId,
        name,
        username,
        bio,
        isFollowedByMe,
        isMyFollower,
        isVerified,
        avatar,
      } = user || {};
      const isFollowed = followedUsers.some(
        (userId) => userId === userId || isFollowedByMe
      );

      isMyFollower;
      return (
        <Pressable onPress={() => Alert.alert("Not yet available")}>
          <FollowPerson
            isFollowedByMe={isFollowed}
            isMyFollower={isMyFollower}
            isVerified={isVerified}
            name={name}
            username={username}
            avatar={avatar}
            userId={userId}
            bio={bio}
            handlerFollow={handleFollow}
          />
        </Pressable>
      );
    },
    [handleFollow, followedUsers]
  );

  return (
    <SafeAreaView style={tw` flex-1   `}>
      {/* <MemoListHeader title={title} /> */}

      <FlatList
        style={[tw` mt-[${headerHeight}px] w-full `]}
        data={followUsers}
        renderItem={renderItem}
        contentContainerStyle={tw`pb-5`}
        ListHeaderComponent={<ListHeader />}
        keyExtractor={(item, index) => index.toString()}
        extraData={[handleFollow, followedUsers, followUsers]}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  flatList: { maxWidth: "200%" },
  flatListContent: {},

  title: {
    fontSize: 32,
  },
});

export default React.memo(FollowSuggestionsList);
