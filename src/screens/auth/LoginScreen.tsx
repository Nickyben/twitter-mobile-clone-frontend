import tw from "../../styles/tailwind/tailwind";
import React, { useCallback, Fragment } from "react";
import { Text, View } from "../../components/Themed";
import { Formik } from "formik";
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
} from "react-native";
import { Button } from "react-native-elements";
import { OnboardingStackScreenProps } from "../../navigation/types";
import OnboardHeadTexts from "../../components/onboarding/OnboardHeadTexts";
import { useHeaderHeight } from "@react-navigation/elements";
import { CreateAccountValidationSchema, LoginValidationSchema } from "../../validation/onboarding";
import { LoginInputs } from "../../validation/types";

type Props = OnboardingStackScreenProps<"Login"> & {
  prop1: string;
};

const placeholders: LoginInputs = {
  phoneOrEmailOrUsername: "Phone, email or username",
  password: "Password",
};

const LoginScreen = ({ navigation }: Props) => {
  const headerHeight = useHeaderHeight();
  const handleValidSubmit = useCallback((values: LoginInputs) => {
    // const { name, phoneOrEmail, dateOfBirth } = values || {};
    // Alert.alert(JSON.stringify(values));
    //navigation.navigate("VerifyCode");
  }, []);

  const initialValues: LoginInputs = {
    phoneOrEmailOrUsername: "",
    password: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={LoginValidationSchema}
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
              keyboardShouldPersistTaps={'handled'}
              style={tw` p-7 py-0 `}
              contentContainerStyle={tw` items-center `}>
              <View style={tw`w-full   mt-[${headerHeight}px] pt-5`}>
                <OnboardHeadTexts title={"Log in to Twitter"} description=" " />
                <KeyboardAvoidingView>
                  {Object.keys(initialValues).map((inputName: keyof LoginInputs) => {
                    return (
                      <Fragment key={inputName}>
                        <TextInput
                          value={values[inputName]}
                          style={tw`text-input-primary`}
                          onChangeText={handleChange(inputName)}
                          onBlur={() => setFieldTouched(inputName)}
                          placeholder={placeholders[inputName]}
                          secureTextEntry={inputName === "password"}
                        />
                        {touched[inputName] && errors[inputName] && (
                          <Text style={tw`text-md text-red-500`}>
                            {errors[inputName]}
                          </Text>
                        )}
                      </Fragment>
                    );
                  })}
                  <Text
                    style={tw`text-md text-gray-700 self-center mt-5`}
                    onPress={(e) => {
                      // e.preventDefault();
                      // Keyboard.dismiss();
                      Alert.alert("Not yet available");
                    }}>
                    Forgotten your password?
                  </Text>
                </KeyboardAvoidingView>
              </View>
            </ScrollView>
            <Button
              disabled={!isValid}
              title="Login"
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

export default LoginScreen;
