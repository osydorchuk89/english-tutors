"use client";

import { cloneElement } from "react";
import Image from "next/image";
import { AppBar, Stack } from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { NavLink } from "./NavLink";

const appBarStyles = {
    height: "96px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    px: { lg: "120px", xl: "200px" },
    borderRadius: "0 0 16px 16px",
    gap: "93px",
    transition: "backgroundColor 20s",
};

const navItems = [
    { text: "Ціни", anchor: "#prices" },
    { text: "Вчителі", anchor: "#tutors" },
    { text: "Залишити заявку", anchor: "#application" },
    { text: "Контакти", anchor: "#contacts" },
    { text: "Відгуки", anchor: "#reviews" },
    { text: "FAQ", anchor: "#faq" },
];

function ChangeBackgroundScroll({ children }) {
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100,
    });
    return cloneElement(children, {
        sx: trigger
            ? { ...appBarStyles, backgroundColor: "lightBlue.main" }
            : { ...appBarStyles, backgroundColor: "background.main" },
    });
}

export const TopNavBar = () => {
    return (
        <ChangeBackgroundScroll>
            <AppBar
                color="darkBlue"
                component="header"
                position="sticky"
                elevation={0}
            >
                <Image src="/logo.png" width={166} height={64} alt="logo" />
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    spacing={4}
                    sx={{ width: "789px" }}
                >
                    {navItems.map((item) => (
                        <NavLink
                            href={item.anchor}
                            key={item}
                            text={item.text}
                        />
                    ))}
                </Stack>
                <NavLink href="#" text="Uk" />
            </AppBar>
        </ChangeBackgroundScroll>
    );
};
