/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */
import validator from "validator";
import { Text as DefaultText, View as DefaultView } from "react-native";

import Colors, { tintColorPrimary } from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme();
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps &
  DefaultText["props"] & { onPressLink?:(linkText: string) => void };
export type ViewProps = ThemeProps &
  DefaultView["props"] & { transparent?: boolean };

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, onPressLink, children, ...otherProps } =
    props;
  const color = useThemeColor(
    { light: lightColor || "#222", dark: darkColor || "ddd" },
    "text"
  );
  const childIsString = typeof children === "string";

  if (childIsString) {
    const texts = children.trim().split(" ");
    return (
      <DefaultText style={[{ color }, style]} {...otherProps}>
        {texts.map((text, index) => {
          if (
            text.startsWith("#") ||
            text.startsWith("@") ||
            validator.isURL(text)
          ) {
            return (
              <DefaultText
                key={index}
                style={[{ color: tintColorPrimary }]}
                onPress={() => onPressLink(text)}>
                {text}{" "}
              </DefaultText>
            );
          }
          return index === texts.length - 1 ? text : text + " ";
        })}
      </DefaultText>
    );
  }
  return (
    <DefaultText style={[{ color }, style]} {...otherProps}>
      {children}
    </DefaultText>
  );
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, transparent, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  return (
    <DefaultView
      style={[
        { backgroundColor: transparent ? "transparent" : backgroundColor },
        style,
      ]}
      {...otherProps}
    />
  );
}
