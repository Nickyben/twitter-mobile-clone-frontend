import * as yup from "yup";
import { CreateAccountInputs } from "./types";

const phoneOrEmailRegExp = /^(?:\d{10}|\w+@\w+\.\w{2,3})$/;
const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;

export const UsernameValidationSchema = yup.object().shape({
  username: yup
    .string()
    .required("Please, provide your username!")
    .min(5, "Your username cannot be less than 5 characters long!")
    .max(10, "Your username cannot exceed 10 characters!"),
});

export const CreateAccountValidationSchema = yup.object().shape({
  name: yup
    .string()
    .required("Please, provide your username!")
    .min(2, "Your name cannot be be less than 2 characters long")
    .max(15, "Your username cannot exceed 15 characters !"),
  phoneOrEmail: yup
    .string()
    .required("Please, provide a phone number or email address!")
    .matches(phoneOrEmailRegExp, "Phone number or email address is not valid"),
  dateOfBirth: yup.string().required("Please, provide your date of birth!"),
} as Record<keyof CreateAccountInputs, never>);

export const PasswordValidationSchema = yup.object().shape({
  password: yup
    .string()
    .required("Please, provide your password!")
    .min(8, "Your password cannot be less than 8 characters long!")
    .max(15, "Your password cannot exceed 15 characters!")
    .matches(
      passwordRegExp,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
});
