import {
  BaseToast,
  ErrorToast,
  ToastConfig,
  InfoToast,
} from "react-native-toast-message";
import { Text, View } from "../components/Themed";
import tw from "../styles/tailwind/tailwind";

/*
  1. Create the config
*/
export const toastConfig: ToastConfig = {
  /*
    Overwrite 'success' type,
    by modifying the existing `BaseToast` component
  */
  success: (props) => (
    <BaseToast
      {...props}
      style={tw`bg-green-100  border-green-500 toast-style`}
      contentContainerStyle={tw`px-4 `}
      text1Style={tw`text-lg font-semibold`}
      text2Style={tw`text-sm `}
    />
  ),
  /*
    Overwrite 'error' type,
    by modifying the existing `ErrorToast` component
  */
  error: (props) => (
    <ErrorToast
      {...props}
      style={tw`bg-red-100 border-red-500 toast-style`}
      contentContainerStyle={tw`px-4 `}
      text1Style={tw`text-lg font-semibold`}
      text2Style={tw`text-md `}
    />
  ),
  /*
    Or create a completely new type - `tomatoToast`,
    building the layout from scratch.

    I can consume any custom `props` I want.
    They will be passed when calling the `show` method (see below)
  */

  info: (props) => (
    <InfoToast
      {...props}
      style={tw`bg-lightPrimary border-primary toast-style  `}
      contentContainerStyle={tw`px-4 `}
      text1Style={tw`text-lg font-semibold `}
      text2Style={tw`text-md `}
    />
  ),
};
