"use client";

import { useState } from "react";
import { signOut } from "next-auth/react";
import { ListItemText, MenuList, MenuItem, Box } from "@mui/material";
import { ContactButton } from "@/app/_components/ContactButton";
import { Logo } from "@/lib/icons";
import Link from "next/link";

const menuItems = [
    {
        id: 1,
        name: "tutors",
        text: "Учителі",
    },
    {
        id: 2,
        name: "applications",
        text: "Заявки",
    },
    {
        id: 3,
        name: "reviews",
        text: "Відгуки",
    },
    {
        id: 4,
        name: "screenshots",
        text: "Скріншоти",
    },
];

export const SideBar = ({ setActiveMenuItem }) => {
    const [highlightedMenuItem, setHighlighltedMenuItem] = useState("tutors");

    return (
        <MenuList
            sx={{
                height: "100vh",
                width: "20%",
                borderRightWidth: "1px",
                borderRightStyle: "solid",
                borderRightColor: "disabledText.main",
            }}
        >
            <Link href="/">
                <Logo color="black" />
            </Link>
            {menuItems.map((item) => (
                <MenuItem
                    key={item.id}
                    disableRipple
                    onClick={() => {
                        setActiveMenuItem(item.name);
                        setHighlighltedMenuItem(item.name);
                    }}
                    sx={{
                        p: "10px",
                        backgroundColor:
                            highlightedMenuItem === item.name
                                ? "lightBlue.dark"
                                : "inherit",
                        "&:hover": { backgroundColor: "lightBlue.dark" },
                        "&:active": { backgroundColor: "button.pressed" },
                    }}
                >
                    <ListItemText>{item.text}</ListItemText>
                </MenuItem>
            ))}
            <Box sx={{ mt: "32px", ml: "8px" }}>
                <ContactButton
                    onClick={() =>
                        signOut({
                            callbackUrl: "http://localhost:3000/",
                        })
                    }
                    text="Вийти"
                    hoverBackgroundColor="lightBlue.main"
                    pressedBackgroundColor="lightBlue.dark"
                    maxWidth="95%"
                />
            </Box>
        </MenuList>
    );
};
