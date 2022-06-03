import tw from "../../styles/tailwind/tailwind";
import React from "react";
import { Text, View } from "../Themed";

type Props = {
  title: string;
  description?: string;
};

export default function ({ title, description }: Props) {
  return (
    <View style={tw`w-full `}>
      <Text style={tw.style(`text-[26px] font-bold  text-center`)}>{title}</Text>
      {Boolean(description) && (
        <Text
          style={tw.style(
            `text-lg  dark:text-gray-200  text-gray-400 font-semibold mt-5 text-center`
          )}>
          {description}
        </Text>
      )}
    </View>
  );
}
