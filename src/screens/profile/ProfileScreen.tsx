import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { HeaderBackButton } from "@react-navigation/elements";
import { Fragment, useEffect } from "react";
import { Platform, ScrollView } from "react-native";
import { Button } from "react-native-elements";
import ProfileTopContent from "../../../components/profile/ProfileTopContent";
import { isAndroid } from "../../../Config";

import { Text, View } from "../../components/Themed";
import Colors, { tintColorDark, tintColorLight } from "../../constants/Colors";
import { useAppDispatch } from "../../hooks/redux";
import { RootDrawerScreenProps } from "../../navigation/types";
import { fakeLogout } from "../../redux/actions/auth/loginAction";
import tw from "../../styles/tailwind/tailwind";

export default function ProfileScreen({
  navigation: { setOptions, goBack, canGoBack },

}: RootDrawerScreenProps<"Profile">) {
  
  const dispatch = useAppDispatch();

  useEffect(() => {
    setOptions({
      headerTitleStyle: tw`hidden` as any,
      headerTransparent: true,
      headerTintColor: tintColorDark,
      headerLeft: () => {
        return (
          <HeaderBackButton
            onPress={() => canGoBack() && goBack()}
            backImage={() => (
              <Ionicons
                name={`${isAndroid ? "arrow-back" : "chevron-back"}`}
                color={tintColorDark}
                size={22}
                style={tw`rounded-full p-2 bg-black-transparent`}
              />
            )}
            style={tw``}
            tintColor={tintColorDark}
          />
        );
      },
      headerRight: () => {
        return (
          <View
            style={tw`flex-row  self-start w-full justify-end pr-4 items-center bg-transparent`}>
            <Ionicons
              name="search"
              color={tintColorDark}
              size={22}
              style={tw`ml-6 rounded-full p-2 bg-black-transparent`}
            />
            <SimpleLineIcons
              name="options-vertical"
              color={tintColorDark}
              size={22}
              style={tw`ml-6 rounded-full p-2 bg-black-transparent`}
            />
          </View>
        );
      },
    });
  }, [setOptions]);

  return (
    <Fragment>
      <ScrollView style={tw`  py-0 `} contentContainerStyle={tw`  pb-5`}>
        <ProfileTopContent userId={ null}/>
      </ScrollView>
    </Fragment>
  );
}
