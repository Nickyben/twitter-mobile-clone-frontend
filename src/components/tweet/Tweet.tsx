import {
  Entypo,
  EvilIcons,
  FontAwesome,
  Ionicons,
  MaterialIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import React, { useCallback, useEffect, useState } from "react";
import { Animated, View } from "react-native";
import { Avatar, Button } from "react-native-elements";
import { Text } from "../Themed";
import Colors, { tintColorDark, tintColorPrimary } from "../../constants/Colors";

import tw from "../../styles/tailwind/tailwind";
import { ITweet } from "../../models/types/tweet";
import TweetAction from "./TweetAction";

interface IProps extends Partial<ITweet> {
  handlerFollow?: (userId: string) => void;
  scrollY?: Animated.AnimatedInterpolation;
  isScrolled?: boolean;
}

const Tweet = ({ tweetMethod, id, author, contentText, imageUrls }: IProps) => {
  const { avatarUrl, isVerified, username, fullName } = author || {};
  return (
    <View
      style={[
        tw` px-5 py-2  border-b-1 border-gray-400   `,
        { borderBottomWidth: 1 / 5 },
      ]}>
      {/* REACTION INFO */}
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
        {/* AVATAR AND TRAIL */}

        <Avatar
          size={50}
          rounded
          source={require("../../../assets/images/twitterIcon.png")}
        />

        <View style={tw`flex-1 ml-2  `}>
          {/* NAME USER NAME AND DATE */}
          <View style={tw` flex-row justify-between items-start   `}>
            <View style={tw`flex-row items-center `}>
              <Text style={tw`text-sm text-gray-600 font-bold `}>{fullName}</Text>
              {true && (
                <MaterialIcons
                  name={`verified`}
                  size={16}
                  color={tintColorPrimary}
                  style={tw`ml-1 `}
                />
              )}

              <Text style={tw`text-sm text-gray-400 font-semibold  ml-3`}>
                @{username} . 5m
              </Text>
            </View>
            <SimpleLineIcons
              name="options-vertical"
              color={tw`text-gray-300`.color}
              size={16}
              style={tw`ml-6 rounded-full `}
            />
          </View>

          {/* TWEET TEXT*/}
          <Text
            style={tw`text-sm text-gray-500 mt-1 font-semibold`}
            numberOfLines={4}>
            {contentText} Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
            in voluptate velit esse cillum
          </Text>

          {/* MEDIA */}
          {!imageUrls &&
            [null].map((imageUrl, index) => {
              return (
                <Animated.Image
                  key={index}
                  style={[
                    tw`border-1 border-gray-100 rounded-xl w-full h-[200px] mt-2`,
                  ]}
                  source={
                    imageUrl
                      ? { uri: imageUrl }
                      : require("../../../assets/images/twitterIcon.png")
                  }
                />
              );
            })}

          {/* Actions */}
          <View style={tw`flex-1 flex-row justify-between items-center  mt-3 py-2 `}>
            <TweetAction actionType="reply" />
            <TweetAction actionType="retweet" />
            <TweetAction actionType="like" />
            <TweetAction actionType="share" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default React.memo(Tweet);
