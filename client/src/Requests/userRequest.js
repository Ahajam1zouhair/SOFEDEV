import { object, ref, string } from "yup";

// regaiste User
export const userSchemaRegaiste = object().shape({
  name: string().required("Last name is required"),
  email: string().email("Invalid email").required("Email is required"),
  password: string().required("Password is required"),
});

// Login User
export const userSchemaLogin = object().shape({
  email: string().email("Invalid email").required("Email is required"),
  password: string().required("Password is required"),
});
// Update User
export const userSchemUpdate = object().shape({
  name: string().trim().min(3),
  email: string().trim().email(),
});

export const schemaChangePassword = object().shape({
  old_password: string().required("Old password is required"),
  new_password: string().min(6, "New password must be at least 6 characters").required("New password is required"),
  confirm_new_password: string()
    .oneOf([ref('new_password'), null], "Passwords must match")
    .required("Confirm new password is required"),
});
