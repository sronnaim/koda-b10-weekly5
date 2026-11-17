import { object, string } from "yup";

export const LoginSchema = object({
  email: string().email((v) => `${v.value} is not a valid Email`).required('Email is required'),
  password: string().required('Password is required'),
})