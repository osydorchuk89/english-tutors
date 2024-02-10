"use server";

import { ApplicationSchema, ReviewSchema } from "./schemas";
import prisma from "@/prisma/db";

export const sendApplication = async (applicationData) => {
    const validationResult = ApplicationSchema.safeParse(applicationData);
    if (!validationResult.success) {
        console.log(validationResult.error.issues);
        return { error: validationResult.error.issues };
    }
    const validatedData = validationResult.data;

    try {
        await prisma.application.create({
            data: {
                name: validatedData.name,
                phone: validatedData.phone,
            },
        });
    } catch (error) {
        console.log(error);
    }
};

export const sendReview = async (reviewData) => {
    const validationResult = ReviewSchema.safeParse(reviewData);
    if (!validationResult.success) {
        console.log(validationResult.error.issues);
        return { error: validationResult.error.issues };
    }
    const validatedData = validationResult.data;

    try {
        await prisma.review.create({
            data: {
                name: validatedData.name,
                text: validatedData.text,
            },
        });
    } catch (error) {
        console.log(error);
    }
};

export const getApplications = async () => {
    const applications = await prisma.application.findMany();
    return applications;
};

export const getReviews = async () => {
    const reviews = await prisma.review.findMany();
    return reviews;
};
