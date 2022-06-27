import { useHeaderHeight } from "@react-navigation/elements";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useEffect, useState } from "react";
import {
  Animated,
  StatusBar,
  StyleProp,
  TextStyle,
  useWindowDimensions,
  ViewStyle,
} from "react-native";
import ProfileTweetsList from "../../components/profile/ProfileTweetsList";
import { Text, View } from "../../components/Themed";
import HomeScreen from "../../screens/home/HomeScreen";
import tw from "../../styles/tailwind/tailwind";
import {
  ProfileTabScreenParams,
  ProfileTopTabParamList,
  ProfileTopTabScreenProps,
} from "../types";

const TopTab = createMaterialTopTabNavigator<ProfileTopTabParamList>();

export function ProfileTopTab(parentProp: ProfileTabScreenParams) {
  const { height } = useWindowDimensions();
  const headerHeight = useHeaderHeight();
  const topContentHeight = parentProp?.topContentLayout?.height || 0;
  return (
    <Animated.View style={[tw`flex-1 overflow-visible  `]}>
      <TopTab.Navigator
        sceneContainerStyle={tw``}
        style={[tw``]}
        showPageIndicator={true}
        screenOptions={({
          route,
        }: ProfileTopTabScreenProps<keyof ProfileTopTabParamList>) => ({
          tabBarScrollEnabled: true,

          tabBarStyle: [
            tw`  border-gray-300  self-center w-full  top-[${topContentHeight}px] `,
            { borderTopWidth: 0.2 },
            {
              transform: [
                {
                  translateY: parentProp.scrollY.interpolate({
                    inputRange: [
                      -1,
                      0,
                      0,
                      topContentHeight > headerHeight
                        ? topContentHeight - headerHeight
                        : 0,
                      topContentHeight,
                      topContentHeight + 2,
                    ],
                    outputRange: [
                      0,
                      0,
                      0,
                      headerHeight - topContentHeight,
                      headerHeight - topContentHeight,
                      headerHeight - topContentHeight,
                    ],
                  }),
                },
              ],
            } as unknown,
          ],
          tabBarContentContainerStyle: tw` min-w-full items-center justify-around `,
          tabBarItemStyle: tw` w-auto `,
          tabBarIndicatorStyle: tw`bg-primary hidden`,
          tabBarLabel: (props) => {
            let label: string = route.name;
            if (route.name === "TweetsAndReplies") {
              label = "Tweets & replies";
            }
            return <Label label={label} {...props} />;
          },
        })}>
        {["Tweets", "TweetsAndReplies", "Media", "Likes"].map(
          (name: keyof ProfileTopTabParamList, index) => {
            return (
              <TopTab.Screen
                key={index}
                name={name}
                options={({
                  route,
                }: ProfileTopTabScreenProps<keyof ProfileTopTabParamList>) => ({})}>
                {(props) => (
                  <ProfileTweetsList
                    listKey={props.route.key}
                    {...props}
                    {...parentProp}
                   
                  />
                )}
              </TopTab.Screen>
            );
          }
        )}

        {/* <TopTab.Screen
        name="Tweets"
        component={ProfileTweetsList}
        initialParams={props}
        options={({ route }: ProfileTopTabScreenProps<"Tweets">) => ({})}
      />
      <TopTab.Screen
        name="TweetsAndReplies"
        component={ProfileTweetsList}
        initialParams={props}
        
        options={({ route }: ProfileTopTabScreenProps<"TweetsAndReplies">) => ({})}
      />
      <TopTab.Screen
        name="Media"
        component={ProfileTweetsList}
        initialParams={props}
        options={({ route }: ProfileTopTabScreenProps<"Media">) => ({})}
      />
      <TopTab.Screen
        
        name="Likes"
        component={ProfileTweetsList}
        initialParams={props}
        options={({ route }: ProfileTopTabScreenProps<"Likes">) => ({})}
      /> */}
      </TopTab.Navigator>
    </Animated.View>
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
        }   bg-transparent  border-b-3   items-center  pb-3  -mb-3 px-2 `,
        {},
      ]}>
      <Text
        style={[
          tw`${
            focused ? "font-bold " : "font-semibold text-gray-400"
          }  text-sm    text-center my-auto`,
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
