import { useHeaderHeight } from "@react-navigation/elements";
import React, { useCallback, useRef, useState } from "react";
import {
  LayoutChangeEvent,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Platform,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import { isAndroid } from "../../Config";

interface IReturn {
  parentScrollEnabled: boolean;
  childScrollEnabled: boolean;
  childScrollViewContentOffsetY: number;
  parentScrollView: React.MutableRefObject<null>;
  childScrollView: React.MutableRefObject<null>;
  onChildScrollViewBeginDrag: (e: NativeSyntheticEvent<NativeScrollEvent>) => void;
  onChildScrollViewEndDrag: (e: NativeSyntheticEvent<NativeScrollEvent>) => void;
  onPressInParentScrollView: () => void;
  onPressInChildScrollView: () => void;
}
interface ScrollState {
  parentScrollEnabled: boolean;
  childScrollEnabled: boolean;
  childScrollViewContentOffsetY: number;
}
export const useNestedScroll = (parentScrollView): IReturn => {
  const [scrollState, setScrollState] = useState<ScrollState>({
    parentScrollEnabled: true,
    childScrollEnabled: false,
    childScrollViewContentOffsetY: 0,
  });
  // const parentScrollView = useRef(null);
  const childScrollView = useRef(null);

  const onPressInParentScrollView = useCallback(() => {
    setScrollState((p) => ({
      ...p,
      parentScrollEnabled: true,
    }));
  }, []);
  const onPressInChildScrollView = useCallback(() => {
    setScrollState((p) => ({
      ...p,
      parentScrollEnabled: false,
      childScrollEnabled: true,
    }));
  }, []);

  const onChildScrollViewBeginDrag = useCallback(
    (e: NativeSyntheticEvent<NativeScrollEvent>) => {
      e.persist();

      setScrollState((p) => ({
        ...p,
        childScrollViewContentOffsetY: e.nativeEvent.contentOffset.y,
      }));
    },
    []
  );

  const onChildScrollViewEndDrag = useCallback(
    (e: NativeSyntheticEvent<NativeScrollEvent>) => {
      e.persist();
      if (
        e.nativeEvent.layoutMeasurement.height + e.nativeEvent.contentOffset.y >=
        e.nativeEvent.contentSize.height
      ) {
        parentScrollView.current.scrollToEnd(
          isAndroid ? { duration: 500 } : { animated: true }
        );
      } else if (
        scrollState.childScrollViewContentOffsetY >= e.nativeEvent.contentOffset.y &&
        e.nativeEvent.contentOffset.y < 10
      ) {
        parentScrollView.current.scrollTo(
          isAndroid ? { x: 0, y: 0, duration: 1 } : { x: 0, y: 0, animated: true }
        );
      }
    },
    [scrollState.childScrollViewContentOffsetY, parentScrollView]
  );

  return {
    ...scrollState,
    parentScrollView,
    childScrollView,
    onChildScrollViewBeginDrag,
    onChildScrollViewEndDrag,
    onPressInParentScrollView,
    onPressInChildScrollView,
  };
};
