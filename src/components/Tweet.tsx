import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import React, { useCallback, useEffect, useState } from "react";
import { View } from "react-native";
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

interface IProps extends Partial<ITweet> {
  handlerFollow?: (userId: string) => void;
}

const Tweet = ({ tweetMethod, id, author, contentText }: IProps) => {
  const { avatarUrl, isVerified, username, fullName } = author || {};
  return (
    <View
      style={tw`p-5 py-2 flex-row flex-1 border-b-1 border-gray-200  items-center bg-red-100`}>
      <Avatar
        size={55}
        rounded
        source={
          avatarUrl ? { uri: avatarUrl } : require("../../assets/images/user.png")
        }
      />
      <View style={tw`ml-4 flex-1 `}>
        <View style={tw`flex-1 flex-row justify-between items-center`}>
          <View style={tw``}>
            <View style={tw`flex-row items-center`}>
              <Text style={tw`text-md font-bold  `}>{fullName}</Text>
              {isVerified && (
                <MaterialIcons
                  name={`verified`}
                  size={18}
                  color={tintColorPrimary}
                  style={tw`ml-2 `}
                />
              )}
            </View>

            <Text style={tw`text-sm text-gray-400 font-semibold `}>@{username}</Text>
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
