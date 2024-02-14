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
import { saveTutor } from "@/lib/actions";
import { TutorModalContext } from "./TutorTable";
import CloseIcon from "@mui/icons-material/Close";

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

export const TutorForm = ({ tutors, tutorId }) => {
    console.log(tutorId);
    const tutorData = tutors.some((el) => el.id === tutorId);
    console.log(tutorData);

    const [imageUploaded, setImageUploaded] = useState(null);
    const [error, setError] = useState(null);
    const formRef = useRef(null);
    let { setModalOpen } = useContext(TutorModalContext);

    const handleSubmit = async (formData) => {
        const response = await saveTutor(formData);
        if (response && response.error) {
            setError(response.error[0].message);
            return;
        }
    };

    return (
        <Paper
            elevation={0}
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
                sx={{
                    position: "absolute",
                    top: "60px",
                    right: "60px",
                }}
                onClick={() => setModalOpen(false)}
            >
                <CloseIcon />
            </IconButton>
            <Typography
                sx={{
                    fontSize: "48px",
                    fontWeight: 700,
                    mb: "48px",
                }}
            >
                Додати учителя
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
                    <TextField
                        variant="outlined"
                        type="text"
                        label="Ім'я"
                        name="name"
                    />
                    <TextField
                        variant="outlined"
                        type="text"
                        label="Досвід"
                        name="experience"
                    />
                    <TextField
                        multiline
                        rows={5}
                        variant="outlined"
                        type="text"
                        label="Про себе"
                        name="about"
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
                                alignSelf: "left",
                            }}
                        >
                            Завантажити фото
                            <VisuallyHiddenInput
                                name="photo"
                                type="file"
                                accept="image/png, image/jpeg"
                                onChange={() => setImageUploaded(true)}
                            />
                        </Button>
                        {imageUploaded && (
                            <Typography sx={{ ml: "16px" }}>
                                Фото успішно завантажено
                            </Typography>
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
