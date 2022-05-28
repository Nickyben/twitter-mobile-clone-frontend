import tw from "../../styles/tailwind/tailwind";
import React, { useCallback, Fragment } from "react";
import { Text, View } from "../../components/Themed";
import { Formik } from "formik";
import { Alert, KeyboardAvoidingView, ScrollView, TextInput } from "react-native";
import { Button } from "react-native-elements";
import { OnboardingStackScreenProps } from "../../navigation/types";
import OnboardHeadTexts from "../../components/onboarding/OnboardHeadTexts";
import { useHeaderHeight } from "@react-navigation/elements";
import { CreateAccountValidationSchema } from "../../validation/onboarding";
import { CreateAccountInputs } from "../../validation/types";

type Props = OnboardingStackScreenProps<"CreateAccount"> & {
  prop1: string;
};

const placeholders: CreateAccountInputs = {
  name: "Name",
  phoneOrEmail: "Phone number or email address",
  dateOfBirth: "Date of birth",
};

const CreateAccountScreen = ({ navigation }: Props) => {
  const headerHeight = useHeaderHeight();
  const handleValidSubmit = useCallback((values: CreateAccountInputs) => {
    // const { name, phoneOrEmail, dateOfBirth } = values || {};
    Alert.alert(JSON.stringify(values));
    navigation.navigate("VerifyCode", values);
  }, []);

  const initialValues: CreateAccountInputs = {
    name: "",
    phoneOrEmail: "",
    dateOfBirth: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      // validationSchema={CreateAccountValidationSchema}
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
                <OnboardHeadTexts title={"Create your account"} description=" " />
                <KeyboardAvoidingView>
                  {Object.keys(initialValues).map(
                    (inputName: keyof CreateAccountInputs) => {
                      return (
                        <Fragment key={inputName}>
                          <TextInput
                            value={values[inputName]}
                            style={tw`text-input-primary`}
                            onChangeText={handleChange(inputName)}
                            onBlur={() => setFieldTouched(inputName)}
                            placeholder={placeholders[inputName]}
                          />
                          {touched[inputName] && errors[inputName] && (
                            <Text style={tw`text-md text-red-500`}>
                              {errors[inputName]}
                            </Text>
                          )}
                        </Fragment>
                      );
                    }
                  )}
                </KeyboardAvoidingView>
              </View>
            </ScrollView>
            <Button
              disabled={!isValid}
              title="Next"
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

export default CreateAccountScreen;
