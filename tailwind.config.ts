import tw, { plugin } from "twrnc";
import { lightPrimary, tintColorPrimary } from "./src/constants/Colors";
import { ColorValue, ImageStyle, TextStyle, ViewStyle } from "react-native";
import { AddedUtilities } from "twrnc/dist/esm/types";

/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line no-undef
const extraUtilities: Record<string, ViewStyle | TextStyle | ImageStyle> = {
  btn: {
    //rounded-full p-3 w-full bg-primary
    padding: 12,
    borderRadius: 999999,
    textTransform: `uppercase`,
    backgroundColor: tintColorPrimary,
    // flex: 1,
    // width: "100%",
  },
  "btn-small": {
    alignSelf: "flex-end",
    paddingVertical: 5,
    paddingHorizontal: 18,
  },
  "btn-container": {
    ...tw`mt-2 ml-3 rounded-full`,
  },
  "btn-container-small": {
    // mt-6   py-2 border-t border-gray-300
    marginTop: 24,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: tw`border-gray-300`.borderColor as ColorValue,
    paddingHorizontal: 20,
  },
  "btn-container-big": {
    // mt-6   py-2 border-t border-gray-300
    marginTop: 24,
    paddingVertical: 14,
    paddingBottom: 25,
    paddingHorizontal: 26,
  },

  "btn-text": {
    fontWeight: "600",
    fontSize: 18,
  },
  "resize-repeat": {
    resizeMode: `repeat`,
  },
  "text-input-primary": {
    // border- b p- 3 mb-1 border - gray - 500

    fontSize: tw`text-xl`.fontSize as number,
    borderBottomWidth: 0.5,
    borderColor: tw`border-gray-700`.borderColor as ColorValue,
    padding: 12,
    marginBottom: tw`mb-1`.marginBottom as number,
    marginTop: tw`mt-3`.marginTop as number,
  },
  "text-input-round": {
    fontSize: 15,
    borderWidth:1/5,
    ...tw`bg-gray-100 flex-1 rounded-full border-gray-300 p-1 px-4  `,
  },
  "text-md": {
    fontSize: 16,
  },
  "toast-style": {
    borderLeftWidth: 1 / 2,
    borderWidth: 1 / 2,
    borderColor: tintColorPrimary,
    ...tw`w-14/15    h-17`,
  },
  "profile-add-icon": {
    ...tw`bg-white absolute absolute -bottom-3 
            right-0 rounded-full p-5 text-center
             border border-gray-300`,
  },
};

module.exports = {
  theme: {
    screens: {
      sm: "380px",
      md: "420px",
      lg: "680px",
      // or maybe name them after devices for `tablet:flex-row`
      tablet: "1024px",
    },
    borderWidth: {
      DEFAULT: "1px",
      "0": "0",
      "1": "0.5px",
      "2": "2px",
      "3": "3px",
      "4": "4px",
      "6": "6px",
      "8": "8px",
    },
    extend: {
      spacing: {
        518: "518px",
      },
      colors: {
        primary: tintColorPrimary,
        lightPrimary: lightPrimary,
        disabled: "#ff0",
        "gray-black": "#010101",
        "grey-black": "#010101",
        "sonic-silver": "#747474",
        // success: "#2D9CDB",
        // info: "#2D9CDB",
      },
    },
    variants: {
      extend: {},
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities(extraUtilities as AddedUtilities);
    }),
  ],
};
