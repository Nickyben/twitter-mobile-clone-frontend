import tw from "../../styles/tailwind/tailwind";
import React, { useCallback } from "react";
import { Text, View } from "../../components/Themed";
import { Formik } from "formik";
import { Alert, KeyboardAvoidingView, ScrollView, TextInput } from "react-native";
import { Button } from "react-native-elements";
import { OnboardingStackScreenProps } from "../../navigation/types";
import OnboardHeadTexts from "../../components/onboarding/OnboardHeadTexts";
import { useHeaderHeight } from "@react-navigation/elements";
import { PasswordValidationSchema } from "../../validation/onboarding";

type Props = OnboardingStackScreenProps<"Password"> & {
  prop1: string;
};
type Values = {
  password: string;
};

const PasswordScreen = ({ navigation }: Props) => {
  const headerHeight = useHeaderHeight();
  const handleValidSubmit = useCallback((values: Values) => {
    // const { password } = values || {};
    // Alert.alert(JSON.stringify(values));
    navigation.navigate("ProfilePicture", values);
  }, []);

  return (
    <Formik
      initialValues={{
        password: "",
      }}
      validationSchema={PasswordValidationSchema}
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
              keyboardShouldPersistTaps={"handled"}
              style={tw` p-7 py-0 `}
              contentContainerStyle={tw` items-center   `}>
              <View style={tw`w-full   mt-[${headerHeight}px] pt-5`}>
                <OnboardHeadTexts
                  title={"You'll need a password"}
                  description="Make sure it's 8 characters or more."
                />
                <KeyboardAvoidingView>
                  <TextInput
                    textContentType="password"
                    value={values.password}
                    style={tw`text-input-primary `}
                    onChangeText={handleChange("password")}
                    onBlur={() => setFieldTouched("password")}
                    placeholder="Password"
                    secureTextEntry={true}
                  />
                  {touched.password && errors.password && (
                    <Text style={tw`text-md text-red-500`}>{errors.password}</Text>
                  )}
                </KeyboardAvoidingView>
              </View>
            </ScrollView>
            <Button
              disabled={!isValid}
              title="Next"
              buttonStyle={tw`btn `}
              containerStyle={tw`btn-container-big`}
              titleStyle={tw`btn-text`}
              onPress={(e: any) => handleSubmit(e)}
            />
          </>
        );
      }}
    </Formik>
  );
};

export default PasswordScreen;
