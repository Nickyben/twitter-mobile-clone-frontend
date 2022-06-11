import tw from "../../styles/tailwind/tailwind";
import React, { useCallback } from "react";
import { Text, View } from "../../components/Themed";
import { ScrollView } from "react-native";
import { Button } from "react-native-elements";
import { OnboardingStackScreenProps } from "../../navigation/types";
import { useHeaderHeight } from "@react-navigation/elements";

// ...

type Props = OnboardingStackScreenProps<"GetStarted"> & {
  prop1: string;
};

const GetStartedScreen = ({ navigation }: Props) => {
  const headerHeight = useHeaderHeight();
  const handleLogin = useCallback(() => {
    navigation.navigate("Login");
  }, [navigation.navigate]);

  return (
    <>
      <ScrollView style={tw` p-7 `} contentContainerStyle={tw`my-auto`}>
        <View style={tw`w-full  mt-[${headerHeight}px] pt-7  self-center`}>
          <Text style={tw`text-3xl font-bold text-justify`}>
            See what's happening in the world right now.
          </Text>
          <Button
            title="Get Started"
            buttonStyle={tw`btn`}
            containerStyle={tw`mt-6`}
            titleStyle={tw`btn-text`}
            onPress={() => navigation.navigate("Username")}
          />
        </View>
      </ScrollView>
      <Text style={tw`text-[16px] font-semibold text-gray-500  my-6 ml-7 `}>
        Have an account already?{" "}
        <Text style={tw`text-[16px] font-bold text-primary  `} onPress={handleLogin}>
          Login
        </Text>
      </Text>
    </>
  );
};

export default GetStartedScreen;
