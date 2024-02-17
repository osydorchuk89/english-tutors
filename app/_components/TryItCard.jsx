"use client";
import { useState, createContext } from "react";
import {
    Paper,
    Typography,
    Box,
    Modal,
    List,
    ListItem,
    ListItemText,
} from "@mui/material";
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
                    width: "100%",
                    minHeight: { lg: "453px", xl: "528px" },
                    borderRadius: "16px",
                    backgroundColor: "darkBlue.main",
                    color: "lightBlue.light",
                    px: "102px",
                    py: "80px",
                    mx: { lg: "323px", xl: "459px" },
                }}
            >
                <Typography
                    sx={{
                        fontSize: { lg: "48px", xl: "56px" },
                        color: "inherit",
                        fontWeight: 700,
                        lineHeight: { lg: "58.51px", xl: "68.26px" },
                        textAlign: "center",
                        mb: "40px",
                    }}
                >
                    Спробуй безкоштовно
                </Typography>
                <BulletedList items={descriptionItems} />
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
