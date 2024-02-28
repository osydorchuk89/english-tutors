import Link from "next/link";
import { Stack, Typography, Box } from "@mui/material";
import { TryItCard } from "../_components/TryItCard";
import {
    iconInstagram,
    iconMail,
    iconTelegram,
    iconTikTok,
} from "../../lib/icons";
import { BulletedList } from "../_components/BulletedList";

const socialIcons = [
    {
        id: 1,
        icon: iconInstagram,
        link: "https://www.instagram.com/english.zoom_/",
    },
    { id: 2, icon: iconTelegram, link: "https://t.me/engl1sh_zoom" },
    {
        id: 3,
        icon: iconTikTok,
        link: "https://www.tiktok.com/@english.zoom_?_t=8juDBypfxA6&_r=1",
    },
    { id: 4, icon: iconMail, link: "mailto:englishzoom.school@gmail.com" },
];

const aboutItems = [
    { id: 1, text: "Рівні від A1 до С1" },
    { id: 2, text: "Підготовка до НМТ" },
    { id: 3, text: "Американська/Британська англійська" },
];

export const AboutUs = () => {
    return (
        <Stack
            direction="column"
            sx={{
                mt: { xxs: "56px", xs: "154px", md: "170px", xl: "160px" },
                scrollMarginTop: "100px",
            }}
        >
            <Stack
                direction="row"
                sx={{
                    ml: { xxs: "16px", xs: "40px", md: "120px", xl: "200px" },
                }}
            >
                <Stack direction="column">
                    <Typography
                        sx={{
                            fontSize: {
                                xxs: "44px",
                                xs: "52px",
                                md: "80px",
                                xl: "96px",
                            },
                            fontWeight: 900,
                            lineHeight: { md: "97.52px", xl: "117.02px" },
                            mb: {
                                xxs: "24px",
                                xl: "56px",
                                md: "24px",
                                xl: "32px",
                            },
                            mr: {
                                xxs: "16px",
                                xs: "40px",
                                md: "222px",
                                xl: "322px",
                            },
                            width: {
                                xxs: "calc(100% - 32px)",
                                xs: "calc(100% - 80px)",
                                md: "calc(100% - 200px)",
                                xl: "calc(100% - 300px)",
                            },
                        }}
                    >
                        Заговоріть англійською впевнено
                    </Typography>
                    <BulletedList
                        items={aboutItems}
                        fontSize={{
                            xxs: "18px",
                            xs: "22px",
                            md: "24px",
                            xl: "28px",
                        }}
                        width={{ xxs: "60%", xs: "70%" }}
                    />
                </Stack>
                <Stack
                    direction="column"
                    justifyContent="space-between"
                    sx={{
                        width: {
                            xxs: "80px",
                            xs: "149px",
                            md: "201px",
                            xl: "297px",
                        },
                        height: {
                            xxs: "296px",
                            xs: "368px",
                            md: "352px",
                            xl: "384px",
                        },
                        position: "absolute",
                        top: {
                            xxs: "360px",
                            xs: "410px",
                            md: "360px",
                        },
                        right: 0,
                        backgroundColor: "lightBlue.light",
                        borderRadius: "24px 0 0 24px",
                        boxShadow: "0px 0px 48px 0px #14313D1F",
                        pt: { xxs: "4px", xs: "28px", md: "40px", lg: "56px" },
                        pb: { xxs: 0, xs: "32px", md: "44px", lg: "60px" },
                    }}
                >
                    {socialIcons.map((item) => (
                        <Box
                            component="a"
                            sx={{
                                width: "100%",
                                pl: {
                                    xxs: "16px",
                                    xs: "61px",
                                    md: "57px",
                                    xl: "73px",
                                },
                                py: { xxs: "24px", md: "16px" },
                                borderRadius: "8px 0 0 8px",
                                "&:hover": {
                                    backgroundColor: "lightBlue.dark",
                                },
                                "&:active": {
                                    backgroundColor: "button.pressed",
                                },
                            }}
                            href={item.link}
                            key={item.id}
                        >
                            {item.icon}
                        </Box>
                    ))}
                </Stack>
            </Stack>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    mt: { xxs: "248px", xs: "365px", md: "120px" },
                }}
            >
                <TryItCard />
            </Box>
        </Stack>
    );
};
