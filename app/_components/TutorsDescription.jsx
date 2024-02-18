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
                width: {
                    xxs: "100%",
                    sm: "calc(100% - 536px)",
                    md: "calc(100% - 710px)",
                    xl: "calc(100% - 944px)",
                },
                mr: { xxs: "16px", xs: "40px", md: "80px" },
            }}
        >
            <Typography
                sx={{
                    width: {
                        xxs: "245px",
                        xs: "288px",
                        lg: "346px",
                        xl: "450px",
                    }, //custom values
                    fontSize: {
                        xxs: "34px",
                        xs: "40px",
                        lg: "48px",
                        xl: "56px",
                    },
                    fontWeight: 700,
                    lineHeight: {
                        xxs: "41.45px",
                        xs: "48.76px",
                        lg: "58.51px",
                        xl: "68.26px",
                    },
                    mb: { xxs: "32px", xs: "40px", lg: "56px", xl: "72px" },
                }}
            >
                Вчителі English Zoom
            </Typography>
            <Stack
                spacing={{ xxs: 2, xs: 4, lg: 5, xl: 6 }}
                justifyContent={{ xxs: "space-between", sm: "normal" }}
                useFlexGap
                flexWrap={{ xxs: "wrap", sm: "nowrap", lg: "wrap" }}
                sx={{
                    width: "100%",
                    height: {
                        xxs: "248px",
                        sm: "688px",
                        lg: "386px",
                        xl: "462px",
                    },
                }}
            >
                {descriptionItems.map((item) => (
                    <Box
                        key={item.id}
                        sx={{
                            width: {
                                xxs: "171px",
                                sm: "238px",
                                lg: "285px",
                                xl: "330px",
                            },
                            height: {
                                xxs: "72px",
                                sm: "88px",
                                lg: "102px",
                                xl: "122px",
                            },
                        }}
                    >
                        <Box
                            sx={{
                                mb: {
                                    xxs: "8px",
                                    sm: "16px",
                                    lg: "24px",
                                    xl: "24px",
                                },
                            }}
                        >
                            {item.icon}
                        </Box>
                        <Typography
                            sx={{
                                fontSize: {
                                    xxs: "16px",
                                    sm: "20px",
                                    lg: "22px",
                                    xl: "30px",
                                },
                                lineHeight: {
                                    xxs: "19.5px",
                                    sm: "24.38px",
                                    lg: "26.82px",
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
