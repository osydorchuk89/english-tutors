"use client";
import { useState, createContext } from "react";
import { Paper, Typography, Box, Modal } from "@mui/material";
import { OrderButton } from "./OrderButton";
import { ApplicationForm } from "./ApplicationForm";
import { BulletedList } from "./BulletedList";

const descriptionItems = [
    { id: 1, text: "30-40 хвилин пробного заняття" },
    { id: 2, text: "Індивідуальний підбір викладача" },
    { id: 3, text: "Визначення рівня вашої мови" },
    { id: 4, text: "Знайомство-консультація по вашим питанням" },
];

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
                id="try-it-card"
                sx={{
                    display: {
                        xxs: "flex",
                        md: "block",
                    },
                    flexDirection: "column",
                    alignItems: "center",
                    width: {
                        xxs: "100%",
                        md: "794px",
                        xl: "1002px",
                    },
                    mx: {
                        xxs: "16px",
                        xs: "40px",
                        md: "auto",
                    },
                    minHeight: { xxs: "358px", md: "453px", xl: "528px" },
                    borderRadius: "16px",
                    backgroundColor: "darkBlue.main",
                    color: "lightBlue.light",
                    px: { xxs: "16px", xs: "auto", md: "102px" },
                    py: { xxs: "56px", xs: "80px" },
                }}
            >
                <Typography
                    sx={{
                        fontSize: {
                            xxs: "34px",
                            xs: "40px",
                            md: "48px",
                            xl: "56px",
                        },
                        color: "inherit",
                        fontWeight: 700,
                        textAlign: "center",
                        mb: { xxs: "24px", xs: "48px", md: "40px", xl: "32px" },
                    }}
                >
                    Спробуй безкоштовно
                </Typography>
                <BulletedList
                    items={descriptionItems}
                    fontSize={{
                        xxs: "16px",
                        xs: "20px",
                        md: "22px",
                        xl: "30px",
                    }}
                />
                <Box textAlign="center">
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
