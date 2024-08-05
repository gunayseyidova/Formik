import * as Yup from "yup";

const passwordRules = /^[a-zA-Z]+$/;

export const basicSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, "Username must be at least 3 characters long")
    .required("Required"),

  lastName: Yup.string()
    .min(3, "Username must be at least 3 characters long")
    .required("Required"),

  email: Yup.string().email("Please enter a valid email").required("Required"),
  password: Yup.string()
    .min(5, "Password must be at least 5 characters long")
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("Required"),
});
