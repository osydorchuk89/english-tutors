"use client";

import { useState, useRef } from "react";
import { Paper, Typography, Stack, TextField, Box } from "@mui/material";
import { ContactButton } from "./ContactButton";
import { sendReview } from "../../lib/actions";
import { LightInputField } from "./LightInputField";

export const FeedbackForm = () => {
    const [error, setError] = useState(null);
    const formRef = useRef(null);

    const sendReviewData = async (formData) => {
        const reviewData = {
            name: formData.get("name"),
            text: formData.get("text"),
        };
        const response = await sendReview(reviewData);
        if (response && response.error) {
            setError(response.error[0].message);
            return;
        }
        console.log("Success!!!");
        formRef.current.reset();
        setError(null);
    };

    return (
        <Paper
            elevation={3}
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "lightBlue.light",
                height: "518px",
                borderRadius: "8px",
                width: "calc(100% - 60px)",
                boxShadow: "0px 0px 48px 0px #14313D1F",
            }}
        >
            <Typography
                sx={{
                    fontSize: "24px",
                    fontWeight: 700,
                    mb: "54px",
                }}
            >
                Ви можете залишити свій відгук на нашому сайті
            </Typography>
            <form
                ref={formRef}
                action={sendReviewData}
                style={{
                    width: "36.875rem",
                    mt: "2rem",
                }}
            >
                <Stack spacing={2} sx={{ mb: "3rem" }}>
                    <LightInputField type="text" label="Ім'я" name="name" />
                    <LightInputField
                        multiline={true}
                        rows={5}
                        type="text"
                        label="Ваш коментар"
                        name="text"
                    />
                </Stack>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    {error && <Typography>{error}</Typography>}
                    <ContactButton type="submit" text="Відправити" />
                </Box>
            </form>
        </Paper>
    );
};
