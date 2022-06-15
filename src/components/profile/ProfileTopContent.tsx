import { Component, Fragment, useEffect } from "react";
import { Alert, ScrollView } from "react-native";
import { Avatar, Button, Image } from "react-native-elements";
import { Text, TextProps, View } from "../Themed";
import tw from "../../styles/tailwind/tailwind";
import { useHeaderHeight } from "@react-navigation/elements";
import Config from "../../../Config";
import { tintColorPrimary } from "../../constants/Colors";
import { useAppSelector } from "../../hooks/redux";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Icon } from "@expo/vector-icons/build/createIconSet";

export default function ProfileTopContent({ userId }) {
  const headerHeight = useHeaderHeight();
  const user = !userId && useAppSelector((state) => state.authReducer.user);

  const {
    avatarUrl,
    fullName,
    username,
    bio,
    location,
    websiteUrl,
    dateOfBirth,
    joined,
    followersCount,
    followingCount,
    username: isVerified,
  } = user || {};
  const headerUrl = null;
  return (
    <View style={tw`pb-2`}>
      {headerUrl ? (
        <Image source={{ uri: `${Config.BASE_URL}/${headerUrl}` }} />
      ) : (
        <View
          style={tw`  py-5 bg-[${tintColorPrimary}] h-[${
            headerHeight * 2
          }px] `}></View>
      )}
      <View style={tw`px-4  `}>
        <View style={tw` flex-row  justify-between  `} transparent>
          <Avatar
            size={headerHeight}
            containerStyle={tw`border-4 border-white -mt-[${headerHeight / 2}px] `}
            rounded
            source={
              avatarUrl
                ? { uri: `${Config.BASE_URL}/${avatarUrl}` }
                : require("../../../assets/images/user.png")
            }
          />
          <Button
            title="Edit profile"
            buttonStyle={tw` btn btn-small bg-transparent border border-gray-300`}
            containerStyle={tw` mt-4 rounded-full`}
            titleStyle={tw`btn-text text-md text-gray-800 `}
            onPress={() => Alert.alert("Not yet ready!")}
          />
        </View>
        <View style={tw`flex-row items-center `} transparent>
          <Text style={tw`text-xl text-gray-900 font-bold `}>{fullName}</Text>
          {isVerified && (
            <MaterialIcons
              name={`verified`}
              size={20}
              color={tintColorPrimary}
              style={tw`ml-2 `}
            />
          )}
        </View>
        <Text style={tw`text-sm text-gray-400 font-semibold `}>@{username}</Text>
        <Text
          style={tw`text-sm text-gray-700  mt-2 `}
          onPressLink={(link) => {
            Alert.alert(link);
          }}>
          {bio}
        </Text>
        <View style={tw`flex-row mt-2 flex-wrap `} transparent>
          {["location", "websiteUrl", "dateOfBirth", "joined"].map(
            (extra, index) => {
              return (
                <ProfileExtra key={index} style={tw``}>
                  {Date.parse(user[extra]) ? "Joined "  :'' }
                  {user[extra] || extra}
                </ProfileExtra>
              );
            }
          )}
        </View>
      </View>
    </View>
  );
}

const ProfileExtra = ({
  iconName,
  children,
  Icon: _icon,
  ...otherProps
}: {
  iconName?: never;
  children: React.ReactNode;
  Icon?: any;
} & TextProps) => {
  const Icon = _icon || Ionicons;
  return (
    <View style={tw`flex-row items-center mr-2 mt-1`} transparent>
      <Icon
        name={iconName || "location"}
        size={16}
        color={tw`text-gray-400`.color}
        style={tw` mr-2 `}
      />

      <Text style={tw`text-sm text-gray-400  flex-1`} {...otherProps}>
        {children}
      </Text>
    </View>
  );
};
