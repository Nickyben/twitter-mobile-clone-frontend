import tw from "../../styles/tailwind/tailwind";
import React, { Fragment, useCallback, useState } from "react";
import { Text, View } from "../../components/Themed";
import { Formik } from "formik";
import {
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  Switch,
} from "react-native";
import { Avatar, Button } from "react-native-elements";
import { OnboardingStackScreenProps } from "../../navigation/types";
import OnboardHeadTexts from "../../components/onboarding/OnboardHeadTexts";
import { useHeaderHeight } from "@react-navigation/elements";
import { PasswordValidationSchema } from "../../validation/onboarding";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import useColorScheme from "./../../hooks/useColorScheme";

type Props = OnboardingStackScreenProps<"CustomizeExperience"> & {
  prop1: string;
};
type ExperienceSetting = {
  title: string;
  description: string;
  value: boolean;
};

const CustomizeExpScreen = ({ navigation }: Props) => {
  const [profileImage, setProfileImage] = useState<never>();
  const colorScheme = useColorScheme();
  const headerHeight = useHeaderHeight();
  const initialExperienceSetting: Array<ExperienceSetting> = [
    {
      title: "Get more out of Twitter",
      description: "Receive email about your activity and Twitter recommendations",
      value: false,
    },
    {
      title: "Connect with people you know",
      description: "Let others find you twitter account by you email address",
      value: false,
    },
  ];
  const [experienceSetting, setExperienceSetting] = useState<
    Array<ExperienceSetting>
  >(initialExperienceSetting);

  const handleSubmit = useCallback(() => {
    navigation.navigate("ConnectAddressBook");
  }, []);

  const changeSetting = useCallback((value, description) => {
    setExperienceSetting((prev) => {
      const updatedSetting = prev.map((s) => {
        if (s.description === description) {
          return {
            ...s,
            value,
          };
        }
        return s;
      });
      return updatedSetting;
    });
  }, []);

  return (
    <Fragment>
      <ScrollView
        style={tw` p-7 py-0 `}
        contentContainerStyle={tw` items-center   pb-5`}>
        <View style={tw`w-full   mt-[${headerHeight}px] pt-7`}>
          <OnboardHeadTexts title={"Customize your experience"} description="" />
        </View>
        {experienceSetting.map(({ title, description, value }) => {
          return (
            <View key={title} style={tw`w-full  mt-6 `}>
              <Text style={tw`text-[21px] font-bold   `}>{title}</Text>
              <View style={tw`w-full mt-6 flex-row   justify-between items-start  `}>
                <Text style={tw`text-[16px] font-bold text-gray-600 flex-1 `}>
                  {description}
                </Text>
                <Switch
                  style={tw`  ml-4 -mt-3 `}
                  trackColor={{
                    false: Colors[colorScheme].gray,
                    true: Colors[colorScheme].primary,
                  }}
                  thumbColor={
                    value
                      ? Colors[colorScheme].background
                      : Colors[colorScheme].lightGray
                  }
                  ios_backgroundColor={Colors[colorScheme].dark}
                  onValueChange={(value) => changeSetting(value, description)}
                  value={value}
                />
              </View>
            </View>
          );
        })}
        <Text style={tw`text-[16px] font-bold text-gray-600 flex-1  mt-6`}>
          For more details about these settings, visit the{" "}
          <Text
            style={tw`text-[16px] font-bold text-primary  `}
            onPress={() => Alert.alert("Not yet available")}>
            Help Center
          </Text>
        </Text>
      </ScrollView>
      <Button
        title="Next"
        buttonStyle={tw`btn `}
        containerStyle={tw`btn-container-big`}
        titleStyle={tw`btn-text`}
        onPress={handleSubmit}
      />
    </Fragment>
  );
};

export default CustomizeExpScreen;
