export enum AuthStatus {
  LOGIN = "LOGIN",
  SIGNUP = "SIGNUP",
  AUTHENTICATED = "AUTHENTICATED",
  PASSWORD_RESET = "PASSWORD_RESET",
  FORGOT_PASSWORD = "FORGOT_PASSWORD",
  ONBOARDING = "ONBOARDING",
  IDLE = "IDLE",
}

export enum AuthActionTypes {
  LOGOUT = "LOGOUT",
  LOGIN = "LOGIN",
  SIGNUP = "SIGNUP",
}

export enum NavActionTypes {
  UPDATE = "UPDATE",
  RESTORE = "RESTORE",
  CLEAR = "CLEAR",
}

export enum HttpStatus {
  OK = 200,
  CREATED = 201,
  NOT_FOUND = 404,
}
