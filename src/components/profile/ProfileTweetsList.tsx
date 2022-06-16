import { useEffect, useState } from "react";
import { NativeSyntheticEvent, ScrollView, StyleSheet } from "react-native";
import { Button } from "react-native-elements";

import { Text, View } from "../../components/Themed";
import { useAppDispatch } from "../../hooks/redux";
import { useProfileScroll } from "../../hooks/useProfileScroll";
import {
  ProfileTabScreenParams,
  ProfileTopTabParamList,
  ProfileTopTabScreenProps,
} from "../../navigation/types";
import { fakeLogout } from "../../redux/actions/auth/loginAction";
import tw from "../../styles/tailwind/tailwind";

type IProps = ProfileTopTabScreenProps<keyof ProfileTopTabParamList> &  ProfileTabScreenParams

export default function ProfileTweetsList({
  navigation,
  route: { params },
  startScrollTabBar,
  onTabBarScrollToTop
}: IProps) {
  // console.log({ scrollTopBar: startScrollTabBar });
  return (
    <ScrollView
      style={tw` px-4`}
      onScroll={onTabBarScrollToTop}
      scrollEnabled={startScrollTabBar}
      contentContainerStyle={tw``}>
      <Text style={styles.title}>Profile Screen</Text>
      <Button
        title="Logout"
        buttonStyle={tw`btn`}
        containerStyle={tw`mt-6`}
        titleStyle={tw`btn-text`}
        onPress={() => 2}
      />
      <Button
        title="Logout"
        buttonStyle={tw`btn`}
        containerStyle={tw`mt-6`}
        titleStyle={tw`btn-text`}
        onPress={() => 2}
      />
      <Button
        title="Logout"
        buttonStyle={tw`btn`}
        containerStyle={tw`mt-6`}
        titleStyle={tw`btn-text`}
        onPress={() => 2}
      />
      <Button
        title="Logout"
        buttonStyle={tw`btn`}
        containerStyle={tw`mt-6`}
        titleStyle={tw`btn-text`}
        onPress={() => 2}
      />
      <Button
        title="Logout"
        buttonStyle={tw`btn`}
        containerStyle={tw`mt-6`}
        titleStyle={tw`btn-text`}
        onPress={() => 2}
      />
      <Button
        title="Logout"
        buttonStyle={tw`btn`}
        containerStyle={tw`mt-6`}
        titleStyle={tw`btn-text`}
        onPress={() => 2}
      />
      <Button
        title="Logout"
        buttonStyle={tw`btn`}
        containerStyle={tw`mt-6`}
        titleStyle={tw`btn-text`}
        onPress={() => 2}
      />
      <Button
        title="Logout"
        buttonStyle={tw`btn`}
        containerStyle={tw`mt-6`}
        titleStyle={tw`btn-text`}
        onPress={() => 2}
      />
      <Button
        title="Logout"
        buttonStyle={tw`btn`}
        containerStyle={tw`mt-6`}
        titleStyle={tw`btn-text`}
        onPress={() => 2}
      />
      <Button
        title="Logout"
        buttonStyle={tw`btn`}
        containerStyle={tw`mt-6`}
        titleStyle={tw`btn-text`}
        onPress={() => 2}
      />
      <Button
        title="Logout"
        buttonStyle={tw`btn`}
        containerStyle={tw`mt-6`}
        titleStyle={tw`btn-text`}
        onPress={() => 2}
      />
      <Button
        title="Logout"
        buttonStyle={tw`btn`}
        containerStyle={tw`mt-6`}
        titleStyle={tw`btn-text`}
        onPress={() => 2}
      />
      <Button
        title="Logout"
        buttonStyle={tw`btn`}
        containerStyle={tw`mt-6`}
        titleStyle={tw`btn-text`}
        onPress={() => 2}
      />
      <Button
        title="Logout"
        buttonStyle={tw`btn`}
        containerStyle={tw`mb-6`}
        titleStyle={tw`btn-text`}
        onPress={() => 2}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
