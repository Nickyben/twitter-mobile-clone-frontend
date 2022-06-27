import React, { useRef } from "react";

import { Animated, NativeScrollEvent, NativeSyntheticEvent } from "react-native";

interface IReturn {
  flatListRef: React.MutableRefObject<any>;
  handleScroll: (...args: any[]) => void;
  // handleSnapOnMomentumEnd: (e: NativeSyntheticEvent<NativeScrollEvent>) => void;
  translateY: Animated.AnimatedInterpolation;
}
interface IParams {
  headerHeight: number;
}
export const getCloser = (value: number, checkOne: number, checkTwo: number) =>
  Math.abs(value - checkOne) < Math.abs(value - checkTwo) ? checkOne : checkTwo;

export const useCollapsStickyHeader = ({ headerHeight }: IParams): IReturn => {
  const flatListRef = useRef(null);
  // const translateYNumber = useRef();
  const scrollY = useRef(new Animated.Value(0));
  const scrollYClamped = Animated.diffClamp(scrollY.current, 0, headerHeight);

  const translateY = scrollYClamped.interpolate({
    inputRange: [0, headerHeight],
    outputRange: [0, -(headerHeight )],
  });

  // translateY.addListener(({ value }) => {
  //   translateYNumber.current = value;
  // });

  const handleScroll = Animated.event(
    [
      {
        nativeEvent: {
          contentOffset: { y: scrollY.current },
        },
      },
    ],
    {
      useNativeDriver: true,
    }
  );

  // const handleSnapOnMomentumEnd = ({
  //   nativeEvent,
  // }: NativeSyntheticEvent<NativeScrollEvent>) => {
  //   const offsetY = nativeEvent.contentOffset.y;
  //   if (
  //     !(
  //       translateYNumber.current === 0 ||
  //       translateYNumber.current === -headerHeight 
  //     )
  //   ) {
  //     if (flatListRef.current) {
  //       flatListRef.current.scrollToOffset({
  //         offset:
  //           getCloser(translateYNumber.current, -headerHeight , 0) ===
  //           -headerHeight 
  //             ? offsetY + headerHeight 
  //             : offsetY - headerHeight ,
  //       });
  //     }
  //   }
  // };

  return {
    flatListRef,
    handleScroll,
    // handleSnapOnMomentumEnd,
    translateY,
  };
};
