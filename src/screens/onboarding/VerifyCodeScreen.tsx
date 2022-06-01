import tw from "../../styles/tailwind/tailwind";
import React, { useCallback, Fragment, useState, useEffect } from "react";
import { Text, View } from "../../components/Themed";
import validator from "validator";
import {
  Cursor,
  CodeField,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { Alert, KeyboardAvoidingView, ScrollView, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { OnboardingStackScreenProps } from "../../navigation/types";
import OnboardHeadTexts from "../../components/onboarding/OnboardHeadTexts";
import { useHeaderHeight } from "@react-navigation/elements";
import { CreateAccountValidationSchema } from "../../validation/onboarding";
import { CreateAccountInputs } from "../../validation/types";

type Props = OnboardingStackScreenProps<"VerifyCode"> & {
  prop1: string;
};
type Values = {
  code: string;
};

const styles = StyleSheet.create({
  cellRoot: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  cellText: {
    color: "#000",
    fontSize: 36,
    textAlign: "center",
  },
  focusCell: {
    borderBottomColor: "#007AFF",
    borderBottomWidth: 2,
  },
});

const CELL_COUNT = 6;

const VerifyCodeScreen = ({ navigation }: Props) => {
  const headerHeight = useHeaderHeight();
  const [value, setValue] = useState("");
  const [inputIsValid, setInputIsValid] = useState<boolean>(true);
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const handleValidSubmit = useCallback(() => {
    if (!inputIsValid) {
      return;
    }
    // Alert.alert(JSON.stringify(Number(value)));
    navigation.navigate("Password", { verificationCode: Number(value) });
  }, [inputIsValid]);

  useEffect(() => {
    const codeIsValidated =
      validator.isNumeric(value) &&
      validator.isLength(value, { max: 6, min: 6 }) &&
      !validator.isEmpty(value);

    if (codeIsValidated) {
      setInputIsValid(true);
    }
  }, [value]);

  return (
    <Fragment>
      <ScrollView
        style={tw` p-7 py-0 `}
        contentContainerStyle={tw` items-center    `}>
        <View style={tw`w-full   mt-[${headerHeight}px] pt-5`}>
          <OnboardHeadTexts
            title={"We sent you a code"}
            description="Enter it bellow to verify nick@email.com"
          />
          <KeyboardAvoidingView
            style={tw` items-center min-h-25 justify-center p-2`}>
            <CodeField
              ref={ref}
              {...props}
              value={value}
              onChangeText={setValue}
              cellCount={CELL_COUNT}
              rootStyle={tw`flex-1   mx-auto w-4/5`}
              secureTextEntry={true}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              renderCell={({ index, symbol, isFocused }) => (
                <View
                  // Make sure that you pass onLayout={getCellOnLayoutHandler(index)} prop to root component of "Cell"
                  onLayout={getCellOnLayoutHandler(index)}
                  key={index}
                  style={[
                    tw`flex-1 border-b-2 border-b-gray-300  mx-2 items-center justify-center `,
                    isFocused && tw` border-b-primary `,
                  ]}>
                  <Text style={tw`text-[30px] text-gray-500`}>
                    {symbol || !(isFocused ? <Cursor /> : null)}
                  </Text>
                </View>
              )}
            />
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
      <Text
        style={tw`ml-7 text-primary`}
        onPress={() => Alert.alert("Not yet available")}>
        Didn't receive email?
      </Text>
      <Button
        disabled={!inputIsValid}
        title="Next"
        buttonStyle={tw`btn`}
        containerStyle={tw`btn-container-big mt-1.5 `}
        titleStyle={tw`btn-text`}
        onPress={handleValidSubmit}
      />
    </Fragment>
  );
};

export default VerifyCodeScreen;
