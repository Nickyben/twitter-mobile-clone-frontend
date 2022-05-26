import { plugin } from "twrnc";
import { tintColorPrimary } from "./src/constants/Colors";
import { AddedUtilities, Style } from "twrnc/dist/esm/types";

import { string } from "yup";
import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";
/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line no-undef
module.exports = {
  theme: {
    screens: {
      sm: "380px",
      md: "420px",
      lg: "680px",
      // or maybe name them after devices for `tablet:flex-row`
      tablet: "1024px",
    },
    extend: {
      spacing: {
        518: "518px",
      },
      colors: {
        primary: tintColorPrimary,
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
      addUtilities(utilities);
    }),
  ],
};

const utilities = {
  //}: Record<string, ViewStyle | TextStyle | ImageStyle> = {
  btn: {
    //rounded-full p-3 w-full bg-primary
    padding: 12,
    borderRadius: 999999,
    textTransform: `uppercase`,
    backgroundColor: tintColorPrimary,
    // flex: 1,
    // width: "100%",
  },
  "btn-container-small": {
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  "btn-small": {
    alignSelf: "flex-end",
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  "btn-text": {
    fontWeight: "600",
    fontSize: 20,
  },
  "resize-repeat": {
    resizeMode: `repeat`,
  },
};
