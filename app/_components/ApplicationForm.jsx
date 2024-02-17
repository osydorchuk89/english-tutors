"use client";

import axios from "axios";
import { useState, useContext, useRef } from "react";
import { ModalContext } from "./TryItCard";
import { Stack, Paper, Typography, Box, IconButton } from "@mui/material";
import { OrderButton } from "./OrderButton";
import { DarkInputField } from "./DarkInputField";
import { sendApplication } from "../../lib/actions";
import CloseIcon from "@mui/icons-material/Close";

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
        <Paper
            sx={{
                display: "flex",
                position: "relative",
                flexDirection: "column",
                alignItems: "center",
                color: "lightBlue.light",
                backgroundColor: "darkBlue.dark",
                width: { lg: "calc(100% - 120px)", xl: "calc(100% - 200px)" },
                height: { lg: "706px", xl: "909px" },
                py: { lg: "120px", xl: "182px" },
                mx: { lg: "60px", xl: "100px" },
                borderRadius: borderRadiusProp,
                boxShadow: `1px 2px 5px 0px #14313D4A,
                    5px 9px 10px 0px #14313D42,
                    31px 54px 17px 0px #14313D03,
                    -8px -8px 20px 32px #14313D40`,
            }}
        >
            <IconButton
                disableRipple
                sx={{
                    position: "absolute",
                    top: "60px",
                    right: "60px",
                    color: "inherit",
                }}
                onClick={() => setModalOpen(false)}
            >
                <CloseIcon
                    sx={{
                        fontSize: { lg: "32px", xl: "40px" },
                    }}
                />
            </IconButton>
            <Typography
                sx={{
                    fontSize: { lg: "48px", xl: "56px" },
                    fontWeight: 700,
                    color: "inherit",
                    mb: "56px",
                }}
            >
                Залиште заявку
            </Typography>
            <Box
                sx={{
                    width: { lg: "590px", xl: "746px" },
                }}
            >
                <form ref={formRef} action={sendApplicationData}>
                    <Stack
                        spacing={{ lg: 3, xl: 4 }}
                        sx={{ mb: { lg: "32px", xl: "56px" } }}
                    >
                        <DarkInputField type="text" label="Ім'я" name="name" />
                        <DarkInputField
                            type="tel"
                            label="Номер телефону"
                            name="phone"
                        />
                    </Stack>
                    <Typography
                        sx={{
                            color: "inherit",
                            fontSize: { lg: "24px", xl: "28px" },
                            // lineHeight: "29.26px",
                            mb: { lg: "56px", xl: "72px" },
                        }}
                    >
                        Ви можете залишити заявку на безкоштовне заняття. Ми
                        відповідаємо протягом години
                    </Typography>
                    {error && <Typography>{error}</Typography>}
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <OrderButton text="Записатися" />
                    </Box>
                </form>
            </Box>
        </Paper>
    );
};
