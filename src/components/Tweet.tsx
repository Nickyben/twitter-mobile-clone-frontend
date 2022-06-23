import {
  Entypo,
  EvilIcons,
  FontAwesome,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import React, { useCallback, useEffect, useState } from "react";
import { Animated, View } from "react-native";
import { Avatar, Button } from "react-native-elements";
import { Text } from "../../src/components/Themed";
import Colors, { tintColorDark, tintColorPrimary } from "../../src/constants/Colors";
import {
  FollowUser,
  InterestCategories,
  InterestItem,
} from "../../src/data/onboarding";
import tw from "../../src/styles/tailwind/tailwind";
import { ITweet } from "../models/types/tweet";
import { useIsFocused } from "@react-navigation/native";

interface IProps extends Partial<ITweet> {
  handlerFollow?: (userId: string) => void;
  scrollY?: Animated.AnimatedInterpolation;
  isScrolled?: boolean;
}

const Tweet = ({ tweetMethod, id, author, contentText }: IProps) => {
  const { avatarUrl, isVerified, username, fullName } = author || {};
  return (
    <View style={[tw` px-5 py-2  border-b-1 border-gray-800   `]}>
      <View style={tw` flex-1 flex-row  `}>
        <EvilIcons
          name={`retweet`}
          size={20}
          color={tw`text-gray-600`.color}
          style={tw` font-bold w-[50px]  text-right  `}
        />
        <Text style={tw`text-xs text-gray-500 font-semibold ml-2 `}>
          You Retweeted
        </Text>
      </View>

      <View style={tw` flex-1  flex-row mt-1`}>
        <Avatar
          size={50}
          rounded
          source={
            avatarUrl ? { uri: avatarUrl } : require("../../assets/images/user.png")
          }
        />
        <View style={tw`flex-1 ml-2   `}>
          <View style={tw` flex-row items-center `}>
            <View style={tw`flex-row items-center`}>
              <Text style={tw`text-sm text-gray-600 font-bold `}>{fullName}</Text>
              {true && (
                <MaterialIcons
                  name={`verified`}
                  size={16}
                  color={tintColorPrimary}
                  style={tw`ml-1 `}
                />
              )}
            </View>
            <Text style={tw`text-sm text-gray-400 font-semibold  ml-3`}>@{username}</Text>
          </View>
        </View>
        <Text style={tw`text-sm  mt-1 font-semibold`} numberOfLines={2}>
          {contentText}
        </Text>
      </View>
    </View>
  );
};

export default React.memo(Tweet);
