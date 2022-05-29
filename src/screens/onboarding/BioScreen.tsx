import tw from "../../styles/tailwind/tailwind";
import React, { useCallback } from "react";
import { Text, View } from "../../components/Themed";
import { Formik } from "formik";
import { Alert, KeyboardAvoidingView, ScrollView, TextInput } from "react-native";
import { Button } from "react-native-elements";
import { OnboardingStackScreenProps } from "../../navigation/types";
import OnboardHeadTexts from "../../components/onboarding/OnboardHeadTexts";
import { useHeaderHeight } from "@react-navigation/elements";
import { BioValidationSchema } from "../../validation/onboarding";

type Props = OnboardingStackScreenProps<"Bio"> & {
  prop1: string;
};
type Values = {
  bio: string;
};

const BioScreen = ({ navigation }: Props) => {
  const headerHeight = useHeaderHeight();
  const initialValues = { bio: "" } as Values;
  const handleValidSubmit = useCallback(() => {
    // const { bio } = values || {};
    navigation.navigate("CustomizeExperience");
  }, []);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={BioValidationSchema}
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
                  title={"Describe yourself"}
                  description="What makes you feel special. Don't think too hard, just have fun with it"
                />
                <KeyboardAvoidingView>
                  <TextInput
                    value={values.bio}
                    style={tw`text-input-primary`}
                    onChangeText={handleChange("bio")}
                    onBlur={() => setFieldTouched("bio")}
                    placeholder="Your bio"
                    multiline
                    maxLength={150}
                  />
                  {touched.bio && errors.bio && (
                    <Text style={tw`text-md text-red-500`}>{errors.bio}</Text>
                  )}
                  <Text style={tw`text-md text-gray-700 self-end`}>
                    {values
                      ? 150 - values.bio.length
                      : 150 - initialValues.bio.length}
                  </Text>
                </KeyboardAvoidingView>
              </View>
            </ScrollView>
            <Button
              disabled={!isValid}
              title="Next"
              buttonStyle={tw`btn `}
              containerStyle={tw`btn-container-big `}
              titleStyle={tw`btn-text`}
              onPress={(e) => handleSubmit(e as any)}
            />
            <Text
              style={tw`mb-4 text-primary text-center`}
              onPress={handleValidSubmit}>
              Skip for now
            </Text>
          </>
        );
      }}
    </Formik>
  );
};

export default BioScreen;
