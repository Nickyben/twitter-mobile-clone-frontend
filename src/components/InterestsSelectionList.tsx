import { Ionicons } from "@expo/vector-icons";
import React, { useCallback, useEffect, useState } from "react";
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  StatusBar,
  ScrollView,
} from "react-native";
import { Button } from "react-native-elements";
import { Text, View } from "../../src/components/Themed";
import Colors, { tintColorDark, tintColorPrimary } from "../../src/constants/Colors";
import { InterestCategories, InterestItem } from "../../src/data/onboarding";
import tw from "../../src/styles/tailwind/tailwind";
interface IProps {
  interestCat: InterestCategories;
  selectedInterests: Array<string>;
  selectInterest?: (id: string) => void;
}
interface ListItemType extends InterestItem {
  selectInterest?: (id: string) => void;
}

const ListItem = ({ interest, isSelected, selectInterest, id }: ListItemType) => {
  // const [isSelected, setIsSelected] = useState(_isSelected);
  return (
    <View style={tw``}>
      <Button
        title={interest}
        type={"outline"}
        buttonStyle={tw`btn px-5 py-1 border border-gray-300 ${
          isSelected ? "bg-primary" : "bg-transparent "
        }`}
        containerStyle={tw`btn-container`}
        titleStyle={tw`btn-text text-gray-600 text-lg   ${
          isSelected ? "text-white" : "text-gray-600 "
        } `}
        icon={
          <Ionicons
            name={`${isSelected ? "checkmark" : "add"}`}
            size={24}
            color={isSelected ? tintColorDark : tintColorPrimary}
            style={tw`ml-4`}
          />
        }
        iconRight
        onPress={() => selectInterest(id)}
      />
    </View>
  );
};
const ListHeader = ({ title }) => (
  <View
    style={tw`w-full  px-7  py-3 bg-white w-full border-t  border-b-1 border-gray-300`}>
    <Text style={tw`text-[22px] font-bold   `}>{title}</Text>
  </View>
);

const MemoListHeader = React.memo(ListHeader);
const MemoListItem = React.memo(ListItem);

const InterestsSelectionList = ({
  interestCat: { title, list },
  selectedInterests,
  selectInterest,
}: IProps) => {
  const renderItem = useCallback(
    ({ item }: { item: InterestItem }) => {
      const isSelected = selectedInterests.some((i) => i === item.interest);

      return (
        <MemoListItem
          id={item.id}
          selectInterest={selectInterest}
          interest={item.interest}
          isSelected={item.isSelected || isSelected}
        />
      );
    },
    [selectedInterests, selectInterest]
  );

  return (
    <SafeAreaView
      style={tw` flex-1 bg-gray-100 w-full pt-3 border-t border-gray-300`}>
      <MemoListHeader title={title} />
      <ScrollView
        horizontal
        style={[tw`dark:bg-black, bg-white py-2 `]}
        showsHorizontalScrollIndicator={false}>
        <FlatList
          style={[tw`py-2 pr-7`]}
          data={list}
          renderItem={renderItem}
          contentContainerStyle={tw`self-start`}
          numColumns={Math.ceil(list.length / 5)}
          // ListHeaderComponent={<ListHeader title={title} />}
          keyExtractor={(item) => item.interest}
          extraData={[selectedInterests, selectInterest]}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  flatList: { maxWidth: "200%" },
  flatListContent: {},

  title: {
    fontSize: 32,
  },
});

export default React.memo(InterestsSelectionList);
