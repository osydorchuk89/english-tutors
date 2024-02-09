import { Box, Stack, Typography } from "@mui/material";
import {
    iconEducation,
    iconExam,
    iconSearch,
    iconMedal,
} from "../../lib/icons";

const descriptionItems = [
    {
        id: 1,
        icon: iconEducation,
        text: "Мають педагогічну освіту та досвід роботи",
    },
    {
        id: 2,
        icon: iconExam,
        text: "Підбираються зі інтересами та характером",
    },
    {
        id: 3,
        icon: iconEducation,
        text: "Мають педагогічну освіту та досвід роботи",
    },
    {
        id: 4,
        icon: iconExam,
        text: "Підбираються зі інтересами та характером",
    },
    {
        id: 5,
        icon: iconSearch,
        text: "Проходять багатоетапну перевірку",
    },
    {
        id: 6,
        icon: iconMedal,
        text: "Відвідують регулярні тренінги та курси підвищення кваліфікації",
    },
    {
        id: 7,
        icon: iconSearch,
        text: "Проходять багатоетапну перевірку",
    },
    {
        id: 8,
        icon: iconMedal,
        text: "Відвідують регулярні тренінги та курси підвищення кваліфікації",
    },
];

export const TutorsDescription = () => {
    return (
        <Stack direction="column">
            <Typography
                sx={{
                    width: "22rem",
                    fontSize: "3rem",
                    fontWeight: 700,
                    mb: "3rem",
                }}
            >
                Вчителі English Zoom
            </Typography>
            <Stack
                spacing={5}
                useFlexGap
                flexWrap="wrap"
                sx={{
                    height: "40rem",
                    width: "40rem",
                }}
            >
                {descriptionItems.map((item) => (
                    <Box
                        key={item.id}
                        sx={{
                            width: "17.8rem",
                        }}
                    >
                        <Box sx={{ mb: "1rem" }}>{item.icon}</Box>
                        <Typography
                            sx={{
                                fontSize: "1.375rem",
                            }}
                        >
                            {item.text}
                        </Typography>
                    </Box>
                ))}
            </Stack>
        </Stack>
    );
};
