import { z } from "zod";
import validator from "validator";

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/webp",
];

export const ApplicationSchema = z.object({
    name: z
        .string()
        .trim()
        .min(3, { message: "Name should be at least 3 characters long" })
        .max(100, { message: "Name should be at most 100 characters long" }),
    phone: z.string().refine(validator.isMobilePhone, {
        message: "Please enter a valid phone number",
    }),
});

export const ReviewSchema = z.object({
    name: z
        .string()
        .trim()
        .min(3, { message: "Name should be at least 3 characters long" })
        .max(100, { message: "Name should be at most 100 characters long" }),
    text: z
        .string()
        .trim()
        .min(5, { message: "Review text should be at least 5 characters long" })
        .max(500, {
            message: "Review text should be at most 500 characters long",
        }),
});

export const TutorSchema = z.object({
    name: z
        .string()
        .trim()
        .min(3, { message: "Name should be at least 3 characters long" })
        .max(100, { message: "Name should be at most 100 characters long" }),
    experience: z
        .string()
        .trim()
        .min(5, {
            message: "Experience text should be at least 5 characters long",
        })
        .max(100, {
            message: "Experience text should be at most 500 characters long",
        }),
    about: z
        .string()
        .trim()
        .min(5, {
            message: "About text should be at least 5 characters long",
        })
        .max(500, {
            message: "About text should be at most 500 characters long",
        }),
    photo: z.union([
        z
            .any()
            .refine(
                (file) => file?.size <= MAX_FILE_SIZE,
                "Max image size is 5MB."
            )
            .refine(
                (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
                "Please upload an image file."
            ),
        z.string(),
    ]),
});

export const ScreenshotSchema = z.object({
    photo: z
        .any()
        .refine((file) => file?.size <= MAX_FILE_SIZE, "Max image size is 5MB.")
        .refine(
            (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
            "Please upload an image file."
        ),
});
