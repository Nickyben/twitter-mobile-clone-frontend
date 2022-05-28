import tw from "../../styles/tailwind/tailwind";
import React, { useCallback } from "react";
import { Text, View } from "../../components/Themed";
import { Formik } from "formik";
import { Alert, KeyboardAvoidingView, ScrollView, TextInput } from "react-native";
import { Button } from "react-native-elements";
import { OnboardingStackScreenProps } from "../../navigation/types";
import OnboardHeadTexts from "../../components/onboarding/OnboardHeadTexts";
import { useHeaderHeight } from "@react-navigation/elements";
import { UsernameValidationSchema } from "../../validation/onboarding";

type Props = OnboardingStackScreenProps<"Username"> & {
  prop1: string;
};
type Values = {
  username: string;
};

const UsernameScreen = ({ navigation }: Props) => {
  const headerHeight = useHeaderHeight();
  const handleValidSubmit = useCallback((values: Values) => {
    // const { username } = values || {};
    Alert.alert(JSON.stringify(values));
    navigation.navigate("CreateAccount", values);
  }, []);

  return (
    <Formik
      initialValues={{
        username: "",
      }}
      validationSchema={UsernameValidationSchema}
      onSubmit={handleValidSubmit}>
      {({
        values,
        handleChange,
        errors,
        setFieldTouched,
        touched,
        isValid,
        handleSubmit,
      }) => {
        return (
          <>
            <ScrollView
              style={tw` p-7 py-0 `}
              contentContainerStyle={tw` items-center   `}>
              <View style={tw`w-full   mt-[${headerHeight}px] pt-5`}>
                <OnboardHeadTexts
                  title={"What should we call you?"}
                  description="Your @username is unique. You can always change it later."
                />
                <KeyboardAvoidingView>
                  <TextInput
                    textContentType="username"
                    value={values.username}
                    style={tw`text-input-primary`}
                    onChangeText={handleChange("username")}
                    onBlur={() => setFieldTouched("username")}
                    placeholder="Username"
                  />
                  {touched.username && errors.username && (
                    <Text style={tw`text-md text-red-500`}>{errors.username}</Text>
                  )}
                </KeyboardAvoidingView>
              </View>
            </ScrollView>
            <Button
              disabled={!isValid}
              title="Done"
              buttonStyle={tw`btn btn-small`}
              containerStyle={tw`btn-container-small`}
              titleStyle={tw`btn-text`}
              onPress={(e: any) => handleSubmit(e)}
            />
          </>
        );
      }}
    </Formik>
  );
};

export default UsernameScreen;
