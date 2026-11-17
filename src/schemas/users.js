import { number, object, string } from "yup";

export const UserSchema = object({
  id: number().required(),
  email: string().email().required(),
  fullName: string().required(),
  password: string().required(),
  phone: string().required(),
  role: string().oneOf(['citizen', 'admin']).required(),
  nik: string().nullable(),
  createdAt: number().required()
})

/** 
 * @typedef {import("yup").InferType<typeof UserSchema>} User
*/

export const CreateUserSchema = object({
  email: string().email((i) => `${i.value} not a valid Email`).required('Email required'),
  fullName: string().required("Full name required"),
  password: string().required("Password required").min(8),
  phone: string().required("Phone number required"),
  nik: string().transform(nik => nik === '' ? null : nik).matches(/^\d{16}$/, 'NIK must be 16 digits').nullable()
})

/**
 * @typedef {import("yup").InferType<typeof CreateUserSchema>} CreateUser
 */