import { Fragment, useEffect } from "react";
import { Alert, ScrollView } from "react-native";
import { Avatar, Button, Image } from "react-native-elements";
import { Text, View } from "../../src/components/Themed";
import tw from "../../src/styles/tailwind/tailwind";
import { useHeaderHeight } from "@react-navigation/elements";
import Config from "../../Config";
import { tintColorPrimary } from "../../src/constants/Colors";
import { useAppSelector } from "../../src/hooks/redux";

export default function ProfileTopContent({userId}) {
  const headerHeight = useHeaderHeight();
  const _user = !userId && useAppSelector((state) => state.authReducer.user);

  const { avatarUrl, fullName, username, followersCount, followingCount } =
    _user || {};
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
      <View style={tw`px-3 flex-row  justify-between `}>
        <Avatar
          size={headerHeight}
          containerStyle={tw`border-4 border-white -mt-[${headerHeight / 2}px] `}
          rounded
          source={
            avatarUrl
              ? { uri: `${Config.BASE_URL}/${avatarUrl}` }
              : require("../../assets/images/user.png")
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
    </View>
  );
}
