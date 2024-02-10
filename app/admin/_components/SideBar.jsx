"use client";

import { useState } from "react";
import Image from "next/image";
import { ListItemText, MenuList, MenuItem } from "@mui/material";

const menuItems = [
    {
        id: 1,
        name: "applications",
        text: "Заявки",
    },
    {
        id: 2,
        name: "reviews",
        text: "Відгуки",
    },
    {
        id: 3,
        name: "tutors",
        text: "Учителі",
    },
];

export const SideBar = ({ setActiveMenuItem }) => {
    const [highlightedMenuItem, setHighlighltedMenuItem] =
        useState("applications");

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
            <Image src="/logo.png" width={200} height={57} alt="logo" />
            {menuItems.map((item) => (
                <MenuItem
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
                    }}
                >
                    <ListItemText>{item.text}</ListItemText>
                </MenuItem>
            ))}
        </MenuList>
    );
};
