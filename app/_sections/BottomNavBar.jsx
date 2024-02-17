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
            position="static"
            elevation={0}
            sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "space-between",
                width: "100%",
                height: "168px",
                mt: "60px",
                px: "120px",
                backgroundColor: "darkBlue.dark",
                borderRadius: "24px 24px 0 0",
                top: "auto",
                bottom: 0,
            }}
        >
            <ModalContext.Provider value={value}>
                <Image
                    src="/logo.png"
                    width={166}
                    height={64}
                    alt="logo"
                    style={{ marginTop: "54px" }}
                />
                <Stack
                    direction="column"
                    alignItems="center"
                    sx={{ mt: "93px", color: "lightBlue.light" }}
                >
                    <Typography sx={{ fontSize: "12px", color: "inherit" }}>
                        2024
                    </Typography>
                    <Typography sx={{ fontSize: "12px", color: "inherit" }}>
                        Designer
                    </Typography>
                </Stack>
                <Box
                    sx={{
                        mt: "60px",
                    }}
                >
                    <OrderButton text="Записатися" onClick={handleModalOpen} />
                </Box>
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
