import tw from "../../styles/tailwind/tailwind";
import React, { Fragment, useCallback, useState } from "react";
import { Text, View } from "../../components/Themed";
import { Alert, ScrollView } from "react-native";
import { Avatar, Button } from "react-native-elements";
import { OnboardingStackScreenProps } from "../../navigation/types";
import OnboardHeadTexts from "../../components/onboarding/OnboardHeadTexts";
import { useHeaderHeight } from "@react-navigation/elements";

type Props = OnboardingStackScreenProps<"ConnectAddressBook"> & {
  prop1: string;
};

const TurnOnNotificationsScreen = ({ navigation }: Props) => {
  const headerHeight = useHeaderHeight();

  const handleValidSubmit = useCallback(() => {
    navigation.navigate("Languages");
  }, []);

  return (
    <Fragment>
      <ScrollView
        style={tw` p-7 py-0 `}
        contentContainerStyle={tw` items-center bg-purple-400  pb-5    `}>
        <View style={tw`w-full   pt-7 h-full mt-[${headerHeight}px]`}>
          <OnboardHeadTexts
            title={
              "Turn on notifications"
            }
            description="Get the most out of Twitter by staying up to date with what's happening."
          />
        </View>
      </ScrollView>
     
      <Button
        title="Allow notifications"
        buttonStyle={tw`btn `}
        containerStyle={tw`btn-container-big`}
        titleStyle={tw`btn-text`}
        onPress={() => Alert.alert("Not yet available")}
      />
      <Text
        style={tw`mb-4 -mt-2 text-primary text-center`}
        onPress={handleValidSubmit}>
       Skip for now
      </Text>
    </Fragment>
  );
};

export default TurnOnNotificationsScreen;
