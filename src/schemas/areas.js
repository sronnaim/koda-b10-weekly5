import { array, object, string } from "yup";

/**
 * @typedef {import("yup").InferType<AreaSchema>} Area
 */

export const AreaSchema = object({
  id: string().required(),
  label: string().required(),
  places: array().of(PlaceSchema)
})

/**
 * @typedef {import("yup").InferType<PlaceSchema>} Place
 */

export const PlaceSchema = object({
  label: string().required(),
  address: string().required()
})