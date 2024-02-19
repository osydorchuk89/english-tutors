"use client";

import Image from "next/image";
import { useState } from "react";
import { AppBar, Typography, Stack, Box, Modal } from "@mui/material";
import { OrderButton } from "../_components/OrderButton";
import { ModalContext } from "../_components/TryItCard";
import { ApplicationForm } from "../_components/ApplicationForm";

export const BottomNavBar = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const value = { modalOpen, setModalOpen };

    const handleModalOpen = () => {
        setModalOpen(true);
    };
    const handleModalClose = () => {
        setModalOpen(false);
    };

    return (
        <AppBar
            component="footer"
            position="relative"
            elevation={0}
            sx={{
                display: "flex",
                flexDirection: { xxs: "column", xs: "row" },
                alignItems: { xxs: "center", xs: "flex-start" },
                justifyContent: { xxs: "flex-start", xs: "space-between" },
                width: "100%",
                height: { xxs: "265px", xs: "168px" },
                px: { xxs: "16px", xs: "40px", md: "120px", xl: "200px" },
                backgroundColor: "darkBlue.dark",
                borderRadius: "24px 24px 0 0",
                top: "auto",
                bottom: 0,
            }}
        >
            <ModalContext.Provider value={value}>
                <Box
                    sx={{
                        mt: { xxs: "24px", xs: "54px" },
                    }}
                >
                    <Image src="/logo.png" width={166} height={64} alt="logo" />
                </Box>
                <Box
                    sx={{
                        mt: { xxs: "24px", xs: "60px", xl: "55px" },
                    }}
                >
                    <OrderButton text="Записатися" onClick={handleModalOpen} />
                </Box>
                <Stack
                    direction="column"
                    alignItems="center"
                    sx={{
                        position: "absolute",
                        left: 0,
                        right: 0,
                        bottom: {
                            xxs: "32px",
                            xs: "16px",
                            md: "32px",
                        },
                        color: "lightBlue.light",
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: { xxs: "12px", xl: "16px" },
                            color: "inherit",
                        }}
                    >
                        2024
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: { xxs: "12px", xl: "16px" },
                            color: "inherit",
                        }}
                    >
                        Designer
                    </Typography>
                </Stack>
                <Modal
                    open={modalOpen}
                    onClose={handleModalClose}
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        ml: "-16px",
                    }}
                >
                    <ApplicationForm borderRadiusProp="16px" />
                </Modal>
            </ModalContext.Provider>
        </AppBar>
    );
};
