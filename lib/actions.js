"use server";

import {
    ApplicationSchema,
    ReviewSchema,
    TutorSchema,
    ScreenshotSchema,
} from "./schemas";
import prisma from "@/prisma/db";
import { revalidatePath } from "next/cache";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";
import { put, del } from "@vercel/blob";

export const createUser = async (username, password) => {
    const hashedPassword = await bcrypt.hash(password, 12);
    try {
        await prisma.user.create({
            data: {
                username: username,
                password: hashedPassword,
            },
        });
    } catch (error) {
        console.log(error);
    }
};

export const createApplication = async (applicationData) => {
    const validationResult = ApplicationSchema.safeParse(applicationData);
    if (!validationResult.success) {
        return { error: validationResult.error.issues };
    }
    const validatedData = validationResult.data;

    try {
        const result = await prisma.application.create({
            data: {
                name: validatedData.name,
                phone: validatedData.phone,
            },
        });
        return result;
    } catch (error) {
        console.log(error);
    }
};

export const createReview = async (reviewData) => {
    const validationResult = ReviewSchema.safeParse(reviewData);
    if (!validationResult.success) {
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
    revalidatePath("/admin");
    return applications;
};

export const getReviews = async () => {
    const reviews = await prisma.review.findMany();
    revalidatePath("/admin");
    return reviews;
};

export const getApprovedReviews = async () => {
    const reviews = await prisma.review.findMany({
        where: {
            approved: "Підтверджено",
        },
    });
    revalidatePath("/admin");
    return reviews;
};

export const approveReview = async (reviewId) => {
    try {
        await prisma.review.update({
            where: {
                id: reviewId,
            },
            data: {
                approved: "Підтверджено",
            },
        });
        revalidatePath("/admin");
    } catch (error) {
        console.log(error);
    }
};

export const deleteReview = async (reviewId) => {
    try {
        await prisma.review.delete({
            where: {
                id: reviewId,
            },
        });
        revalidatePath("/admin");
    } catch (error) {
        console.log(error);
    }
};

export const getTutors = async () => {
    const tutors = await prisma.tutor.findMany();
    revalidatePath("/admin");
    return tutors;
};

export const updateOrCreateTutor = async (formData) => {
    let tutorData = {
        name: formData.get("name"),
        experience: formData.get("experience"),
        about: formData.get("about"),
        photo: formData.get("photo"),
    };
    let tutorId = formData.get("id");

    if (tutorId) {
        const tutor = await prisma.tutor.findUnique({
            where: {
                id: tutorId,
            },
        });

        if (tutor && tutorData.photo.name === "undefined") {
            tutorData.photo = tutor.photo;
        }
    }

    const validationResult = TutorSchema.safeParse(tutorData);
    if (!validationResult.success) {
        return { error: validationResult.error.issues };
    }

    if (!tutorId) {
        tutorId = uuidv4();
    }

    const validatedData = { id: tutorId, ...validationResult.data };

    if (validatedData.photo.name) {
        const imageFile = validatedData.photo;
        const blob = await put(imageFile.name, imageFile, {
            access: "public",
        });
        validatedData.photo = blob.url;
    }

    try {
        const result = await prisma.tutor.upsert({
            where: {
                id: tutorId,
            },
            update: validatedData,
            create: validatedData,
        });
        revalidatePath("/admin");
        return result;
    } catch (error) {
        console.log(error);
    }
};

export const deleteTutor = async (tutorId) => {
    try {
        const tutor = await prisma.tutor.findUnique({
            where: {
                id: tutorId,
            },
        });
        await del(tutor.photo);
        await prisma.tutor.delete({
            where: {
                id: tutorId,
            },
        });
        revalidatePath("/admin");
    } catch (error) {
        console.log(error);
    }
};

export const getManagers = async () => {
    const managers = await prisma.manager.findMany();
    return managers;
};

export const getScreenshots = async () => {
    const screenshots = await prisma.screenshot.findMany();
    return screenshots;
};

export const createScreenshot = async (formData) => {
    const screenshotData = {
        photo: formData.get("photo"),
    };
    const validationResult = ScreenshotSchema.safeParse(screenshotData);
    if (!validationResult.success) {
        return { error: validationResult.error.issues };
    }
    const validatedData = validationResult.data;

    const imageFile = validatedData.photo;
    const blob = await put(imageFile.name, imageFile, {
        access: "public",
    });
    validatedData.photo = blob.url;
    try {
        const result = await prisma.screenshot.create({
            data: {
                photo: validatedData.photo,
            },
        });
        revalidatePath("/admin");
        return result;
    } catch (error) {
        console.log(error);
    }
};

export const deleteScreenshot = async (screenshotId) => {
    try {
        const screenshot = await prisma.screenshot.findUnique({
            where: {
                id: screenshotId,
            },
        });
        await del(screenshot.photo);
        await prisma.screenshot.delete({
            where: {
                id: screenshotId,
            },
        });
        revalidatePath("/admin");
    } catch (error) {
        console.log(error);
    }
};
