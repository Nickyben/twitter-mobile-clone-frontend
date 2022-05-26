import tw from "../../styles/tailwind/tailwind";
import React from "react";
import { Text, View } from "../../components/Themed";
import { Formik } from "formik";

import { Alert, KeyboardAvoidingView, ScrollView, TextInput } from "react-native";
import { Button } from "react-native-elements";
import { OnboardingStackScreenProps } from "../../navigation/types";
import OnboardHeadTexts from "../../components/onboarding/OnboardHeadTexts";
import { useHeaderHeight } from "@react-navigation/elements";

type Props = OnboardingStackScreenProps<"GetStarted"> & {
  prop1: string;
};
type Values = {
  username: string;
};

const UsernameScreen = ({ navigation }: Props) => {
  const headerHeight = useHeaderHeight();
  // mt-[${headerHeight}px]
  const inputStyle = {
    borderWidth: 1,
    borderColor: "#4e4e4e",
    padding: 12,
    marginBottom: 5,
  };
  return (
    <Formik
      initialValues={{
        username: "",
      }}
      onSubmit={(values) => Alert.alert(JSON.stringify(values))}>
      {({
        values,
        handleChange,
        errors,
        setFieldTouched,
        touched,
        isValid,
        handleSubmit,
      }) => (
        <>
          <ScrollView
            style={tw` p-7 py-0 `}
            contentContainerStyle={tw` items-center  min-h-full  `}>
            <View style={tw`w-full flex-1  mt-[${headerHeight}px] pt-5`}>
              <OnboardHeadTexts
                title={"What should we call you?"}
                description="Your @username is unique. You can always change it later."
              />
              <KeyboardAvoidingView>
                <View style={{}}>
                  <TextInput
                    value={values.username}
                    style={inputStyle}
                    onChangeText={handleChange("username")}
                    onBlur={() => setFieldTouched("username")}
                    placeholder="Name"
                  />
                  {touched.username && errors.username && (
                    <Text style={{ fontSize: 12, color: "#FF0D10" }}>
                      {errors.username}
                    </Text>
                  )}
                  <Button
                    title="Submit"
                    disabled={!isValid}
                    onPress={(e: any) => handleSubmit(e)}
                  />
                </View>
              </KeyboardAvoidingView>
            </View>
          </ScrollView>
          <Button
            disabled={!isValid}
            title="Done"
            buttonStyle={tw` btn btn-small `}
            containerStyle={tw`mt-6   py-2 border-t border-gray-300`}
            titleStyle={tw`btn-text`}
            onPress={(e: any) => handleSubmit(e)}
          />
        </>
      )}
    </Formik>
  );
};

export default UsernameScreen;
