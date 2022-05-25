import { StyleSheetProperties } from "react-native";
import { plugin } from "twrnc";
import { Style } from "twrnc/dist/esm/types";
import { tintColorPrimary } from "./constants/Colors";

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
      addUtilities({
        btn: {
          //rounded-full p-3 w-full bg-primary
          padding: 12,
          borderRadius: 999999,
          textTranform: `uppercase`,
          backgroundColor: tintColorPrimary,
          width: "100%",
        },
        "btn-text": {
          fontWeight: "600",
          fontSize: 20,
        },
        "resize-repeat": {
          resizeMode: `repeat`,
        },
      });
    }),
  ],
};

// module.exports = {
//   screens: {
//     sm: "380px",
//     md: "420px",
//     lg: "680px",
//   },
//
//
// };
