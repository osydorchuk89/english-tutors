"use client";
import { useState, createContext } from "react";
import { Card, CardContent, Typography, Box, Modal } from "@mui/material";
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
            <Card
                elevation={0}
                sx={{
                    width: "49.625rem",
                    height: "30.1875rem",
                    borderRadius: "1rem",
                    backgroundColor: "background.dark",
                }}
            >
                <CardContent
                    sx={{
                        background: "inherit",
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: "2.5rem",
                            fontWeight: 600,
                            background: "inherit",
                            textAlign: "center",
                            mt: "4.5rem",
                        }}
                    >
                        Спробуй безкоштовно
                    </Typography>
                    <Typography
                        sx={{
                            background: "inherit",
                            mt: "2rem",
                            px: "6.5rem",
                        }}
                    >
                        Lorem ipsum dolor sit amet consectetur. Senectus velit
                        at turpis arcu porttitor pharetra. Posuere porta nibh id
                        urna. Condimentum morbi vel malesuada ut purus mauris
                        in. Nulla sit varius nunc at nunc. Non non sed amet
                        volutpat. Velit elementum mauris lacinia viverra euismod
                        accumsan. Nec scelerisque non risus sed libero. Lorem
                        egestas aliquam sed.
                    </Typography>
                    <Box
                        textAlign="center"
                        sx={{
                            background: "inherit",
                            px: "2.5rem",
                            py: "1rem",
                            my: "4.5rem",
                        }}
                    >
                        <OrderButton
                            onClick={handleModalOpen}
                            text="Забронювати"
                        />
                    </Box>
                </CardContent>
            </Card>
            <Modal
                open={modalOpen}
                onClose={handleModalClose}
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    ml: "-1rem",
                }}
            >
                <ApplicationForm borderRadiusProp="1rem" />
            </Modal>
        </ModalContext.Provider>
    );
};
