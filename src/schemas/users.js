import { array, number, object, string } from "yup";

export const ALERT_OPTIONS = {
  "STATUS_UPDATE": "status-update",
  "URGENT_SMS": "urgent-sms",
  "WEEKLY_DIGEST": "weekly-digest"
}

export const UserSchema = object({
  id: number().required(),
  email: string().lowercase().email().required(),
  fullName: string().required(),
  password: string().required(),
  phone: string().required(),
  role: string().oneOf(['citizen', 'admin']).required(),
  nik: string().nullable(),
  alerts: array().of(string().oneOf(Object.values(ALERT_OPTIONS))).default([]),
  createdAt: number().required()
})

/** 
 * @typedef {import("yup").InferType<typeof UserSchema>} User
*/

export const CreateUserSchema = object({
  email: string().lowercase().email((i) => `${i.value} not a valid Email`).required('Email required'),
  fullName: string().required("Full name required"),
  password: string().required("Password required").min(8),
  phone: string()
    .transform((v) => (v ? v.replace(/[\s-]/g, '') : null))
    .matches(/^(\+62|62|0)?8\d{8,11}$/, "Not a valid Indonesian phone number")
    .required("Phone number required"),
  nik: string().transform(nik => nik === '' ? null : nik).matches(/^\d{16}$/, 'NIK must be 16 digits').nullable()
})

/**
 * @typedef {import("yup").InferType<typeof CreateUserSchema>} CreateUser
 */

export const UpdateProfileSchema = CreateUserSchema.pick(['email', 'fullName', 'nik', 'phone'])
export const UpdateAlertsSchema = UserSchema.pick(['alerts'])