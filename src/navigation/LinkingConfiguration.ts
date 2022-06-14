/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";

import {
  OnboardingStackParamList,
  RootDrawerParamList,
} from "./types";

export const OnboardingStackNavLinking: LinkingOptions<
  OnboardingStackParamList | RootDrawerParamList
> = {
  prefixes: [Linking.createURL("/")],
  config: {
    screens: {
      GetStarted: "get-started",
      Username: "username",
      CreateAccount: "createAccount",
      VerifyCode: "verify-code",
      Password: "password",
      ProfilePicture: "profile-pic",
      Bio: "bio",
      CustomizeExperience: "customize-experience",
      ConnectAddressBook: "connect-address-book",
      Languages: "languages",
      InterestedIn: "interested-in",
      Suggestions: "suggestions",
      TurnOnNotifications: "turn-on-notifications",
      SuggestedFollows: "suggested-follows",
      Login: "login",
      NotFound: "*",
    },
  },
};
export const RootDrawerNavLinking: LinkingOptions<
  RootDrawerParamList | OnboardingStackParamList
> = {
  prefixes: [Linking.createURL("/")],
  config: {
    screens: {
      MainStack: {
        screens: {
          MainBottomTab: {
            screens:{}
          },
          TweetDetail: '',
          CommentAction:'',
          SearchTopTab: '',
          SearchSettings:'',
          SearchAction: '',
          NewTweetAction:'',
          NotificationSettings:'',
          MessageSearchAction: '',
          DirectMessageDetail: '',
          MessageRequests: '',
          MessageSettings: '',
          NewMessageAction:'',
        },
      },
      Profile: "",
      Lists: "",
      Topics: "",
      Bookmarks: "",
      Moments: "",
      Monetisation: "",
      TwitterForProfessionals: "",
      TwitterAds: "",
      SettingsAndPrivacy: "",
      HelpCenter: "",
    },
  },
};

// export const OnboardingStackNavLinking: LinkingOptions<OnboardingStackParamList> = {
//   prefixes: [Linking.makeUrl("/")],
//   config: {
//     screens: {
//       Root: {
//         screens: {
//           Home: {
//             screens: {
//               HomeScreen: "one",
//             },
//           },
//           Search: {
//             screens: {
//               SearchScreen: "two",
//             },
//           },

//           Spaces: {
//             screens: {
//               SpacesScreen: "one",
//             },
//           },
//           Notifications: {
//             screens: {
//               NotificationsScreen: "two",
//             },
//           },
//           Messages: {
//             screens: {
//               MessagesScreen: "one",
//             },
//           },
//         },
//       },
//       Modal: "modal",
//       NotFound: "*",
//     },
//   },
