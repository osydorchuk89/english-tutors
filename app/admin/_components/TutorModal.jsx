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
    FormControl,
    FormHelperText,
} from "@mui/material";
import { OrderButton } from "@/app/_components/OrderButton";
import { updateOrCreateTutor } from "@/lib/actions";
import { TutorModalContext } from "./TutorTable";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import { LightInputField } from "@/app/_components/LightInputField";
import { UploadButtonField } from "./UploadButtonField";

export const TutorModal = ({ tutors, tutorId, setTutorId }) => {
    const allInputsNotFocused = {
        name: false,
        experience: false,
        about: false,
    };
    const inputNames = ["name", "experience", "about", "photo"];

    const [inputsFocused, setInputsFocused] = useState(allInputsNotFocused);
    const [submitButtonClicked, setSubmitButtonClicked] = useState(false);
    const isEditing = tutors.some((tutor) => tutor.id === tutorId);
    const tutorData = tutors.filter((tutor) => tutor.id === tutorId)[0];
    const tutorPhoto = tutorData ? `/${tutorData.photo}` : undefined;

    const [uploadedImage, setUploadedImage] = useState(tutorPhoto);
    const [error, setError] = useState({
        name: null,
        experience: null,
        about: null,
        photo: null,
    });
    // const [isEditing, setIsEditing] = useState(hasTutorId);
    // const [tutorData, setTutorData] = useState(tutor);
    const formRef = useRef(null);
    let { setModalOpen } = useContext(TutorModalContext);

    const handleImageChange = (event) => {
        const photo = event.target.files[0];
        if (!photo) {
            setUploadedImage(null);
            return;
        }
        setError((prevState) => ({
            ...prevState,
            photo: null,
        }));
        const fileReader = new FileReader();
        fileReader.onload = () => {
            setUploadedImage(fileReader.result);
        };
        fileReader.readAsDataURL(photo);
    };

    const handleSubmit = async (formData) => {
        setSubmitButtonClicked(true);
        setInputsFocused(allInputsNotFocused);
        const response = await updateOrCreateTutor(formData);
        if (response && response.error) {
            inputNames.map((item) => {
                if (response.error.some((e) => e.path[0] === item)) {
                    const newError = response.error.filter(
                        (e) => e.path[0] === item
                    );
                    setError((prevState) => ({
                        ...prevState,
                        [item]: newError[0].message,
                    }));
                } else {
                    setError((prevState) => ({
                        ...prevState,
                        [item]: null,
                    }));
                }
            });
            return;
        }
        setError({
            name: null,
            experience: null,
            about: null,
            photo: null,
        });
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
                width: "70vw",
                height: "706px",
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
                    <LightInputField
                        type="text"
                        label="Ім'я"
                        name="name"
                        defaultValue={isEditing ? `${tutorData.name}` : ""}
                        error={
                            error &&
                            error.name !== null &&
                            !inputsFocused.name &&
                            submitButtonClicked
                        }
                        helperText={
                            error && !inputsFocused.name ? error.name : ""
                        }
                        onFocus={() =>
                            setInputsFocused((prevState) => ({
                                ...prevState,
                                name: true,
                            }))
                        }
                    />
                    <LightInputField
                        type="text"
                        label="Досвід"
                        name="experience"
                        defaultValue={
                            isEditing ? `${tutorData.experience}` : ""
                        }
                        error={
                            error &&
                            error.experience !== null &&
                            !inputsFocused.experience &&
                            submitButtonClicked
                        }
                        helperText={
                            error && !inputsFocused.experience
                                ? error.experience
                                : ""
                        }
                        onFocus={() =>
                            setInputsFocused((prevState) => ({
                                ...prevState,
                                experience: true,
                            }))
                        }
                    />
                    <LightInputField
                        multiline
                        rows={5}
                        type="text"
                        label="Про себе"
                        name="about"
                        defaultValue={isEditing ? `${tutorData.about}` : ""}
                        error={
                            error &&
                            error.about !== null &&
                            !inputsFocused.about &&
                            submitButtonClicked
                        }
                        helperText={
                            error && !inputsFocused.about ? error.about : ""
                        }
                        onFocus={() =>
                            setInputsFocused((prevState) => ({
                                ...prevState,
                                about: true,
                            }))
                        }
                    />
                    <FormControl
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "flex-start",
                        }}
                    >
                        <UploadButtonField
                            text={
                                isEditing ? "Оновити фото" : "Завантажити фото"
                            }
                            onChange={handleImageChange}
                        />
                        {uploadedImage && (
                            <Box
                                sx={{
                                    width: "48px",
                                    height: "48px",
                                    position: "relative",
                                    ml: "32px",
                                }}
                            >
                                <Image
                                    src={uploadedImage}
                                    alt="uploaded image"
                                    fill
                                    sizes="100vw"
                                />
                            </Box>
                        )}
                        {error &&
                            error.photo !== null &&
                            submitButtonClicked && (
                                <FormHelperText
                                    sx={{
                                        color: "#d32f2f",
                                        fontSize: "12px",
                                        fontWeight: 700,
                                    }}
                                >
                                    {error.photo}
                                </FormHelperText>
                            )}
                    </FormControl>
                </Stack>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <OrderButton
                        text={isEditing ? "Редагувати" : "Додати"}
                        isApplication
                    />
                </Box>
            </form>
        </Paper>
    );
};
