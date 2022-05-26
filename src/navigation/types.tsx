/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { DrawerScreenProps } from "@react-navigation/drawer";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace ReactNavigation {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface RootParamList extends RootStackParamList {}
  }
}

//STACKS
export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

//TABS
export type RootTabParamList = {
  Home: undefined;
  Search: undefined;
  Spaces: undefined;
  Notifications: undefined;
  Messages: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;

//=========================================================================================================
//=========================================================================================================
//=========================================    APP      ===================================================
//=========================================  STRUCTURE  ===================================================
//=========================================================================================================
//=========================================================================================================
export type Extras = {
  Notfound: undefined;
};
//=========================================================================================================
//=========================================  ONBOARDING  ==================================================
//=========================================================================================================
export type OnboardingStackParamList = Extras & {
  GetStarted: undefined;
  Username: undefined;
  CreateAccount: undefined;
  VerifyCode: undefined;
  Password: undefined;
  ProfilePicture: undefined;
  Bio: undefined;
  CustomizeExperience: undefined;
  Languages: undefined;
  InterestedIn: undefined;
  Suggestions: undefined;
  TurnOnNotifications: undefined;
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
export type MainStackParamList = {
  MainTab: NavigatorScreenParams<BottomTabParamList> | undefined;
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
export type BottomTabParamList = {
  Home: undefined;
  Search: undefined;
  Spaces: undefined;
  Notifications: undefined;
  Messages: undefined;
};

export type MainTabScreenProps<Screen extends keyof BottomTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<BottomTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;
