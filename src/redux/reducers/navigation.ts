import { NavigationState } from "@react-navigation/native";
import { NavActionTypes } from "../enums";
import { IAppNavigationState, INavAction } from "../types";



const initialState: IAppNavigationState = {
  appNavState: undefined,
};

function navReducer(state = initialState, action: INavAction): IAppNavigationState {
  switch (action.type) {
    case NavActionTypes.UPDATE: {
      return {
        ...state,
        appNavState: action.payload,
      };
    }
    default:
      return state;
  }
}

export default navReducer;
