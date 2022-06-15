import tw from "../../styles/tailwind/tailwind";
import React, { Fragment, useCallback, useState } from "react";
import { Button } from "react-native-elements";
import { OnboardingStackScreenProps } from "../../navigation/types";
import { useHeaderHeight } from "@react-navigation/elements";
import {
  initialInterestCategoriesData,
  initialSuggestedFollows,
} from "../../data/onboarding";
import FollowSuggestionsList from "../../components/FollowSuggestionsList";

type Props = OnboardingStackScreenProps<"Suggestions"> & {
  prop1: string;
};

const initialFollowedUserIds = initialSuggestedFollows
  .filter((u) => u.isFollowedByMe)
  .map((u) => u.userId);

const SuggestionsScreen = ({ navigation }: Props) => {
  const [followedUserIds, setFollowedUserIds] = useState<Array<string>>(
    initialFollowedUserIds
  );

  const handleFollow = useCallback((userId) => {
    setFollowedUserIds((prev) => {
      if (prev.some((uid) => uid === userId)) {
        return prev.filter((uid) => uid !== userId);
      }
      return prev.concat(userId);
    });
  }, []);

  const handleNext = useCallback(() => {
    console.log({ followedUserIds });

    navigation.navigate("TurnOnNotifications");
  }, [followedUserIds]);

  return (
    <Fragment>
      <FollowSuggestionsList
        followUsers={initialSuggestedFollows}
        followedUsers={followedUserIds}
        handleFollow={handleFollow}
      />

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

export default React.memo(SuggestionsScreen);
