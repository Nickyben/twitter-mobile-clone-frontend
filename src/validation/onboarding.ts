import * as yup from "yup";
import { CreateAccountInputs, LoginInputs } from "./types";
import validator from "validator";

const phoneOrEmailRegExp = /^(?:\d{10}|\w+@\w+\.\w{2,3})$/;
const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
const usernameRegExp = /^@?(\w){1,15}$/;

export const UsernameValidationSchema = yup.object().shape({
  username: yup
    .string()
    .required("Please, provide your username!")
    .min(5, "Your username cannot be less than 5 characters long!")
    .max(10, "Your username cannot exceed 10 characters!")
    .matches(
      usernameRegExp,
      "Must contain only alphanumeric or underscore characters  with no spaces"
    ),
});

export const CreateAccountValidationSchema = yup.object().shape({
  name: yup
    .string()
    // .required("Please, provide your name!")
    .min(2, "Your name cannot be be less than 2 characters long")
    .max(15, "Your name cannot exceed 15 characters !"),
  phoneOrEmail: yup
    .string()
    // .required("Please, provide a phone number or email address!")
    .matches(phoneOrEmailRegExp, "Phone number or email address is not valid"),
  dateOfBirth: yup.string(),
  // .required("Please, provide your date of birth!"),
} as Record<keyof CreateAccountInputs, never>);

export const PasswordValidationSchema = yup.object().shape({
  password: yup
    .string()
    // .required("Please, provide your password!")
    .min(8, "Your password cannot be less than 8 characters long!")
    .max(15, "Your password cannot exceed 15 characters!")
    .matches(
      passwordRegExp,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
});

export const BioValidationSchema = yup.object().shape({
  bio: yup
    .string()
    // .required("Please, provide your bio!")
    .min(5, "Your bio cannot be less than 5 characters long!")
    .max(150, "Your bio cannot exceed 150 characters!"),
});

export const LoginValidationSchema = yup.object().shape({
  phoneOrEmailOrUsername: yup
    .string()
    .required("Please, provide your phone number or email address or username!")
    .test(
      "phoneOrEmailOrUsername",
      "Must be a valid phone number or email address. Username must contain only alphanumeric or underscore characters  with no spaces",
      function (_value) {
        const value = !_value ? "" : _value;
        const isValidPhoneOrEmail =
          validator.isEmail(value) ||
          (phoneOrEmailRegExp.test(value) && validator.isMobilePhone(value));
        const isValidUsername =
          usernameRegExp.test(value) &&
          validator.isLength(value, { max: 10, min: 5 });

        if (isValidUsername || isValidPhoneOrEmail) {
          return true;
        }
        return false;
      }
    ),

  password: yup
    .string()
    .required("Please, provide your password!")
    .min(8, "Your password cannot be less than 8 characters long!")
    .max(15, "Your password cannot exceed 15 characters!")
    .matches(
      passwordRegExp,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
} as Record<keyof LoginInputs, never>);
