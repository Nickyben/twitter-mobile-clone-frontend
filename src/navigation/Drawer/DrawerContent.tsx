import { Ionicons } from "@expo/vector-icons";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import { Image, StatusBar } from "react-native";
import { View } from "../../components/Themed";
import Colors from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";
import tw from "../../styles/tailwind/tailwind";
import { RootDrawerParamList } from "../types";
import CustomDrawerHeader from "./DrawerHeader";

const getLabel = (routeName: string) => {
  return routeName
    .split("")
    .map((char) => {
      if (char.toUpperCase() === char) {
        return " " + char;
      }
      return char;
    })
    .join("");
};

const icons = {
  profile: require("../../../assets/icons/images/profile.png"),
  lists: require("../../../assets/icons/images/lists.png"),
  topics: require("../../../assets/icons/images/topics.png"),
  bookmarks: require("../../../assets/icons/images/bookmarks.png"),
  moments: require("../../../assets/icons/images/moments.png"),
  monetisation: require("../../../assets/icons/images/profile.png"),
  twitterforprofessionals: require("../../../assets/icons/images/profile.png"),
  twitterads: require("../../../assets/icons/images/twitterads.png"),
  contrast: require("../../../assets/icons/images/profile.png"),
  barcode: require("../../../assets/icons/images/profile.png"),
};

export function CustomDrawerContent(props: DrawerContentComponentProps) {
  const { navigation, state, descriptors } = props || {};
  const routeNames = state.routeNames as Array<keyof RootDrawerParamList>;
  // console.log({
  //   state: state,
  //   // isFocused: descriptors[state.routes.find((r) => r.name === routeName).key],
  // });//mt-[${StatusBar.currentHeight}px]
  return (
    <DrawerContentScrollView
      {...props}
      style={tw`pt-0  `}
      contentContainerStyle={tw``}>
      <CustomDrawerHeader {...props} />
      {/* <DrawerItemList {...props}  />  descriptors[state.routes[0].key] */}
      <View style={tw` flex-1 pt-1 `}>
        {routeNames
          .filter((r) => r !== "MainStack")
          .map((routeName, index) => {
            const isTwitterSpecial = ["Monetisation", "TwitterAds"].some(
              (rn) => rn === routeName
            );
            return (
              <DrawerItem
                // isFocused={state.history[state.history.length-1].key}
                icon={(props) => (
                  <DrawerItemIcon
                    {...props}
                    iconSource={icons[routeName.toLocaleLowerCase()]}
                  />
                )}
                key={index}
                label={getLabel(routeName)}
                onPress={() => navigation.navigate(routeName)}
                labelStyle={tw` -ml-2  text-md  text-gray-900 font-normal`}
                style={tw` mx-4  p-0 pl-0  ${
                  isTwitterSpecial ? "pb-4 px-4 mx-0 border-b-1 border-gray-300" : ""
                }`}
              />
            );
          })}
      </View>
    </DrawerContentScrollView>
  );
}

const DrawerItemIcon = ({
  iconSource,
}: {
  iconSource: any;
  focused: boolean;
  size: number;
  color: string;
}) => {
  const colorScheme = useColorScheme();

  return <Image source={iconSource} />;
};
