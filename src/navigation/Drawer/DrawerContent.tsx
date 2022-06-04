import { Ionicons } from "@expo/vector-icons";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import { StatusBar } from "react-native";
import { View } from "../../components/Themed";
import Colors from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";
import tw from "../../styles/tailwind/tailwind";
import CustomDrawerHeader from "./DrawerHeader";

export function CustomDrawerContent(props: DrawerContentComponentProps) {
  const { navigation, state, descriptors } = props || {};
  // console.log({
  //   state: state,
  //   // isFocused: descriptors[state.routes.find((r) => r.name === routeName).key],
  // });//mt-[${StatusBar.currentHeight}px]
  return (
    <DrawerContentScrollView
      {...props}
      style={tw`pt-0  `}
      contentContainerStyle={tw``}>
      <CustomDrawerHeader />
      {/* <DrawerItemList {...props}  />  descriptors[state.routes[0].key] */}
      <View style={tw` flex-1 pt-3  px-4`}>
        {state.routeNames
          .filter((r) => r !== "MainStack")
          .map((routeName, index) => {
            return (
              <DrawerItem
                // isFocused={state.history[state.history.length-1].key}
                icon={(props) => <DrawerItemIcon {...props} />}
                activeBackgroundColor="#ff0"
                key={index}
                label={routeName}
                onPress={() => navigation.navigate(routeName)}
                labelStyle={tw` -ml-2  text-md  text-gray-800 font-normal`}
                style={tw` mx-0  p-0 pl-0`}
              />
            );
          })}
      </View>
    </DrawerContentScrollView>
  );
}

const DrawerItemIcon = ({
  focused,
}: {
  focused: boolean;
  size: number;
  color: string;
}) => {
  const colorScheme = useColorScheme();
  return (
    <Ionicons
      name={"ios-person-outline"}
      size={24}
      color={Colors[colorScheme].tint}
      style={tw``}
    />
  );
};
