import tw from "../../styles/tailwind/tailwind";
import React, { Fragment, useCallback } from "react";
import { Text, View } from "../../components/Themed";
import { Formik } from "formik";
import { Alert, KeyboardAvoidingView, ScrollView, TextInput } from "react-native";
import { Avatar, Button } from "react-native-elements";
import { OnboardingStackScreenProps } from "../../navigation/types";
import OnboardHeadTexts from "../../components/onboarding/OnboardHeadTexts";
import { useHeaderHeight } from "@react-navigation/elements";
import { PasswordValidationSchema } from "../../validation/onboarding";
import { Ionicons } from "@expo/vector-icons";

type Props = OnboardingStackScreenProps<"Password"> & {
  prop1: string;
};
type Values = {
  password: string;
};

const ProfilePictureScreen = ({ navigation }: Props) => {
  const headerHeight = useHeaderHeight();
  const handleValidSubmit = useCallback((values: Values) => {
    // const { password } = values || {};
    Alert.alert(JSON.stringify(values));
    navigation.navigate("ProfilePicture", values);
  }, []);

  return (
    <Fragment>
      <ScrollView
        style={tw` p-7 py-0 `}
        contentContainerStyle={tw` items-center   pb-5`}>
        <View style={tw`w-full   mt-[${headerHeight}px] pt-7`}>
          <OnboardHeadTexts
            title={"Pick a profile picture."}
            description="Have a favorite selfie? Upload it now."
          />
        </View>
        <Avatar
          size={194}
          avatarStyle={tw`opacity-50 `}
          activeOpacity={0.7}
          containerStyle={tw`mt-15 `}
          source={require("../../../assets/images/user.png")}
          onPress={() => Alert.alert("Not yet available")}
          rounded>
          <Ionicons
            size={40}
            onPress={() => Alert.alert("Not yet available")}
            name={"add-circle-sharp"}
            style={tw`profile-add-icon text-primary`}
          />
        </Avatar>
      </ScrollView>
      <Button
        disabled={!true}
        title="Next"
        buttonStyle={tw`btn `}
        containerStyle={tw`btn-container-big`}
        titleStyle={tw`btn-text`}
        onPress={() => {
          return;
        }}
      />
      <Text
        style={tw`mb-4 text-primary text-center`}
        onPress={() => Alert.alert("Not yet available")}>
        Skip for now
      </Text>
    </Fragment>
  );
};

export default ProfilePictureScreen;
