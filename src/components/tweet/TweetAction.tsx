import {
  Entypo,
  EvilIcons,
  FontAwesome,
  Ionicons,
  MaterialIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import React, { useCallback, useEffect, useState } from "react";
import { Animated, Pressable, View } from "react-native";
import { Avatar, Button } from "react-native-elements";
import { Text } from "../Themed";
import Colors, { tintColorDark, tintColorPrimary } from "../../constants/Colors";

import tw from "../../styles/tailwind/tailwind";
import { ITweet } from "../../models/types/tweet";

interface IProps extends Partial<ITweet> {
  actionType: "reply" | "retweet" | "like" | "share";
}

const TweetAction = ({ actionType }: IProps) => {
  const [isReplying, setIsReplying] = useState<boolean>(false);
  const [retweeted, setRetweeted] = useState<boolean>(false);
  const [liked, setLiked] = useState<boolean>(false);
  const [isSharing, setIsSharing] = useState<boolean>(false);

  const retweetBtnScale = React.useRef(new Animated.Value(1)).current;
  const actionCountY = React.useRef(new Animated.Value(0)).current;

  const handleRetweet = React.useCallback(() => {
    Animated.timing(retweetBtnScale, {
      toValue: 2,
      duration: 100,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(retweetBtnScale, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }).start(() => {
        setRetweeted((p) => !p);
      });
    });
  }, []);

  const handleLike = React.useCallback(() => {
    //animation for socket controlled likes, retweets, or replies
    Animated.timing(actionCountY, {
      toValue: 5,
      duration: 50,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(actionCountY, {
        toValue: 0,
        duration: 50,
        useNativeDriver: true,
      }).start();
      setLiked((p) => !p);
    });
  }, []);

  switch (actionType) {
    case "reply": {
      return (
        <Pressable
          style={[tw`flex-1 flex-row  items-center   `]}
          onPress={handleRetweet}>
          <Ionicons
            name={`chatbubble-outline`}
            size={20}
            color={tw`text-gray-500`.color}
            style={tw`    text-left  `}
          />
          <Animated.Text
            style={[
              tw`text-sm text-gray-400  ml-2 `,
              { transform: [{ translateY: actionCountY }] },
            ]}>
            4342
          </Animated.Text>
        </Pressable>
      );
    }

    case "retweet": {
      return (
        <Pressable
          style={[tw`flex-1 flex-row  items-center   `]}
          onPress={handleRetweet}>
          <Animated.View style={[tw``, { transform: [{ scale: retweetBtnScale }] }]}>
            <EvilIcons
              name={`retweet`}
              size={28}
              color={tw`${retweeted ? "text-green-500" : "text-gray-500"}`.color}
              style={[tw`   text-left flex-1  `]}
            />
          </Animated.View>
          <Animated.Text
            style={[
              tw`text-sm ${
                retweeted ? "text-green-500" : "text-gray-400"
              }  ml-2 `,
              { transform: [{ translateY: actionCountY }] },
            ]}>
            4342
          </Animated.Text>
        </Pressable>
      );
    }

    case "like": {
      return (
        <Pressable
          style={[tw`flex-1 flex-row  items-center   `]}
          onPress={handleLike}>
          <Ionicons
            name={`${!liked ? "md-heart-outline" : "md-heart"}`} //md-heart
            size={20}
            color={tw`${liked ? "text-pink-500" : "text-gray-500"}`.color}
            style={tw`    text-left  `}
          />
          <Animated.Text
            style={[
              tw`text-sm   ml-2 ${
                liked ? "text-pink-500" : "text-gray-400"
              }`,
              { transform: [{ translateY: actionCountY }] },
            ]}>
            4342
          </Animated.Text>
        </Pressable>
      );
    }
     

    case "share": {
      return (
        <Pressable
          style={[tw`flex-1 flex-row  items-center   `]}
          onPress={handleRetweet}>
          <Ionicons
            name={`share-social-outline`}
            size={20}
            color={tw`text-gray-500`.color}
            style={tw`    text-left  `}
          />
        </Pressable>
      );
    }
    default: {
      return null;
    }
  }
};

export default React.memo(TweetAction);

 