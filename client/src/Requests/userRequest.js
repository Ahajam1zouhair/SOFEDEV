import { object, string } from "yup";

// regaiste doctor
export const userSchemaRegaiste = object().shape({
  name: string().required("Last name is required"),
  email: string().email("Invalid email").required("Email is required"),
  password: string().required("Password is required"),
});


// Login doctor
export const userSchemaLogin = object().shape({
  email: string().email("Invalid email").required("Email is required"),
  password: string().required("Password is required"),
});
