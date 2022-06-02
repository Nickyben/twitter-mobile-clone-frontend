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

const ConnectAddressBookScreen = ({ navigation }: Props) => {
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
              "Connect your address book to find people you may know on Twitter"
            }
            description=""
          />
        </View>
      </ScrollView>
      <Text
        style={tw`text-[16px] font-semibold text-gray-500 text-justify mt-6 px-7 `}>
        Contacts from you address book will be uploaded to Twitter on an ongoing
        basis to help connect your friends and personalize your content, such as
        making suggestions for you and others. You can turn off syncing and remove
        previously uploaded contacts in your settings{" "}
        <Text
          style={tw`text-[16px] font-bold text-primary  text-justify `}
          onPress={() => Alert.alert("Not yet available")}>
          Learn more
        </Text>
      </Text>
      <Button
        title="Sync contacts"
        buttonStyle={tw`btn `}
        containerStyle={tw`btn-container-big`}
        titleStyle={tw`btn-text`}
        onPress={() => Alert.alert("Not yet available")}
      />
      <Text
        style={tw`mb-4 -mt-2 text-primary text-center`}
        onPress={handleValidSubmit}>
        Not now
      </Text>
    </Fragment>
  );
};

export default ConnectAddressBookScreen;
