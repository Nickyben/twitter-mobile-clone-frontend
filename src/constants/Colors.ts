export const tintColorLight = "#000";
export const tintColorDark = "#fff";
export const tintColorPrimary = "#1DA1F2";
export const lightPrimary = "#f5ffff";
export const spacesLinearGradient: Array<string> = [
  "#5d81ff",
  "#7d81ff",
  "#9d81ff",
  "#bd81ff",
].reverse();

export default {
  light: {
    text: "#000",
    background: "#fff",
    tint: tintColorLight,
    tabIconDefault: "#ccc",
    dark: "#333",
    lightGray: "#f5f5f5",
    gray: "#ccc",
    tabIconSelected: tintColorLight,
    primary: tintColorPrimary,
    transparent: "transparent",
  },
  dark: {
    text: "#fff",
    background: "#000",
    tint: tintColorDark,
    tabIconDefault: "#ccc",
    dark: "#ccc",
    lightGray: "#0a0a0a",
    gray: "#333",
    tabIconSelected: tintColorDark,
    primary: tintColorDark,
    transparent: "transparent",
  },
};
