"use client";

import { useState, useRef, useContext } from "react";
import {
    Stack,
    Paper,
    Typography,
    TextField,
    Box,
    Button,
    IconButton,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { OrderButton } from "@/app/_components/OrderButton";
import { updateOrCreateTutor } from "@/lib/actions";
import { TutorModalContext } from "./TutorTable";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";

const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
});

export const TutorModal = ({ tutors, tutorId, setTutorId }) => {
    const hasTutorId = tutors.some((tutor) => tutor.id === tutorId);
    const tutor = tutors.filter((tutor) => tutor.id === tutorId)[0];
    const tutorPhoto = tutor ? `/${tutor.photo}` : undefined;
    // console.log(tutorPhoto);

    const [uploadedImage, setUploadedImage] = useState(tutorPhoto);
    const [error, setError] = useState(null);
    const [isEditing, setIsEditing] = useState(hasTutorId);
    const [tutorData, setTutorData] = useState(tutor);
    const formRef = useRef(null);
    let { setModalOpen } = useContext(TutorModalContext);

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
        const response = await updateOrCreateTutor(formData);
        if (response && response.error) {
            setError(response.error[0].message);
            return;
        }
        // setTutorId(null);
        // setModalOpen(false);
        location.reload();
    };

    return (
        <Paper
            elevation={0}
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                alignItems: "center",
                backgroundColor: "lightBlue.light",
                width: "70vw",
                height: "706px",
                borderRadius: "16px",
            }}
        >
            <IconButton
                sx={{
                    mr: "4px",
                    ml: "auto",
                }}
                onClick={() => {
                    setTutorId(null);
                    setModalOpen(false);
                }}
            >
                <CloseIcon />
            </IconButton>
            <Typography
                sx={{
                    fontSize: "48px",
                    fontWeight: 700,
                    mb: "24px",
                }}
            >
                {isEditing ? "Редагувати запис" : "Додати запис"}
            </Typography>
            <form
                ref={formRef}
                action={handleSubmit}
                style={{
                    width: "66%",
                    mt: "32px",
                }}
            >
                <Stack spacing={4} sx={{ mb: "48px" }}>
                    {isEditing && (
                        <TextField
                            name="id"
                            defaultValue={tutorData.id}
                            sx={{ display: "none" }}
                        />
                    )}
                    <TextField
                        variant="outlined"
                        type="text"
                        label="Ім'я"
                        name="name"
                        defaultValue={isEditing ? `${tutorData.name}` : ""}
                    />
                    <TextField
                        variant="outlined"
                        type="text"
                        label="Досвід"
                        name="experience"
                        defaultValue={
                            isEditing ? `${tutorData.experience}` : ""
                        }
                    />
                    <TextField
                        multiline
                        rows={5}
                        variant="outlined"
                        type="text"
                        label="Про себе"
                        name="about"
                        defaultValue={isEditing ? `${tutorData.about}` : ""}
                    />
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "flex-start",
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
                            }}
                        >
                            {isEditing ? "Оновити фото" : "Завантажити фото"}
                            <VisuallyHiddenInput
                                name="photo"
                                type="file"
                                accept="image/png, image/jpeg"
                                onChange={handleImageChange}
                            />
                        </Button>
                        {uploadedImage && (
                            <Box
                                sx={{
                                    width: "48px",
                                    height: "64px",
                                    position: "relative",
                                    ml: "32px",
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
                    <OrderButton text={isEditing ? "Редагувати" : "Додати"} />
                </Box>
            </form>
        </Paper>
    );
};
