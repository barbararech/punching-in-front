import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
const urlRules =
  /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
// RegEX : Minimum 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit

export const signUpSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email required"),

  password: yup
    .string()
    .matches(passwordRules, {
      message:
        "Minimum 8 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit",
    })
    .required("Password required"),

  username: yup
    .string()
    .min(3, "Minimum 3 characters")
    .required("Username required"),
});

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email required"),

  password: yup.string().required("Password required"),
});
