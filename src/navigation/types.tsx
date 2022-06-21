/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import {
  BottomTabNavigationProp,
  BottomTabScreenProps,
} from "@react-navigation/bottom-tabs";
import {
  MaterialTopTabScreenProps,
  MaterialTopTabNavigationProp,
} from "@react-navigation/material-top-tabs";
import { DrawerScreenProps } from "@react-navigation/drawer";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { CreateAccountInputs } from "../validation/types";
import { NativeScrollEvent, NativeSyntheticEvent } from "react-native";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace ReactNavigation {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface RootParamList extends RootStackParamList {}
  }
}

//STACKS
export type RootStackParamList = {
  Root: undefined;
  Modal: undefined;
  NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

//TODO:Remove code above

//TODO:CHECK OUT THE CompositeScreenProps, NativeStackScreenProps Generics

//=========================================================================================================
//=========================================================================================================
//=========================================    APP      ===================================================
//=========================================  STRUCTURE  ===================================================
//=========================================================================================================
//=========================================================================================================
export type ExtrasStackParamList = {
  NotFound: undefined;
  RootFallback: undefined;
};

export type ExtrasStackScreenProps<Screen extends keyof ExtrasStackParamList> =
  NativeStackScreenProps<ExtrasStackParamList, Screen>;
//=========================================================================================================
//==============================  ONBOARDING & AUTHENTICATION =============================================
//=========================================================================================================
export type OnboardingStackParamList = ExtrasStackParamList & {
  GetStarted: undefined;
  Username: undefined;
  CreateAccount: { username: string };
  VerifyCode: CreateAccountInputs;
  Password: { verificationCode: number };
  ProfilePicture: { password: string };
  Bio: undefined;
  CustomizeExperience: undefined;
  ConnectAddressBook: undefined;
  Languages: undefined;
  InterestedIn: undefined;
  Suggestions: undefined;
  TurnOnNotifications: undefined;
  SuggestedFollows: undefined;
  Login: undefined;
};

export type OnboardingStackScreenProps<
  Screen extends keyof OnboardingStackParamList
> = NativeStackScreenProps<OnboardingStackParamList, Screen>;

//=========================================================================================================
//=========================================  AUTHENTICATION  ==============================================
//=========================================================================================================
export type AuthStackParamList = {
  Login: undefined;
};

export type AuthStackScreenProps<Screen extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, Screen>;

//=========================================================================================================
//=========================================  ROOT DRAWER  =================================================
//=========================================================================================================
export type RootDrawerParamList = {
  MainStack: NavigatorScreenParams<MainStackParamList> | undefined;
  Profile: undefined;
  Lists: undefined;
  Topics: undefined;
  Bookmarks: undefined;
  Moments: undefined;
  Monetisation: undefined;
  TwitterForProfessionals: undefined;
  TwitterAds: undefined;
  SettingsAndPrivacy: undefined;
  HelpCenter: undefined;
};

export type RootDrawerScreenProps<Screen extends keyof RootDrawerParamList> =
  CompositeScreenProps<
    DrawerScreenProps<RootDrawerParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;

//=========================================================================================================
//=========================================  MAIN STACK  ==================================================
//=========================================================================================================
export type MainStackParamList = ExtrasStackParamList & {
  MainBottomTab: NavigatorScreenParams<MainBottomTabParamList> | undefined;
  TweetDetail: undefined;
  CommentAction: undefined;
  SearchTopTab: undefined;
  SearchSettings: undefined;
  SearchAction: undefined;
  NewTweetAction: undefined;
  NotificationSettings: undefined;
  MessageSearchAction: undefined;
  DirectMessageDetail: undefined;
  MessageRequests: undefined;
  MessageSettings: undefined;
  NewMessageAction: undefined;
};

export type MainStackScreenProps<Screen extends keyof MainStackParamList> =
  NativeStackScreenProps<MainStackParamList, Screen>;

//=========================================================================================================
//=========================================  MAIN TAB  ====================================================
//=========================================================================================================
export type MainBottomTabParamList = {
  HomeTopTab: NavigatorScreenParams<HomeTopTabParamList> | undefined;
  Search: undefined;
  Spaces: undefined;
  Notifications: undefined;
  Messages: undefined;
};

export type MainBottomTabScreenProps<Screen extends keyof MainBottomTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<MainBottomTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;

export type MainBottomTabNavigationProp = BottomTabNavigationProp<
  MainBottomTabParamList,
  keyof MainBottomTabParamList
>;

//=========================================================================================================
//=========================================  HOME TOP TAB  ====================================================
//=========================================================================================================
export type HomeTopTabParamList = {
  Home: undefined;
} & Record<string, undefined>;

export type HomeTopTabScreenProps<Screen extends keyof HomeTopTabParamList> =
  CompositeScreenProps<
    MaterialTopTabScreenProps<HomeTopTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;

export type HomeTopTabNavigationProp = MaterialTopTabNavigationProp<
  HomeTopTabParamList,
  keyof HomeTopTabParamList
>;

//=========================================================================================================
//=========================================  HOME TOP TAB  ====================================================
//=========================================================================================================
export type ProfileTabScreenParams = {
  startTopBarScroll?: boolean;
  startScrollTabBar?: boolean;
  onTabBarScrollToTop?: (e: NativeSyntheticEvent<NativeScrollEvent>) => void;
  childScrollEnabled?: boolean;
  childScrollView?: React.MutableRefObject<null>;
  onChildScrollViewBeginDrag?: (e: NativeSyntheticEvent<NativeScrollEvent>) => void;
  onChildScrollViewEndDrag?: (e: NativeSyntheticEvent<NativeScrollEvent>) => void;
  onPressInChildScrollView?: () => void;
  onChildEndReached:(any)=>void

  listKey?: string;
};
export type ProfileTopTabParamList = {
  Tweets: ProfileTabScreenParams;
  TweetsAndReplies: ProfileTabScreenParams;
  Media: ProfileTabScreenParams;
  Likes: ProfileTabScreenParams;
};

export type ProfileTopTabScreenProps<Screen extends keyof ProfileTopTabParamList> =
  CompositeScreenProps<
    MaterialTopTabScreenProps<ProfileTopTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;

export type ProfileTopTabNavigationProp = MaterialTopTabNavigationProp<
  ProfileTopTabParamList,
  keyof ProfileTopTabParamList
>;
