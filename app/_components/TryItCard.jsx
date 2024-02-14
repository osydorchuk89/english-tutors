"use client";
import { useState, createContext } from "react";
import { Paper, Typography, Box, Modal } from "@mui/material";
import { OrderButton } from "./OrderButton";
import { ApplicationForm } from "./ApplicationForm";

export const ModalContext = createContext({
    modalOpen: false,
    setModalOpen: () => {},
});

export const TryItCard = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const value = { modalOpen, setModalOpen };

    const handleModalOpen = () => setModalOpen(true);
    const handleModalClose = () => setModalOpen(false);

    return (
        <ModalContext.Provider value={value}>
            <Paper
                sx={{
                    width: "794px",
                    height: "453px",
                    borderRadius: "16px",
                    backgroundColor: "darkBlue.main",
                    color: "lightBlue.light",
                    px: "102px",
                    py: "80px",
                    boxShadow: `1px 2px 5px 0px #14313D4A, 
                        5px 9px 10px 0px #14313D42, 
                        31px 54px 17px 0px #14313D03, 
                        -8px -8px 20px 32px #14313D40`,
                }}
            >
                <Typography
                    sx={{
                        fontSize: "48px",
                        color: "inherit",
                        fontWeight: 700,
                        lineHeight: "58.51px",
                        textAlign: "center",
                        mb: "40px",
                    }}
                >
                    Спробуй безкоштовно
                </Typography>
                <ul
                    style={{
                        fontSize: "22px",
                        lineHeight: "26.82px",
                        listStylePosition: "inside",
                        paddingLeft: "16px",
                        marginBottom: "32px",
                    }}
                >
                    <li>30-40 хвилин пробного заняття </li>
                    <li>Індивідуальний підбір викладача</li>
                    <li>Визначення рівня вашої мови</li>
                    <li>Знайомство-консультація по вашим питанням</li>
                </ul>
                <Box
                    textAlign="center"
                    sx={{
                        background: "inherit",
                        px: "2.5rem",
                        py: "1rem",
                    }}
                >
                    <OrderButton onClick={handleModalOpen} text="Записатися" />
                </Box>
            </Paper>
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
    );
};
