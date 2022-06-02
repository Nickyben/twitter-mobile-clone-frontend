import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import React, { useCallback, useEffect, useState } from "react";
import { View } from "react-native";
import { Avatar, Button } from "react-native-elements";
import { Text } from "../src/components/Themed";
import Colors, { tintColorDark, tintColorPrimary } from "../src/constants/Colors";
import {
  FollowUser,
  InterestCategories,
  InterestItem,
} from "../src/data/onboarding";
import tw from "../src/styles/tailwind/tailwind";

interface IProps extends FollowUser {
  handlerFollow?: (userId: string) => void;
}

const FollowerPerson = ({
  avatar,
  bio,
  userId,
  handlerFollow,
  name,
  username,
  isVerified,
  isFollowedByMe,
  isMyFollower,
}: IProps) => {
  // const [isSelected, setIsSelected] = useState(_isSelected);
 

  return (
    <View
      style={tw`p-5 py-2 flex-row flex-1 border-b border-gray-200  items-center`}>
      <Avatar
        size={55}
        rounded
        source={avatar ? { uri: avatar } : require("../assets/images/user.png")}
      />
      <View style={tw`ml-4 flex-1 `}>
        <View style={tw`flex-1 flex-row justify-between items-center`}>
          <View style={tw``}>
            <View style={tw`flex-row items-center`}>
              <Text style={tw`text-md font-bold  `}>{name}</Text>
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
          <Button
            title={isFollowedByMe ? "Following" : "Follow"}
            type={"outline"}
            buttonStyle={tw`btn min-w-90px  py-1 border border-gray-300 ${
              !isFollowedByMe ? "bg-primary" : "bg-transparent "
            }`}
            containerStyle={tw`rounded-full`}
            titleStyle={tw`btn-text text-gray-600 text-sm font-bold  ${
              !isFollowedByMe ? "text-white" : "text-gray-600 "
            } `}
            onPress={() => {
              handlerFollow(userId)
            }}
          />
        </View>
        <Text style={tw`text-sm  mt-1 font-semibold`} numberOfLines={2}>
          {bio}
        </Text>
      </View>
    </View>
  );
};

export default React.memo(FollowerPerson);
