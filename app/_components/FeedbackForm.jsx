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
                minHeight: {
                    xxs: "432px",
                    xs: "487px",
                    md: "518px",
                    xl: "595px",
                },
                borderRadius: "8px",
                width: {
                    xxs: "100%",
                    xs: "calc(100% - 20px)",
                    md: "calc(100% - 60px)",
                    xl: "calc(100% - 100px)",
                },
                py: { xxs: "40px", xs: "auto" },
                boxShadow: "0px 0px 48px 0px #14313D1F",
            }}
        >
            <Typography
                sx={{
                    fontSize: { xxs: "24px", xl: "32px" },
                    textAlign: "center",
                    fontWeight: 700,
                    mb: { xxs: "24px", md: "54px" },
                    px: "16px",
                }}
            >
                Ви можете залишити свій відгук на нашому сайті
            </Typography>
            <Box
                sx={{
                    width: {
                        xxs: "90%",
                        xs: "496px",
                        md: "590px",
                        xl: "744px",
                    },
                }}
            >
                <form ref={formRef} action={sendReviewData}>
                    <Stack
                        spacing={2}
                        sx={{
                            mb: {
                                xxs: "32px",
                                xs: "40px",
                                md: "43px",
                                xl: "72px",
                            },
                        }}
                    >
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
                        <ContactButton
                            type="submit"
                            text="Відправити"
                            hoverBackgroundColor="lightBlue.main"
                            pressedBackgroundColor="lightBlue.dark"
                        />
                    </Box>
                </form>
            </Box>
        </Paper>
    );
};
