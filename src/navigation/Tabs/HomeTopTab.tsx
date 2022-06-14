import { useHeaderHeight } from "@react-navigation/elements";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { TextStyle } from "react-native";
import { Text } from "../../components/Themed";
import HomeScreen from "../../screens/home/HomeScreen";
import tw from "../../styles/tailwind/tailwind";
import { HomeTopTabParamList, HomeTopTabScreenProps } from "../types";

const TopTab = createMaterialTopTabNavigator<HomeTopTabParamList>();

export function HomeTopTabNavigator() {
  const headerHeight= useHeaderHeight()
  return (
    <TopTab.Navigator
      style={tw` mt-[${headerHeight}px]`}
      screenOptions={({
        route,
      }: HomeTopTabScreenProps<keyof HomeTopTabParamList>) => ({
        tabBarStyle: tw` `,
        tabBarLabel: (props) => {
          return <Label label={route.name} {...props} />;
        },
        tabBarIndicatorStyle: tw`bg-primary `,
      })}>
      <TopTab.Screen
        name="Home"
        component={HomeScreen}
        options={({ route }: HomeTopTabScreenProps<"Home">) => ({
          // tabBarItemStyle: tw`items-center bg-green-400 w-auto`,
        })}
      />
      <TopTab.Screen
        name="Settings"
        component={HomeScreen}
        options={({ route }: HomeTopTabScreenProps<"Settings">) => ({})}
      />
    </TopTab.Navigator>
  );
}

const Label = ({
  label,focused,style
}: {
    label: string;
  focused?: boolean;
    color?: string;
  style?:TextStyle
}) => {

  return <Text style={ [tw`${focused?'font-bold':'font-semibold'} text-md  `, style]}>{label} </Text>
  };