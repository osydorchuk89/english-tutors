import { z } from "zod";
import validator from "validator";

const MAX_FILE_SIZE = 4500000;
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
        .min(3, { message: "Ім'я не може бути коротшим, ніж 3 символи" })
        .max(100, { message: "Ім'я не може бути довшим, ніж 100 символів" }),
    phone: z.string().refine(validator.isMobilePhone, {
        message: "Будь ласка, введіть дійсний номер телефону",
    }),
});

export const ReviewSchema = z.object({
    name: z
        .string()
        .trim()
        .min(3, { message: "Ім'я не може бути коротшим, ніж 3 символи" })
        .max(100, { message: "Ім'я не може бути довшим, ніж 100 символів" }),
    text: z
        .string()
        .trim()
        .min(10, {
            message: "Текст відгуку не може бути коротшим, ніж 10 символів",
        })
        .max(500, {
            message: "Текст відгуку не може бути довшим, ніж 500 символів",
        }),
});

export const TutorSchema = z.object({
    name: z
        .string()
        .trim()
        .min(3, { message: "Ім'я не може бути коротшим, ніж 3 символи" })
        .max(100, { message: "Ім'я не може бути довшим, ніж 100 символів" }),
    experience: z
        .string()
        .trim()
        .min(5, {
            message: "Текст не може бути коротшим, ніж 5 символів",
        })
        .max(100, {
            message: "Текст не може бути довшим, ніж 100 символів",
        }),
    about: z
        .string()
        .trim()
        .min(10, {
            message: "Текст не може бути коротшим, ніж 10 символів",
        })
        .max(500, {
            message: "Текст не може бути довшим, ніж 500 символів",
        }),
    photo: z.union([
        z
            .any()
            .refine(
                (file) => file?.size <= MAX_FILE_SIZE,
                "Максимальний розмір файлу - 5MB"
            )
            .refine(
                (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
                "Будь ласка, завантажте зображення"
            ),
        z.string(),
    ]),
});

export const ScreenshotSchema = z.object({
    photo: z
        .any()
        .refine(
            (file) => file?.size <= MAX_FILE_SIZE,
            "Максимальний розмір файлу - 4.5MB"
        )
        .refine(
            (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
            "Будь ласка, завантажте зображення"
        ),
});
