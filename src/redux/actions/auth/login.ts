import { AuthActionTypes, AuthStatus } from "../../enums";
import { IAuthAction } from "../../types";

export const fakeLogin = () => {
  return (dispatch, getState, extraArg) => {
    return dispatch({
      type: AuthActionTypes.LOGIN,
      payload: {
        status: AuthStatus.AUTHENTICATED,
        
      }

    }as IAuthAction);
  };
};


export const fakeLogout = () => {
  return (dispatch, getState, extraArg) => {
    return dispatch({
      type: AuthActionTypes.LOGIN,
      payload: {
        status: AuthStatus.IDLE,
      },
    } as IAuthAction);
  };
};