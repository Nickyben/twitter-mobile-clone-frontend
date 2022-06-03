import { AuthActionTypes, AuthStatus } from "../enums";
import { IAuthState } from "../types";
import { IAuthAction } from './../types';

const initialState: IAuthState = {
  token: null, 
  token_expires: null,
  error: null,
  user: null,
  status:AuthStatus.IDLE,
  loading: false,
};

function authReducer(state = initialState, action:IAuthAction): IAuthState {
  switch (action.type) {
    case AuthActionTypes.LOGIN: {
      return {
        ...state,
        ...action.payload
      }
    }
    default:
      return state;
  }
}

export default authReducer;
