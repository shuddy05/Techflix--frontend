import * as yup from "yup";

export const registerSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Can't be empty"),
  password: yup.string().required("Can't be empty"),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Can't be empty"),
});

export const loginSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Can't be empty"),
  password: yup.string().required("Can't be empty"),
});
