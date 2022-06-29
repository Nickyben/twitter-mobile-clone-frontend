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
import { spacesLinearGradient } from "../../constants/Colors";

import tw from "../../styles/tailwind/tailwind";
import { IUser } from "../../models/types/user";
import { LinearGradient } from "expo-linear-gradient";
import { useHeaderHeight } from '@react-navigation/elements';

interface IProps {
  listeners: Partial<Array<IUser>>;
  listenersCount: number;
  title:string
}

const SpaceHeaderItem = ({ listeners, listenersCount, title }: IProps) => {
  const headerHeight =  useHeaderHeight()
  return (
    <View style={tw` self-start  mr-4`}>
      <LinearGradient
        start={{ x: 0.8, y: 0 }}
        colors={spacesLinearGradient}
        style={[tw`p-1  w-auto self-start rounded-full flex-row pr-3 items-center`]}>
        {listeners.map((listener, index) => {
          return (
            <Avatar
              size={headerHeight - 30}
              key={index}
              rounded
              containerStyle={tw`-mr-3 border-2 border-black z-${
                listeners.length - index
              }`}
              source={
                listener?.avatarUrl
                  ? { uri: listener.avatarUrl }
                  : require("../../../assets/images/user.png")
              }
            />
          );
        })}

        <Text style={tw`text-sm text-white ml-4`}>
          +{listenersCount}
        </Text>
      </LinearGradient>
      <Text style={tw`text-sm text-gray-600 self-center`}>{title}</Text>
    </View>
  );
};

export default React.memo(SpaceHeaderItem);
