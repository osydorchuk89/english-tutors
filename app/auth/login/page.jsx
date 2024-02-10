"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { Box, TextField, Stack, Card, Typography } from "@mui/material";
import { OrderButton } from "@/app/_components/OrderButton";

export default function AdminLogin() {
    const router = useRouter();
    const formRef = useRef(null);

    const handleLogin = async (event) => {
        event.preventDefault();
        const result = await signIn("credentials", {
            username: formRef.current["username"].value,
            password: formRef.current["password"].value,
            redirect: false,
            callbackUrl: "/admin",
        });
        if (result?.status == 200) {
            router.push("/admin");
        } else {
            console.log(result.error);
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
                            label="Username"
                            name="username"
                            sx={{ width: "20rem" }}
                            InputProps={{
                                disableUnderline: true,
                                sx: { borderRadius: "0.5rem" },
                            }}
                        ></TextField>
                        <TextField
                            variant="filled"
                            type="password"
                            label="Password"
                            name="password"
                            sx={{ width: "20rem" }}
                            InputProps={{
                                disableUnderline: true,
                                sx: { borderRadius: "0.5rem" },
                            }}
                        ></TextField>
                    </Stack>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <OrderButton text="Увійти" />
                    </Box>
                </form>
            </Card>
        </Box>
    );
}
