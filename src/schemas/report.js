import { boolean, object, string } from 'yup'

export const CATEGORY_IDS = ['cat-1', 'cat-2', 'cat-3', 'cat-4', 'cat-5', 'cat-6', 'cat-7']
export const AREA_IDS = ['a1', 'a2', 'a3', 'a4', 'a5', 'a6']

const PHONE = /^(\+62|62|0)8\d{8,11}$/

// const evidenceFile = mixed()
//   .test('type', 'Only image, audio or video files', (f) =>
//     !!f && /^(image|audio|video)\//.test(f.type))
//   .test('size', `Each file must be under ${MAX_FILE_MB} MB`, (f) =>
//     !!f && f.size <= MAX_FILE_MB * 1024 * 1024)

export const CreateReportSchema = object({
  cat: string()
    .oneOf(CATEGORY_IDS, 'Select a category')
    .required('Select a category'),

  area: string().oneOf(AREA_IDS, 'Select an area').required('Select an area'),
  address: string().trim().min(5, 'Be more specific').required('Address or landmark required'),

  title: string().trim().min(5, 'Title too short').max(100, 'Max 100 characters').required('Title required'),
  details: string()
    .trim()
    .min(15, 'At least 15 characters')
    .max(100, 'Max 100 characters')
    .required('Details required'),
  asAnon: boolean().default(false),
  name: string().trim().min(2, 'Name too short').required('Name required'),
  email: string()
    .trim()
    .lowercase()
    .email('Not a valid email')
    .required('Email required'),
  phone: string()
    .transform((v) => (v ? v.replace(/[\s-]/g, '') : null))
    .matches(PHONE, { message: 'Not a valid Indonesian number', excludeEmptyString: true })
    .nullable()
    .when('alertSms', {
      is: true,
      then: (s) => s.required('Phone required for SMS alerts'),
    }),
  alertEmail: boolean().default(false),
  alertSms: boolean().default(false),
  confirmation: boolean().isTrue('You must confirm to submit').required('You must confirm to submit'),
})

/** @typedef {import('yup').InferType<typeof CreateReportSchema>} CreateReport */

// fields per step, for trigger(); order matches the form
export const STEP_FIELDS = [
  ['cat'],
  ['area', 'address'],
  [],
  ['title', 'details', 'asAnon', 'name', 'email', 'phone', 'alertEmail', 'alertSms', 'confirmation'],
]