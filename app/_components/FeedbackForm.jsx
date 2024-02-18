"use client";

import { useState, useRef } from "react";
import { Paper, Typography, Stack, Box } from "@mui/material";
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
                height: { md: "518px", xl: "595px" },
                borderRadius: "8px",
                width: { md: "calc(100% - 60px)", xl: "calc(100% - 100px)" },
                boxShadow: "0px 0px 48px 0px #14313D1F",
            }}
        >
            <Typography
                sx={{
                    fontSize: { md: "24px", xl: "32px" },
                    fontWeight: 700,
                    mb: "54px",
                }}
            >
                Ви можете залишити свій відгук на нашому сайті
            </Typography>
            <Box
                sx={{
                    width: { md: "590px", xl: "744px" },
                }}
            >
                <form ref={formRef} action={sendReviewData}>
                    <Stack spacing={2} sx={{ mb: { md: "43px", xl: "72px" } }}>
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
            </Box>
        </Paper>
    );
};
