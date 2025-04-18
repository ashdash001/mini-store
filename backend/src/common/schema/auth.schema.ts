import { z } from "zod";

export const imageSchema = z.object({
  mimetype: z
    .string()
    .refine(
      (mimetype) =>
        [
          "image/png",
          "image/jpeg",
          "image/jpg",
          "image/svg+xml",
          "image/gif",
        ].includes(mimetype),
      { message: "Invalid image file type" }
    ),
  size: z.number().max(5 * 1024 * 1024, "File size must be less than 5MB"),
  fieldname: z.string().optional(),
  originalname: z.string(),
  destination: z.string(),
  filename: z.string().optional(),
  path: z.string(),
});


export const createUserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(5).max(255),
});


export const loginUserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6 , "invailt Password"),
  userAgent: z.string().optional()
});
