export type CreateAccountInputs = {
  name: string;
  phoneOrEmail: string;
  dateOfBirth: string;
};

export type LoginInputs = {
  phoneOrEmailOrUsername: string;
  password: string;
};
