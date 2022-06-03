import { NavigationState } from "@react-navigation/native";
import { NavActionTypes } from "../enums";
import { INavAction } from "../types";

export const updateNavState = (state: NavigationState) => {
  return (dispatch, getState, extraArg) => {
    return dispatch({
      type: NavActionTypes.UPDATE,
      payload: state,
    } as INavAction);
  };
};
