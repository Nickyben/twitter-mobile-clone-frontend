import { useHeaderHeight,  } from "@react-navigation/elements";
import { createMaterialTopTabNavigator,  } from "@react-navigation/material-top-tabs";
import { TextStyle } from "react-native";
import { Text, View } from "../../components/Themed";
import HomeScreen from "../../screens/home/HomeScreen";
import tw from "../../styles/tailwind/tailwind";
import { HomeTopTabParamList, HomeTopTabScreenProps } from "../types";

const TopTab = createMaterialTopTabNavigator<HomeTopTabParamList>();

export function HomeTopTabNavigator() {
  const headerHeight = useHeaderHeight();
  return (
    <TopTab.Navigator
      style={tw` mt-[${headerHeight}px]`}
      screenOptions={({
        route,
      }: HomeTopTabScreenProps<keyof HomeTopTabParamList>) => ({
        tabBarStyle: tw` border-t-1 `,

        tabBarContentContainerStyle: tw` min-w-full items-center justify-around`,
        tabBarItemStyle: tw` w-auto `,

        tabBarLabel: (props) => {
          return <Label label={route.name} {...props} />;
        },
        tabBarIndicatorStyle: tw`bg-primary hidden`,
      })}>
      <TopTab.Screen
        name="Home"
        component={HomeScreen}
        options={({ route }: HomeTopTabScreenProps<"Home">) => ({
          // tabBarItemStyle: tw`items-center bg-green-400 w-auto`,
        })}
      />
      <TopTab.Screen
        name="List"
        component={HomeScreen}
        options={({ route }: HomeTopTabScreenProps<"List">) => ({})}
      />
    </TopTab.Navigator>
  );
}

const Label = ({
  label,
  focused,
  style,
}: {
  label: string;
  focused?: boolean;
  color?: string;
  style?: TextStyle;
}) => {
  return (
    <View
      style={[
        tw`${
          focused ? "  border-primary" : "border-transparent"
        } bg-transparent border-b-3   items-center justify-center  self-center  pb-3  -mb-3 px-2 `,
        {},
      ]}>
      <Text
        style={[
          tw`${
            focused ? "font-bold " : "font-semibold text-gray-400"
          } text-md    text-center my-auto`,
          style,
        ]}>
        {label}{" "}
      </Text>
     
    </View>
  );
};

// -mb-[${headerHeight / 2}px] pb-[${
//             headerHeight / 2
//           }px]
