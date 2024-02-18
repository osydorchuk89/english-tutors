"use client";

import { cloneElement, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AppBar, Stack, Box, SwipeableDrawer, IconButton } from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { NavLink } from "../_components/NavLink";
import { OrderButton } from "../_components/OrderButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const appBarStyles = {
    height: "96px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    px: { xs: "40px", md: "120px", xl: "200px" },
    borderRadius: "0 0 16px 16px",
    gap: { md: "43px", lg: "93px", xl: "253px" },
    transition: "backgroundColor 20s",
};

const navItems = [
    { id: 1, text: "Ціни", anchor: "#prices" },
    { id: 2, text: "Вчителі", anchor: "#tutors" },
    { id: 3, text: "Залишити заявку", anchor: "#application" },
    { id: 4, text: "Контакти", anchor: "#contacts" },
    { id: 5, text: "Відгуки", anchor: "#reviews" },
    { id: 6, text: "FAQ", anchor: "#faq" },
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
    const [drawerOpen, setDrawerOpen] = useState(false);

    const DrawerMenu = () => {
        //custom margins
        return (
            <Box
                onClick={() => setDrawerOpen(false)}
                onKeyDown={() => setDrawerOpen(false)}
                sx={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%",
                    overflow: "auto",
                    width: { xxs: "289px", xs: "407px" },
                    pb: "36px",
                    pt: { xxs: "16px", xs: "40px" },
                    backgroundColor: "darkBlue.dark",
                    borderRadius: "16px 0 0 16px",
                }}
            >
                <Box
                    sx={{
                        position: "absolute",
                        left: "16px",
                        top: "16px",
                    }}
                >
                    <Image src="/logo.png" width={133} height={54} alt="logo" />
                </Box>
                <Stack
                    alignItems="flex-end"
                    spacing={5}
                    sx={{
                        width: "100%",
                        pr: { xxs: "16px", xs: "40px" },
                        mb: "40px",
                    }}
                >
                    <IconButton
                        disableRipple
                        sx={{
                            color: "lightBlue.light",
                        }}
                        onClick={() => setDrawerOpen(false)}
                    >
                        <CloseIcon
                            sx={{
                                fontSize: "24px",
                            }}
                        />
                    </IconButton>
                    <Stack
                        alignItems="flex-end"
                        spacing={4}
                        sx={{
                            width: "100%",
                            mb: { xxs: "147px", xs: "394px" },
                        }}
                    >
                        {navItems.map((item) => (
                            <NavLink
                                href={item.anchor}
                                key={item.id}
                                text={item.text}
                                textColor="lightBlue.light"
                                textSize="24px"
                                textWeight={700}
                            />
                        ))}
                    </Stack>
                </Stack>
                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        mt: "auto",
                    }}
                >
                    <Link href="#application">
                        <OrderButton text="Записатися" />
                    </Link>
                </Box>
            </Box>
        );
    };

    return (
        <ChangeBackgroundScroll>
            <AppBar
                color="darkBlue"
                component="header"
                position="sticky"
                elevation={0}
            >
                <Box
                    sx={{
                        position: "relative",
                        minWidth: "133px",
                        minHeight: "54px",
                        width: { xs: "133px", md: "166px" },
                        height: { xs: "54px", md: "64px" },
                    }}
                >
                    <Image src="/logo.png" fill alt="logo" />
                </Box>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    spacing={{ md: 3, lg: 4, xl: 5 }}
                    sx={{
                        display: { xxs: "none", md: "flex" },
                    }}
                >
                    {navItems.map((item) => (
                        <NavLink
                            href={item.anchor}
                            key={item.id}
                            text={item.text}
                            textSize="18px"
                            textWeight={400}
                        />
                    ))}
                </Stack>
                <Box
                    sx={{
                        display: { xxs: "none", md: "flex" },
                    }}
                >
                    <NavLink href="#" text="Uk" />
                </Box>
                <Box
                    sx={{
                        display: { xxs: "flex", md: "none" },
                    }}
                >
                    <IconButton
                        disableRipple
                        onClick={() => setDrawerOpen(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <SwipeableDrawer
                        anchor="right"
                        open={drawerOpen}
                        onOpen={() => setDrawerOpen(true)}
                        onClose={() => setDrawerOpen(false)}
                        PaperProps={{
                            sx: {
                                display: { xxs: "flex", md: "none" },
                                borderRadius: "16px 0 0 16px",
                                minHeight: "100%",
                            },
                        }}
                        ModalProps={{
                            slotProps: {
                                backdrop: {
                                    sx: {
                                        display: { xxs: "flex", md: "none" },
                                        backgroundColor: "#1F596DE5",
                                    },
                                },
                            },
                        }}
                    >
                        <DrawerMenu />
                    </SwipeableDrawer>
                </Box>
            </AppBar>
        </ChangeBackgroundScroll>
    );
};
