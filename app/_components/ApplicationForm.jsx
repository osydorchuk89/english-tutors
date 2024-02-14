"use client";

import axios from "axios";
import { useState, useContext, useRef } from "react";
import { ModalContext } from "./TryItCard";
import { Stack, Paper, Typography, Box, IconButton } from "@mui/material";
// import { styled } from "@mui/material/styles";
import { OrderButton } from "./OrderButton";
import { InputField } from "./InputField";
import { sendApplication } from "../../lib/actions";
import CloseIcon from "@mui/icons-material/Close";

// const StyledInput = styled(TextField)(({ theme }) => ({
//     color: theme.palette.lightBlue.light,
//     "& .MuiOutlinedInput-root": {
//         "& fieldset": {
//             borderColor: theme.palette.lightBlue.light,
//         },
//         "&:hover fieldset": {
//             borderColor: theme.palette.lightBlue.light,
//         },
//         "&.Mui-focused fieldset": {
//             borderColor: theme.palette.lightBlue.light,
//         },
//     },
// }));

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
                width: "1320px",
                height: "706px",
                py: "120px",
                borderRadius: borderRadiusProp,
                boxShadow: "1px 2px 5px 0px #14313D4A",
                // boxShadow: "5px 9px 10px 0px #14313D42",
                // boxShadow: "31px 54px 17px 0px #14313D03",
                // boxShadow: "-8px -8px 20px 32px #14313D40",
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
                <CloseIcon />
            </IconButton>
            <Typography
                sx={{
                    fontSize: "48px",
                    fontWeight: 700,
                    lineHeight: "58.51px",
                    color: "inherit",
                    mb: "48px",
                }}
            >
                Залиште заявку
            </Typography>
            <form
                ref={formRef}
                action={sendApplicationData}
                style={{
                    width: "590px",
                    mt: "2rem",
                }}
            >
                <Stack spacing={2.5} sx={{ mb: "40px" }}>
                    <InputField type="text" label="Ім'я" name="name" />
                    <InputField
                        type="tel"
                        label="Номер телефону"
                        name="phone"
                    />
                </Stack>
                <Typography
                    sx={{
                        color: "inherit",
                        fontSize: "24px",
                        lineHeight: "29.26px",
                        mb: "56px",
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
        </Paper>
    );
};
