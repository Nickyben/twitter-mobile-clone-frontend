import { useHeaderHeight } from "@react-navigation/elements";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { TextStyle } from "react-native";
import HomeHeader from "../../components/home/HomeHeader";
import { Text, View } from "../../components/Themed";
import { useCollapsStickyHeader } from "../../hooks/useCollapsStickyHeader";
import useColorScheme from "../../hooks/useColorScheme";
import HomeScreen from "../../screens/home/HomeScreen";
import tw from "../../styles/tailwind/tailwind";
import { HomeTopTabParamList, HomeTopTabScreenProps } from "../types";

type ScreenConfig = {
  name: keyof HomeTopTabParamList;

  Component: (unknown) => JSX.Element;
};

const screens: Array<ScreenConfig> = [
  {
    name: "Home",
    Component: HomeScreen,
  },
  {
    name: "List1",
    Component: HomeScreen,
  },
  {
    name: "List2",
    Component: HomeScreen,
  },
];

const TopTab = createMaterialTopTabNavigator<HomeTopTabParamList>();

export function HomeTopTabNavigator(parentProp) {
  const headerHeight = useHeaderHeight();
  // const stickyHeaderProps = useCollapsStickyHeader({
  //   headerHeight,
  // });
  const colorScheme = useColorScheme();
  return (
    <>
     
      <TopTab.Navigator
        style={tw` mt-[${headerHeight}px}]`}
        screenOptions={({
          route,
        }: HomeTopTabScreenProps<keyof HomeTopTabParamList>) => ({
          tabBarStyle: {
            ...tw` border-t-1  `,
            // transform: [{ translateY: stickyHeaderProps.translateY }],
          } as any,

          tabBarContentContainerStyle: tw` min-w-full items-center justify-around`,
          tabBarItemStyle: tw` w-auto `,

          tabBarLabel: (props) => {
            return <Label label={route.name} {...props} />;
          },
          tabBarIndicatorStyle: tw`bg-primary hidden`,
        })}>
        {/* {screens.map(({ name, Component }, index) => {
          return (
            <TopTab.Screen key={index} name={name}>
              {(props) => (
                <Component
                  listKey={props.route.key}
                  {...props}
                  {...{ headerHeight, ...stickyHeaderProps }}
                  {...parentProp}
                />
              )}
            </TopTab.Screen>
          );
        })} */}

        <TopTab.Screen
          name="Home"
          component={HomeScreen}
          options={({ route }: HomeTopTabScreenProps<"Home">) => ({})}
        />
        <TopTab.Screen
          name="List"
          component={HomeScreen}
          options={({ route }: HomeTopTabScreenProps<"List">) => ({})}
        />
      </TopTab.Navigator>
    </>
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
