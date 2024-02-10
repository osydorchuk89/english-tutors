import { z } from "zod";
import validator from "validator";

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
