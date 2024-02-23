"use client";

import { useState, useRef } from "react";
import { Paper, Typography, Stack, Box } from "@mui/material";
import { ContactButton } from "./ContactButton";
import { sendReview } from "../../lib/actions";
import { LightInputField } from "./LightInputField";

export const FeedbackForm = () => {
    const allInputsNotFocused = {
        name: false,
        phone: false,
    };

    const [inputsFocused, setInputsFocused] = useState(allInputsNotFocused);
    const [submitButtonClicked, setSubmitButtonClicked] = useState(false);
    const [error, setError] = useState({ name: null, text: null });
    const formRef = useRef(null);

    const sendReviewData = async (formData) => {
        setSubmitButtonClicked(true);
        setInputsFocused(allInputsNotFocused);
        const reviewData = {
            name: formData.get("name"),
            text: formData.get("text"),
        };
        const response = await sendReview(reviewData);
        if (response && response.error) {
            if (response.error.some((e) => e.path[0] === "name")) {
                const nameError = response.error.filter(
                    (e) => e.path[0] === "name"
                );
                setError((prevState) => ({
                    ...prevState,
                    name: nameError[0].message,
                }));
            } else {
                setError((prevState) => ({
                    ...prevState,
                    name: null,
                }));
            }
            if (response.error.some((e) => e.path[0] === "text")) {
                const textError = response.error.filter(
                    (e) => e.path[0] === "text"
                );
                setError((prevState) => ({
                    ...prevState,
                    text: textError[0].message,
                }));
            } else {
                setError((prevState) => ({
                    ...prevState,
                    text: null,
                }));
            }
            return;
        }
        formRef.current.reset();
        setError({
            name: null,
            text: null,
        });
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
                component="form"
                ref={formRef}
                action={sendReviewData}
                sx={{
                    width: {
                        xxs: "90%",
                        xs: "496px",
                        md: "590px",
                        xl: "744px",
                    },
                }}
            >
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
                    <LightInputField
                        type="text"
                        label="Ім'я"
                        name="name"
                        error={
                            error &&
                            error.name !== null &&
                            !inputsFocused.name &&
                            submitButtonClicked
                        }
                        helperText={
                            error && !inputsFocused.name ? error.name : ""
                        }
                        onFocus={() =>
                            setInputsFocused((prevState) => ({
                                ...prevState,
                                name: true,
                            }))
                        }
                    />
                    <LightInputField
                        multiline={true}
                        type="text"
                        label="Ваш коментар"
                        name="text"
                        error={
                            error &&
                            error.text !== null &&
                            !inputsFocused.text &&
                            submitButtonClicked
                        }
                        helperText={
                            error && !inputsFocused.text ? error.text : ""
                        }
                        onFocus={() =>
                            setInputsFocused((prevState) => ({
                                ...prevState,
                                text: true,
                            }))
                        }
                    />
                </Stack>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <ContactButton
                        type="submit"
                        text="Відправити"
                        hoverBackgroundColor="lightBlue.main"
                        pressedBackgroundColor="lightBlue.dark"
                    />
                </Box>
            </Box>
        </Paper>
    );
};
