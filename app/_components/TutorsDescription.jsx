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
        <Stack
            sx={{
                width: { lg: "calc(100% - 790px)", xl: "calc(100% - 944px)" },
                mr: "80px",
            }}
        >
            <Typography
                sx={{
                    width: { lg: "288px", lgr: "346px", xl: "450px" },
                    fontSize: { lg: "40px", lgr: "48px", xl: "56px" },
                    fontWeight: 700,
                    lineHeight: {
                        lg: "48.76px",
                        lgr: "58.51px",
                        xl: "68.26px",
                    },
                    mb: { lg: "40px", lgr: "56px", xl: "72px" },
                }}
            >
                Вчителі English Zoom
            </Typography>
            <Stack
                spacing={{ lg: 4, lgr: 5, xl: 6 }}
                useFlexGap
                flexWrap={{ lg: "no-wrap", lgr: "wrap", xl: "wrap" }}
                sx={{
                    width: "100%",
                    height: { lg: "592px", lgr: "386px", xl: "462px" },
                }}
            >
                {descriptionItems.map((item) => (
                    <Box
                        key={item.id}
                        sx={{
                            width: { lg: "238px", lgr: "285px", xl: "330px" },
                            height: { lg: "88px", lgr: "102px", xl: "122px" },
                        }}
                    >
                        <Box
                            sx={{ mb: { lg: "16px", lgr: "24px", xl: "24px" } }}
                        >
                            {item.icon}
                        </Box>
                        <Typography
                            sx={{
                                fontSize: {
                                    lg: "20px",
                                    lgr: "22px",
                                    xl: "30px",
                                },
                                lineHeight: {
                                    lg: "24.38px",
                                    lgr: "26.82px",
                                    xl: "36.57px",
                                },
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
