import { Box, Stack, Typography } from "@mui/material";
import {
    iconGlobe,
    iconBaby,
    iconSpeech,
    iconFamily,
    iconSun,
    iconClock,
} from "../../lib/icons";

const descriptionItems = [
    {
        id: 1,
        icon: iconGlobe,
        text: "Мінімальний рівень мови B2+",
    },
    {
        id: 2,
        icon: iconBaby,
        text: "Працюємо з усіма рівнями",
    },
    {
        id: 3,
        icon: iconSpeech,
        text: "Практикуємо розмовну англійську",
    },
    {
        id: 4,
        icon: iconFamily,
        text: "Будь-які вікові категорії учнів",
    },
    {
        id: 5,
        icon: iconSun,
        text: "Гнучкий графік роботи вчителів",
    },
    {
        id: 6,
        icon: iconClock,
        text: "Можете відмінити урок за 2 години",
    },
];

export const TutorsDescription = () => {
    return (
        <Stack sx={{ width: "calc(100% - 790px)", mr: "80px" }}>
            <Typography
                sx={{
                    width: "346px",
                    fontSize: "48px",
                    fontWeight: 700,
                    lineHeight: "58.51px",
                    mb: "56px",
                }}
            >
                Вчителі English Zoom
            </Typography>
            <Stack
                spacing={5}
                useFlexGap
                flexWrap="wrap"
                sx={{
                    width: "100%",
                    height: "386px",
                }}
            >
                {descriptionItems.map((item) => (
                    <Box
                        key={item.id}
                        sx={{
                            width: "285px",
                            height: "102px",
                        }}
                    >
                        <Box sx={{ mb: "24px" }}>{item.icon}</Box>
                        <Typography
                            sx={{
                                fontSize: "22px",
                                lineHeight: "26.82px",
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
