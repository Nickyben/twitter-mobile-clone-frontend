export type ModifiedLocalError = Error & {
  data: any;
};

export type ErrorElement<T> = {
  message?: T;
  msg?: T;
  location?: T;
  value?: T;
  param?: T;
};

export type ScreenError = {
  message: string;
  data: ErrorElement<string> | Array<ErrorElement<string>>;
};
