import { useHeaderHeight } from "@react-navigation/elements";
import React, { useCallback, useState } from "react";
import {
  LayoutChangeEvent,
  NativeScrollEvent,
  NativeSyntheticEvent,
  useWindowDimensions,
} from "react-native";
enum SCROLL_DIRECTION {
  UP = "UP",
  DOWN = "DOWN",
}
interface IReturn {
  colorHeader: boolean;
  startTopBarScroll: boolean;
  setTopBarPosition: (e: LayoutChangeEvent) => void;
  handleScroll: (e: NativeSyntheticEvent<NativeScrollEvent>) => void;
  handleTopTabScroll: (e: NativeSyntheticEvent<NativeScrollEvent>) => void;
  onParentEndReached: (args: { distanceFromEnd: number }) => void;
  onChildEndReached: (args: { distanceFromEnd: number }) => void;

  onChildScrollViewEndDrag: (e: NativeSyntheticEvent<NativeScrollEvent>) => void;
}
export const useProfileScroll = (): IReturn => {
  const [topBarPosition, setTopBarPosition] = useState<number>();
  const [verticalContentOffset, setVerticalContentOffset] = useState<number>();
  const [startTopBarScroll, setStartTopBarScroll] = useState<boolean>(false);
  const [colorHeader, setColorHeader] = useState<boolean>(false);
  const headerHeight = useHeaderHeight();

  const _setTopBarPosition = useCallback((e: LayoutChangeEvent) => {
    setTopBarPosition(e.nativeEvent.layout.y);
  }, []);

  const handleScroll = useCallback(
    (e: NativeSyntheticEvent<NativeScrollEvent>) => {
      const { y } = e.nativeEvent.contentOffset;
      const headerTopBarDiff = topBarPosition - headerHeight - y;
      const headerTargetDiff = headerHeight - y;
      const direction: SCROLL_DIRECTION =
        y > 0 ? SCROLL_DIRECTION.DOWN : SCROLL_DIRECTION.UP;

      if (direction === SCROLL_DIRECTION.DOWN) {
        alert("hurray down");
      }

      if (headerTargetDiff <= 1) {
        setColorHeader(true);
      } else {
        setColorHeader(false);
      }
      if (headerTopBarDiff <= 1) {
        setStartTopBarScroll(true);
      } else {
        setStartTopBarScroll(false);
      }
    },
    [topBarPosition, headerHeight]
  );

  const handleTopTabScroll = useCallback(
    (e: NativeSyntheticEvent<NativeScrollEvent>) => {
      const { y } = e.nativeEvent.contentOffset;
      const direction = y > 0 ? "down" : "up";

      console.log({ y });

      if (y > 1) {
        setStartTopBarScroll(true);
      } else {
        setStartTopBarScroll(false);
      }
    },
    [topBarPosition, headerHeight]
  );

  const onParentEndReached = useCallback(({ distanceFromEnd }) => {
    setStartTopBarScroll(true);
  }, []);
  const onChildEndReached = useCallback(({ distanceFromEnd }) => {
    setStartTopBarScroll(false);
  }, []);

  const onChildScrollViewEndDrag = useCallback(
    (e: NativeSyntheticEvent<NativeScrollEvent>) => {
      const { y } = e.nativeEvent.contentOffset;
      const direction: SCROLL_DIRECTION =
        y > verticalContentOffset ? SCROLL_DIRECTION.DOWN : SCROLL_DIRECTION.UP;
      setVerticalContentOffset(y);
      if (direction === SCROLL_DIRECTION.UP && y < 0.5) {
        setStartTopBarScroll(false);
      } else {
        setStartTopBarScroll(true);
      }
    },
    [verticalContentOffset]
  );
  return {
    colorHeader,
    startTopBarScroll,
    setTopBarPosition: _setTopBarPosition,
    handleScroll,
    handleTopTabScroll,
    onParentEndReached,
    onChildScrollViewEndDrag,
    onChildEndReached,
  };
};
