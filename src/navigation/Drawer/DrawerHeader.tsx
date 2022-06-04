import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { Platform } from "react-native";
import { Avatar } from "react-native-elements";

import { Text, View } from "../../components/Themed";
import tw from "../../styles/tailwind/tailwind";
import Colors from "../../constants/Colors";

import useColorScheme from "../../hooks/useColorScheme";

export default function CustomDrawerHeader() {
    const colorScheme = useColorScheme();

  const avatar = undefined;
  return (
    <View style={tw`pt-2 pb-5  px-6 border-b-1 border-gray-800 `}>
      <View style={tw`flex-row justify-between `}>
        <Avatar
          size={"medium"}
          rounded
          source={
            avatar ? { uri: avatar } : require("../../../assets/images/user.png")
          }
        />
        <Avatar
          size={"small"}
          rounded
          source={
            avatar ? { uri: avatar } : require("../../../assets/images/user.png")
          }
        />
      </View>
      <View style={tw`flex-row justify-between mt-2`}>
        <View style={tw``}>
          <Text style={tw`text-md text-gray-700 font-bold `}>IK_NICK</Text>
          <Text style={tw`text-sm text-gray-400 `}>@ikNickyben</Text>
        </View>
        <MaterialIcons
          name={"keyboard-arrow-down"}
          size={20}
          color={Colors[colorScheme].tint}
          style={tw``}
        />
      </View>
      <View style={tw` flex-row mt-3`}>
        <Text style={tw`text-sm text-gray-700 font-bold `}>
          2,880{" "}
          <Text style={tw`text-sm text-gray-500 font-normal `}>Following</Text>
        </Text>
        <Text style={tw`text-sm text-gray-700 font-bold ml-3`}>
          3,023{" "}
          <Text style={tw`text-sm text-gray-500 font-normal `}>Followers</Text>
        </Text>
      </View>
    </View>
  );
}
