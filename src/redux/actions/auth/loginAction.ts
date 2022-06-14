import { ENDPOINTS } from "../../../api/endpoints";
import { LoginInputs } from "../../../validation/types";
import { AuthActionTypes, AuthStatus } from "../../enums";
import { IAuthAction, LoginResponse } from "../../types";

export const loginAction = (loginPayload: LoginInputs) => {
  return async (dispatch, getState, extraArg) => {
    try {
      const res = await fetch(ENDPOINTS.login, {
        
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginPayload),
      });

      let resData: LoginResponse;
      if (res.ok) {
        resData = await res.json();
        const { token, user } = resData?.data || {};

        return dispatch({
          type: AuthActionTypes.LOGIN,
          payload: {
            token,
            user,
            status: token ? AuthStatus.AUTHENTICATED : AuthStatus.LOGIN,
          },
        } as IAuthAction);
      } else {
        const errors = (await res.json()).errors;

        const newError = new Error("Login was not successful!") as Error & {
          data: unknown;
        };
        newError.data = errors;
        throw newError;
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const fakeLogout = () => {
  return (dispatch, getState, extraArg) => {
    return dispatch({
      type: AuthActionTypes.LOGIN,
      payload: {
        token: null,
        user: null,
        status: AuthStatus.LOGIN,
      },
    } as IAuthAction);
  };
};
