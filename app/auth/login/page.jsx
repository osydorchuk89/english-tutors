"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { Box, TextField, Stack, Card, Typography } from "@mui/material";
import { OrderButton } from "@/app/_components/OrderButton";

export default function AdminLogin() {
    const [inputsFocused, setInputsFocused] = useState(false);
    const [submitButtonClicked, setSubmitButtonClicked] = useState(false);
    const [error, setError] = useState({ message: null });

    const router = useRouter();
    const formRef = useRef(null);

    const handleLogin = async (event) => {
        event.preventDefault();
        setError({ message: null });
        setSubmitButtonClicked(true);
        setInputsFocused(false);
        const result = await signIn("credentials", {
            username: formRef.current["username"].value,
            password: formRef.current["password"].value,
            redirect: false,
            callbackUrl: "/admin",
        });
        if (result?.status === 200) {
            router.push("/admin");
        } else {
            setError({ message: result.error });
        }
    };

    return (
        <Box
            sx={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Card
                elevation={0}
                sx={{
                    backgroundColor: "background.main",
                    width: "35rem",
                    height: "25rem",
                    borderRadius: "1rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Typography
                    sx={{
                        fontSize: "1.5rem",
                        fontWeight: 700,
                        mb: "2rem",
                    }}
                >
                    Вхід до адмін панелі
                </Typography>
                <form ref={formRef} onSubmit={handleLogin}>
                    <Stack spacing={5} sx={{ mb: "2rem" }}>
                        <TextField
                            variant="filled"
                            type="text"
                            label="Ім'я користувача"
                            name="username"
                            onFocus={() => setInputsFocused(true)}
                            sx={{ width: "20rem" }}
                            InputProps={{
                                disableUnderline: true,
                                sx: { borderRadius: "0.5rem" },
                            }}
                        ></TextField>
                        <TextField
                            variant="filled"
                            type="password"
                            label="Пароль"
                            name="password"
                            onFocus={() => setInputsFocused(true)}
                            sx={{ width: "20rem" }}
                            InputProps={{
                                disableUnderline: true,
                                sx: { borderRadius: "0.5rem" },
                            }}
                        ></TextField>
                    </Stack>
                    {error.message && !inputsFocused && submitButtonClicked && (
                        <Typography
                            sx={{
                                color: "#d32f2f",
                                textAlign: "center",
                                mb: "32px",
                            }}
                        >
                            {error.message}
                        </Typography>
                    )}
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <OrderButton text="Увійти" />
                    </Box>
                </form>
            </Card>
        </Box>
    );
}
