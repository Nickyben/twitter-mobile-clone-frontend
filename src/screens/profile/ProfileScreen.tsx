import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { HeaderBackButton, useHeaderHeight } from "@react-navigation/elements";
import {
  Fragment,
  LegacyRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { LayoutChangeEvent, Animated, LayoutRectangle } from "react-native";
import { Button } from "react-native-elements";
import ProfileTopContent from "../../components/profile/ProfileTopContent";
import { isAndroid } from "../../../Config";
import { Text, View } from "../../components/Themed";
import Colors, { tintColorDark, tintColorPrimary } from "../../constants/Colors";
import { useAppDispatch } from "../../hooks/redux";
import { RootDrawerScreenProps } from "../../navigation/types";
import tw from "../../styles/tailwind/tailwind";
import { ProfileTopTab } from "../../navigation/Tabs/ProfileTopTab";

export default function ProfileScreen({
  navigation: { setOptions, goBack, canGoBack },
}: RootDrawerScreenProps<"Profile">) {
  const dispatch = useAppDispatch();
  const headerHeight = useHeaderHeight();
  const [topContentLayout, setTopContentLayout] = useState<LayoutRectangle>({
    height: 0,
    width: 0,
    x: 0,
    y: 0,
  });
  const scrollY = useRef(new Animated.Value(0)).current;
  const scrollY2 = useRef(new Animated.Value(0)).current;

  const animateFlatListScroll = Animated.event(
    [
      {
        nativeEvent: {
          contentOffset: {
            y: scrollY,
          },
        },
      },
    ],
    { useNativeDriver: true }
  );

  const inputRange = [-1, 0, headerHeight*0.5, headerHeight-1, headerHeight + 1];
  const outputRange = [1, 1,0.75, 0.5, 0.5];

  const scale = scrollY.interpolate({
    inputRange,
    outputRange,
  });

  const headerOpacity = scrollY.interpolate({
    inputRange,
    outputRange: [0, 0, 0.75, 1, 1],
  });

  const onTopContentLayout = useCallback(
    ({ nativeEvent: { layout } }: LayoutChangeEvent) => {
      setTopContentLayout(layout);
    },
    []
  );

  

  useEffect(() => {
    setOptions({
      headerTitleStyle: tw`hidden` as any,
      headerTransparent: true,
      headerBackgroundContainerStyle: {
        ...tw`bg-primary`,
        opacity: headerOpacity,
      },
      headerTintColor: tintColorDark,
      headerLeft: () => {
        return (
          <HeaderBackButton
            onPress={() => canGoBack() && goBack()}
            backImage={() => (
              <Ionicons
                name={`${isAndroid ? "arrow-back" : "chevron-back"}`}
                color={tintColorDark}
                size={22}
                style={tw`rounded-full p-2 bg-primary-transparent`}
              />
            )}
            style={tw``}
            tintColor={tintColorDark}
          />
        );
      },
      headerRight: () => {
        return (
          <View
            style={tw`flex-row  self-start w-full justify-end pr-4 items-center bg-transparent`}>
            <Ionicons
              name="search"
              color={tintColorDark}
              size={22}
              style={tw`ml-6 rounded-full p-2 bg-primary-transparent`}
            />
            <SimpleLineIcons
              name="options-vertical"
              color={tintColorDark}
              size={22}
              style={tw`ml-6 rounded-full p-2 bg-primary-transparent`}
            />
          </View>
        );
      },
    });
  }, [setOptions, headerOpacity, canGoBack, goBack]);

  return (
    <Animated.View style={[tw`flex-1 bg-transparent `]}>
      <ProfileTopContent
        scaleImage={scale}
        {...{ onTopContentLayout, topContentLayout, scrollY2, scrollY }}
      />

      <ProfileTopTab
        {...{
          scrollY,
          scrollY2,
          animateFlatListScroll,
          topContentLayout,
        }}
      />

      <Button
        title={<Ionicons name="add" size={35} color={tintColorDark} style={tw``} />}
        buttonStyle={[tw`p-4 rounded-full`]}
        containerStyle={tw` mt-4 rounded-full ml-auto absolute bottom-4 right-4  z-100`}
        titleStyle={tw`btn-text text-md text-gray-800 `}
        onPress={() => alert("Not yet ready!")}
      />
    </Animated.View>
  );
}
