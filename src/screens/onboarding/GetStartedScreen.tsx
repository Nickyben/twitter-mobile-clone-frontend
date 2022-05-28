import tw from "../../styles/tailwind/tailwind";
import React from "react";
import { Text, View } from "../../components/Themed";
import { ScrollView } from "react-native";
import { Button } from "react-native-elements";
import { OnboardingStackScreenProps } from "../../navigation/types";

// ...

type Props = OnboardingStackScreenProps<"GetStarted"> & {
  prop1: string;
};

const GetStartedScreen = ({ navigation }: Props) => {
  return (
    <ScrollView
      style={tw` p-7`}
      contentContainerStyle={tw`flex items-center justify-center min-h-full `}>
      <View style={tw`w-full `}>
        <Text style={tw.style(`text-3xl font-bold  text-justify`)}>
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
  );
};

export default GetStartedScreen;
