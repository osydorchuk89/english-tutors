"use client";

import { useState, useRef, useContext } from "react";
import {
    Stack,
    Paper,
    Typography,
    Box,
    Button,
    IconButton,
} from "@mui/material";
import { OrderButton } from "@/app/_components/OrderButton";
import { createScreenshot } from "@/lib/actions";
import { ScreenshotModalContext } from "./ScreenshotTable";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import { UploadButton } from "./UploadButton";

export const ScreenshotModal = () => {
    const [uploadedImage, setUploadedImage] = useState(null);
    const [error, setError] = useState(null);
    const formRef = useRef(null);
    let { setModalOpen } = useContext(ScreenshotModalContext);

    const handleImageChange = (event) => {
        const photo = event.target.files[0];
        if (!photo) {
            setUploadedImage(null);
            return;
        }
        const fileReader = new FileReader();
        fileReader.onload = () => {
            setUploadedImage(fileReader.result);
        };
        fileReader.readAsDataURL(photo);
    };

    const handleSubmit = async (formData) => {
        const response = await createScreenshot(formData);
        if (response && response.error) {
            setError(response.error[0].message);
            return;
        }
        location.reload();
    };

    return (
        <Paper
            sx={{
                display: "flex",
                position: "relative",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "lightBlue.light",
                width: "50vw",
                height: "500px",
                borderRadius: "16px",
            }}
        >
            <IconButton
                disableRipple
                sx={{
                    position: "absolute",
                    top: "30px",
                    right: "30px",
                    color: "inherit",
                }}
                onClick={() => {
                    setModalOpen(false);
                }}
            >
                <CloseIcon />
            </IconButton>
            <Typography
                sx={{
                    fontSize: "48px",
                    fontWeight: 700,
                    mb: "60px",
                }}
            >
                Додати запис
            </Typography>
            <form
                ref={formRef}
                action={handleSubmit}
                style={{
                    width: "66%",
                }}
            >
                <Stack spacing={4} sx={{ mb: "60px" }}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Button
                            component="label"
                            variant="outlined"
                            sx={{
                                backgroundColor: "lightBlue.light",
                                borderColor: "disabledText.main",
                                color: "inherit",
                                ":hover": {
                                    bgcolor: "lightBlue.dark",
                                    borderColor: "darkBlue.light",
                                },
                                mb: "30px",
                            }}
                        >
                            Завантажити фото
                            <UploadButton
                                name="photo"
                                type="file"
                                accept="image/png, image/jpeg"
                                onChange={handleImageChange}
                            />
                        </Button>
                        {uploadedImage && (
                            <Box
                                sx={{
                                    width: "64px",
                                    height: "64px",
                                    position: "relative",
                                }}
                            >
                                <Image
                                    src={uploadedImage}
                                    alt="uploaded image"
                                    fill
                                />
                            </Box>
                        )}
                    </Box>
                </Stack>
                {error && <Typography>{error}</Typography>}
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <OrderButton text="Додати" />
                </Box>
            </form>
        </Paper>
    );
};
