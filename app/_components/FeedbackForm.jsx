"use client";

import { useState, useRef } from "react";
import {
    Card,
    CardContent,
    Typography,
    Stack,
    TextField,
    Box,
} from "@mui/material";
import { OrderButton } from "./OrderButton";
import { sendReview } from "../../lib/actions";

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
        <Card
            elevation={0}
            sx={{
                backgroundColor: "background.main",
                width: "69.563rem",
                height: "32.375rem",
                borderRadius: "0 1rem 1rem 0",
                position: "absolute",
                left: 0,
                bottom: "5rem",
            }}
        >
            <CardContent
                sx={{
                    ml: "6.5rem",
                }}
            >
                <Typography
                    sx={{
                        fontSize: "1.375rem",
                        fontWeight: 700,
                        my: "3rem",
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
                        <TextField
                            variant="outlined"
                            label="Ім'я"
                            name="name"
                        />
                        <TextField
                            multiline
                            rows={5}
                            variant="outlined"
                            label="Ваш коментар"
                            name="text"
                        />
                    </Stack>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        {error && <Typography>{error}</Typography>}
                        <OrderButton text="Відправити" />
                    </Box>
                </form>
            </CardContent>
        </Card>
    );
};
