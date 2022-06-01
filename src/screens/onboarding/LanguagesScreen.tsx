import tw from "../../styles/tailwind/tailwind";
import React, { Fragment, useCallback, useState } from "react";
import { Text, View } from "../../components/Themed";
import { Formik } from "formik";
import {
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  Switch,
  TextInput,
} from "react-native";
import { Avatar, Button } from "react-native-elements";
import { OnboardingStackScreenProps } from "../../navigation/types";
import OnboardHeadTexts from "../../components/onboarding/OnboardHeadTexts";
import { useHeaderHeight } from "@react-navigation/elements";
import { PasswordValidationSchema } from "../../validation/onboarding";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import useColorScheme from "./../../hooks/useColorScheme";

type Props = OnboardingStackScreenProps<"Languages"> & {
  prop1: string;
};
type LanguageSetting = {
  title: string;
  value: boolean;
};

const LanguagesScreen = ({ navigation }: Props) => {
  const colorScheme = useColorScheme();
  const headerHeight = useHeaderHeight();

  const initialLanguageSetting: Array<LanguageSetting> = [
    {
      title: "English",
      value: false,
    },
    {
      title: "French -francais",
      value: false,
    },
    {
      title: "Spanish",
      value: false,
    },
    {
      title: "Arabic",
      value: false,
    },
    {
      title: "Russian",
      value: false,
    },
    {
      title: "Hindi",
      value: false,
    },
  ];
  const [languageSetting, setLanguageSetting] = useState<Array<LanguageSetting>>(
    initialLanguageSetting
  );
  const [showAllLangs, setShowAllLangs] = useState<boolean>(false);
  const handleSubmit = useCallback(() => {
    navigation.navigate("InterestedIn");
  }, []);

  const changeSetting = useCallback((value, title) => {
    setLanguageSetting((prev) => {
      const updatedSetting = prev.map((s) => {
        if (s.title === title) {
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
        style={tw`  py-0 `}
        contentContainerStyle={tw` items-center   pb-5`}>
        <View style={tw`w-full px-7  mt-[${headerHeight}px] pt-7 mb-3`}>
          <OnboardHeadTexts
            title={"Which languages do you speak?"}
            description="You'll be able to see Tweets, people and trends in any languages you choose"
          />
        </View>
        {[...languageSetting]
          .filter((_, i) => (showAllLangs ? true : i < 2))
          .map(({ title, value }) => {
            return (
              <View
                key={title}
                style={tw`w-full  flex-row   items-start border-b border-gray-200 mt-3 px-7 py-2`}>
                <Text style={tw`text-[18px] font-bold text-gray-600 flex-1  `}>
                  {title}
                </Text>
                <Switch
                  style={tw`  ml-4  -mt-3  `}
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
                  onValueChange={(value) => changeSetting(value, title)}
                  value={value}
                />
              </View>
            );
          })}
        <Text
          style={tw`text-[18px] font-bold text-primary mt-6 text-center`}
          onPress={() => setShowAllLangs((p) => !p)}>
          {showAllLangs ? "Show less" : "Show more"}
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

export default LanguagesScreen;
