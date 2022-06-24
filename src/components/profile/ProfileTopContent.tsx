import { LegacyRef, useCallback, useRef, useState } from "react";
import {
  Alert,
  Animated,
  GestureResponderEvent,
  LayoutChangeEvent,
  LayoutRectangle,
  Pressable,
  ScrollView,
} from "react-native";
import { Avatar, Button, Image } from "react-native-elements";
import { Text, TextProps, View } from "../Themed";
import tw from "../../styles/tailwind/tailwind";
import { useHeaderHeight } from "@react-navigation/elements";
import Config from "../../../Config";
import { tintColorPrimary } from "../../constants/Colors";
import { useAppSelector } from "../../hooks/redux";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { formatISO, format } from "date-fns";

export default function ProfileTopContent({
  userId,
  scaleImage,
  scrollY,
  scrollY2,
  onTopContentLayout,
  topContentLayout,
}: {
  userId?: string;
  scrollY: Animated.Value;
  scrollY2: Animated.Value;
  onTopContentLayout: (e: LayoutChangeEvent) => void;
  scaleImage: Animated.AnimatedInterpolation;
  topContentLayout: LayoutRectangle;
}) {
  const topContentScrollY = useRef(scrollY).current;
  const [touchPosition, setTouchPosition] = useState<number>(null);
  const [lastScrollValue, setLastScrollValue] = useState<number>(0);

  const headerHeight = useHeaderHeight();
  const user = useAppSelector((state) => state.authReducer.user);

  const {
    avatarUrl,
    fullName,
    username,
    bio,
    location,
    websiteUrl,
    dateOfBirth,
    joined,
    followersCount,
    followingCount,
    username: isVerified,
  } = user || {};
  const headerUrl = null;
  const scrollViewRef: LegacyRef<ScrollView> = useRef(null);

  const onTouchMove = useCallback(
    (e: GestureResponderEvent) => {
      let newScrollY = 0;

      if (!touchPosition) {
        return setTouchPosition((p) => e.nativeEvent.pageY);
      } else {
        newScrollY = touchPosition - e.nativeEvent.pageY;
        if (newScrollY >= 0 && touchPosition > 0) {
          scrollY.setValue(newScrollY);
          scrollY2.setValue(newScrollY);
        } else {
          return;
        }
      }
    },
    [scrollY, scrollY2, touchPosition]
  );

  return (
    <Animated.ScrollView
      ref={scrollViewRef}
      onLayout={onTopContentLayout}
      // onScroll={() => alert("hey")}

      onTouchMove={onTouchMove}
      style={[
        tw`pb-2 absolute  z-10  bg-white`,
        { transform: [{ translateY: Animated.divide(scrollY, -1) }] },
      ]}>
      <Animated.View style={tw``}>
        <Animated.View
          style={{
            ...tw`  py-5 bg-primary h-[${headerHeight * 2}px]   `,
          }}>
          {headerUrl ? (
            <Image
              source={{ uri: `${Config.BASE_URL}/${headerUrl}` }}
              height={headerHeight * 2}
            />
          ) : null}
        </Animated.View>

        <Animated.View style={tw`px-4`}>
          <Animated.View
            style={{
              ...tw` flex-row items-end justify-between -mt-[${
                headerHeight / 2
              }px]  `,
            }}>
            <Animated.Image
              width={headerHeight}
              height={headerHeight}
              style={{
                width: headerHeight,
                height: headerHeight,
                ...tw`border-4 border-white rounded-full  bottom-0`,
                transform: [
                  { scale: scaleImage },
                  { translateY: Animated.divide(scrollY, 2.5) },
                ],
              }}
              source={
                avatarUrl
                  ? { uri: `${Config.BASE_URL}/${avatarUrl}` }
                  : require("../../../assets/images/user.png")
              }
            />
            <Button
              title="Edit profile"
              buttonStyle={tw` btn btn-small bg-transparent border border-gray-300`}
              containerStyle={tw` mt-[${
                headerHeight / 2 + 10
              }px]  rounded-full ml-auto`}
              titleStyle={tw`btn-text text-md text-gray-800 `}
              onPress={() => Alert.alert("Not yet ready!")}
            />
          </Animated.View>
          <View style={tw`flex-row items-center `} transparent>
            <Text style={tw`text-xl text-gray-900 font-bold `}>{fullName}</Text>
            {isVerified && (
              <MaterialIcons
                name={`verified`}
                size={20}
                color={tintColorPrimary}
                style={tw`ml-2 `}
              />
            )}
          </View>
          <Text style={tw`text-sm text-gray-400 font-semibold `}>@{username}</Text>
          <Text
            style={tw`text-sm text-gray-700  mt-2 `}
            onPressLink={(link) => {
              Alert.alert(link);
            }}>
            {bio}
          </Text>
          <View style={tw`flex-row mt-1 flex-wrap  `} transparent>
            {[location, websiteUrl, dateOfBirth, joined].map((extra, index) => {
              if (!extra) {
                return null;
              }
              return (
                <ProfileExtra key={index} style={tw``}>
                  {Date.parse(extra)
                    ? index === 2
                      ? `Born ${format(new Date(extra), "d MMMMMM ")}`
                      : `Joined ${format(new Date(extra), "MMMMMM Y")}`
                    : extra}
                </ProfileExtra>
              );
            })}
          </View>
          <View style={tw` flex-row mt-2  ml-2  self-start`} transparent>
            <Text style={tw`text-sm text-gray-700 font-bold `}>
              {followingCount}{" "}
              <Text style={tw`text-sm text-gray-500 font-normal `}> Following</Text>
            </Text>
            <Text style={tw`text-sm text-gray-700 font-bold ml-3`}>
              {followersCount}{" "}
              <Text style={tw`text-sm text-gray-500 font-normal `}> Followers</Text>
            </Text>
          </View>
        </Animated.View>
      </Animated.View>
    </Animated.ScrollView>
  );
}

const ProfileExtra = ({
  iconName,
  children,
  Icon: _icon,
  ...otherProps
}: {
  iconName?: never;
  children: React.ReactNode;
  Icon?: any;
} & TextProps) => {
  const Icon = _icon || Ionicons;
  return (
    <View style={tw`flex-row items-center mr-2 mt-1`} transparent>
      <Icon
        name={iconName || "location"}
        size={16}
        color={tw`text-gray-400`.color}
        style={tw` mr-2 `}
      />

      <Text
        style={tw`text-sm text-gray-400  flex-1`}
        {...otherProps}
        onPressLink={(link) => {
          Alert.alert(link);
        }}>
        {children}
      </Text>
    </View>
  );
};
