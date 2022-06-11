import { ENDPOINTS } from "../../../api/endpoints";
import { LoginInputs } from "../../../validation/types";
import { AuthActionTypes, AuthStatus } from "../../enums";
import { IAuthAction } from "../../types";

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

      let resData;
      if (res.ok) {
        resData = await res.json();
        console.log({ resData });

        return;
        return dispatch({
          type: AuthActionTypes.LOGIN,
          payload: {
            status: AuthStatus.AUTHENTICATED,
          },
        } as IAuthAction);
      } else {
        const errors = (await res.json()).errors;
        //const errorMessage = getErrorMessage();

        const newError = new Error("Login was not successful!") as Error & {
          data: unknown;
        };
        newError.data = errors;
        throw newError;
      }
    } catch (error) {
      console.log(error.message);
      throw error;
    }
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
