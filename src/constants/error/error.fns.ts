import { HttpStatus } from "http-status";

type StatusCode = keyof HttpStatus;

const getErrorMessage = (statusCode: StatusCode, error: unknown) => {
  if (typeof error === "string") {
    return error;
  } else if (Array.isArray(error)) {
    let msg = "";
    error.forEach((errObj: Error & { msg: string }) => {
      msg += ` ${errObj.message || errObj.msg || errObj.name}`;
    });
    return msg;
  } else {
    const errorObj = error as Error;
    return errorObj.message || errorObj.name;
  }
};
