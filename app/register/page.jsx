"use client";

import { Button, Box } from "@mui/material";
import { createUser } from "@/lib/actions";
import { LightInputField } from "../_components/LightInputField";

export default function Register() {
    const handleRegistration = async (formData) => {
        const username = formData.get("username");
        const password = formData.get("password");
        await createUser(username, password);
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
            <Box
                component="form"
                action={handleRegistration}
                sx={{
                    backgroundColor: "background.main",
                    width: "35rem",
                    height: "25rem",
                    borderRadius: "1rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "16px",
                }}
            >
                <LightInputField type="text" label="username" name="username" />
                <LightInputField
                    type="password"
                    label="password"
                    name="password"
                />
                <Button type="submit">Create admin user</Button>
            </Box>
        </Box>
    );
}
