import { LuBuilding, LuDroplet, LuSun, LuTrash2, LuTriangleAlert, LuVolume2 } from 'react-icons/lu'
import { boolean, number, object, string } from 'yup'

export const REPORT_CATEGORIES = {
  'cat-1': {
    label: "Roads & Transit",
    Icon: LuTriangleAlert,
    sla: '48h',
    short: 'Pothole / Sidewalk (Trotoar)',
    long: 'Potholes, broken sidewalk slabs, damaged drainage grates'
  },
  'cat-2': {
    label: "Water & Sewage",
    Icon: LuDroplet,
    sla: '24h',
    short: 'Water Burst / Pipa Bocor',
    long: 'Pipeline bursts, flooding tap leaks, dry taps'
  },
  'cat-3': {
    label: "Street Lighting",
    Icon: LuSun,
    sla: '72h',
    short: 'Dark Street / PJU Padam',
    long: 'Dark street lamps (PJU), damaged base poles, broken traffic signals'
  },
  'cat-4': {
    label: "Sanitation & Waste",
    Icon: LuTrash2,
    sla: '36h',
    short: 'Trash Pile / Sampah Liar',
    long: 'Illegal dump spots in alleys, overflowing TPS bins, river refuse'
  },
  'cat-5': {
    label: "Public Parks & Trees",
    Icon: LuTrash2,
    sla: '48h',
    short: 'Hazardous Tree / Rawan Tumbang',
    long: 'Falling branches (pohon rawan tumbang), RPTRA playground hazards'
  },
  'cat-6': {
    label: "Noise & Disturbance",
    Icon: LuVolume2,
    sla: '48h',
    short: 'Late-night Noise / Ketertiban',
    long: 'Nocturnal construction past 22:00 WIB, sidewalk encroachment'
  },
  'cat-7': {
    label: "Building & Zoning",
    Icon: LuBuilding,
    sla: '72h',
    short: 'Unsafe Construction / Bangunan',
    long: 'Unsafe scaffolding, structural hazards, building boundary violations'
  }
}

export const REPORT_CATEGORY_IDS = Object.entries(REPORT_CATEGORIES).map(([key]) => key)

export const AREA_IDS = ['a1', 'a2', 'a3', 'a4', 'a5', 'a6']
export const STATUSES = ['submitted', 'received', 'in-review', 'assigned', 'awaiting-info', 'resolved', 'closed']
const PHONE = /^(\+62|62|0)8\d{8,11}$/

export const ReportSchema = object({
  id: string().required(),
  status: string().oneOf(STATUSES).default('submitted'),
  
  cat: string()
    .oneOf(REPORT_CATEGORY_IDS, 'Select a category')
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

  createdAt: number().required(),
  upvotes: number().default(0),
  authorId: string().required(),
})

/**
 * @typedef {import('yup').InferType<typeof ReportSchema>} Report
 */

export const CreateReportSchema = ReportSchema.pick(['cat', 'area', 'address', 'title', 'details', 'asAnon', 'name', 'email', 'phone', 'alertEmail', 'alertSms', 'confirmation'])

/** @type {{ [K in keyof import("yup").InferType<typeof CreateReportSchema>]: K }} */
export const REPORT_FIELDS = Object.fromEntries(
  Object.keys(CreateReportSchema.fields).map((key) => [key, key])
)
