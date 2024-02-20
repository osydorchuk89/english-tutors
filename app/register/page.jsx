"use client";

import { Button } from "@mui/material";
import { createUser } from "@/lib/actions";

export default function Register() {
    return (
        <Button onClick={() => createUser("admin", "password")}>
            Create admin user
        </Button>
    );
}
