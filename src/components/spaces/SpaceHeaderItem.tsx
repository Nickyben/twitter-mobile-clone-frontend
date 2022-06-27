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
import { IUser } from "../../models/types/user";

interface IProps {
  listeners: Partial<Array<IUser>>;
  listenersCount: number;
}

const SpaceHeaderItem = ({listeners, listenersCount}: IProps) => {
  return (
    <View
      style={[
        tw`bg-gradient-to-r p-4 h-full max-w-[250px] rounded-full `,
      ]}></View>
  );
};

export default React.memo(SpaceHeaderItem);
