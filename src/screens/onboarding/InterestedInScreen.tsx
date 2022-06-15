import tw from "../../styles/tailwind/tailwind";
import React, { Fragment, useCallback, useState } from "react";
import { View } from "../../components/Themed";
import { ScrollView } from "react-native";
import { Button } from "react-native-elements";
import { OnboardingStackScreenProps } from "../../navigation/types";
import OnboardHeadTexts from "../../components/onboarding/OnboardHeadTexts";
import { useHeaderHeight } from "@react-navigation/elements";
import InterestsSelectionList from "../../components/InterestsSelectionList";
import { initialInterestCategoriesData } from "../../data/onboarding";

type Props = OnboardingStackScreenProps<"InterestedIn"> & {
  prop1: string;
};

const InterestedInScreen = ({ navigation }: Props) => {
  const headerHeight = useHeaderHeight();
  const [selectedInterests, setSelectedInterests] = useState<Array<string>>([]);

  const selectInterest = useCallback((id) => {
    setSelectedInterests((prev) => {
      if (prev.some((i) => i === id)) {
        return prev.filter((i) => i !== id);
      }
      return prev.concat(id);
    });
  }, []);

  const handleNext = useCallback(() => {
    console.log({ selectedInterests });

    navigation.navigate("Suggestions");
  }, [selectedInterests]);

  return (
    <Fragment>
      <ScrollView
        style={tw`  py-0 `}
        contentContainerStyle={tw` items-center   pb-5`}>
        <View style={tw`w-full px-7 pb-8 mt-[${headerHeight}px] pt-7`}>
          <OnboardHeadTexts
            title={"What are you interested in?"}
            description="Select some topics you're interested in to help personalize your Twitter experience, starting with finding people to follow."
          />
        </View>
        {initialInterestCategoriesData.map((cat, index) => {
          return (
            <InterestsSelectionList
              selectInterest={selectInterest}
              selectedInterests={selectedInterests}
              key={index}
              interestCat={cat}
            />
          );
        })}
      </ScrollView>
      <Button
        title="Next"
        buttonStyle={tw`btn btn-small `}
        containerStyle={tw`btn-container-small mt-0`}
        titleStyle={tw`btn-text`}
        onPress={handleNext}
      />
    </Fragment>
  );
};

export default React.memo(InterestedInScreen);
