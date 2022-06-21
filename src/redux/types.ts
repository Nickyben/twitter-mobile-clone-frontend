import { NavigationState } from "@react-navigation/native";
import { IUser } from "../models/types/user";
import { AuthStatus, NavActionTypes } from "./enums";


export interface IAuthState {
  token: string;
  tokenExpires: number;
  status: AuthStatus;
  loading: boolean;
  user?: Partial<IUser>;
  error: string;
}

export interface IAuthAction {
  type: string;
  payload: Partial<IAuthState>;
}

export interface IAppNavigationState {
  appNavState: NavigationState;
}

export interface INavAction {
  type: NavActionTypes;
  payload: NavigationState;
}

export interface LoginResponse {
  message: string;
  data: {
    userId: string;
    user?: any;
    token: string;
  };
}