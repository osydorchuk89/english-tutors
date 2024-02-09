"use client";

import axios from "axios";
import { useState, useContext, useRef } from "react";
import { ModalContext } from "./TryItCard";
import { Stack, Card, Typography, TextField, CardContent } from "@mui/material";
import { OrderButton } from "./OrderButton";
import { sendApplication } from "../../lib/actions";

const telegramToken = "6663674256:AAHa4_CAtAeW9spoa-mVkpWxkOEqBVcRRY0";
const telegramChatId = "-1001949299116";

export const ApplicationForm = ({ borderRadiusProp }) => {
    const [error, setError] = useState(null);
    let { setModalOpen } = useContext(ModalContext);
    const formRef = useRef(null);

    const sendApplicationData = async (formData) => {
        const applicationData = {
            name: formData.get("name"),
            phone: formData.get("phone"),
        };
        const response = await sendApplication(applicationData);
        if (response && response.error) {
            setError(response.error[0].message);
            return;
        }
        console.log("Success!!!");
        const messageText = `You received a new application! Name: ${applicationData.name}, phone number: ${applicationData.phone}`;
        const telegramToken = process.env.NEXT_PUBLIC_TELEGRAM_TOKEN;
        const telegramChatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;
        const telegramURL = `https://api.telegram.org/bot${telegramToken}/sendMessage?chat_id=${telegramChatId}&text=${messageText}`;
        axios({
            method: "get",
            url: telegramURL,
        })
            .then((_) => {
                formRef.current.reset();
                setError(null);
                setModalOpen(false);
            })
            .catch((error) => console.log(error));
    };

    return (
        <Card
            elevation={0}
            sx={{
                backgroundColor: "background.main",
                width: "50.75rem",
                height: "37.5rem",
                borderRadius: borderRadiusProp,
            }}
        >
            <CardContent
                sx={{
                    ml: "6.5rem",
                }}
            >
                <Typography
                    sx={{
                        fontSize: "3rem",
                        fontWeight: 700,
                        pt: "7.5rem",
                        mb: "3rem",
                    }}
                >
                    Залиште заявку
                </Typography>
                <form
                    ref={formRef}
                    action={sendApplicationData}
                    style={{
                        width: "36.875rem",
                        mt: "2rem",
                    }}
                >
                    <Stack spacing={5} sx={{ mb: "3rem" }}>
                        <TextField
                            variant="filled"
                            type="text"
                            label="Ім'я"
                            name="name"
                            InputProps={{
                                disableUnderline: true,
                                sx: { borderRadius: "0.5rem" },
                            }}
                        ></TextField>
                        <TextField
                            variant="filled"
                            type="tel"
                            label="Номер телефону"
                            name="phone"
                            InputProps={{
                                disableUnderline: true,
                                sx: { borderRadius: "0.5rem" },
                            }}
                        ></TextField>
                    </Stack>
                    {error && <Typography>{error}</Typography>}
                    <OrderButton text="Забронювати" />
                </form>
            </CardContent>
        </Card>
    );
};
