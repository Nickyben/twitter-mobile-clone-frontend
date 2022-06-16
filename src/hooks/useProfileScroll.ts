import { useHeaderHeight } from "@react-navigation/elements";
import React, { useCallback, useState } from "react";
import {
  LayoutChangeEvent,
  NativeScrollEvent,
  NativeSyntheticEvent,
  useWindowDimensions,
} from "react-native";

interface IReturn {
  colorHeader: boolean;
  startTopBarScroll: boolean;
  setTopBarPosition: (e: LayoutChangeEvent) => void;
  handleScroll: (e: NativeSyntheticEvent<NativeScrollEvent>) => void;
  handleTopTabScroll: (e: NativeSyntheticEvent<NativeScrollEvent>) => void;

}
export const useProfileScroll = (): IReturn => {
  const [topBarPosition, setTopBarPosition] = useState<number>();
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
    
      console.log({y});

    
      if (y>1) {
        setStartTopBarScroll(true);
      } else {
        setStartTopBarScroll(false);
      }
    },
    [topBarPosition, headerHeight]
  );
  return {
    colorHeader,
    startTopBarScroll,
    setTopBarPosition: _setTopBarPosition,
    handleScroll,
    handleTopTabScroll
  };
};
