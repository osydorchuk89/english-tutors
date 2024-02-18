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
    { id: 1, icon: iconInstagram, link: "https://t.me/c/1342103338/1918" },
    { id: 1, icon: iconTelegram, link: "https://t.me/engl1sh_zoom" },
    { id: 1, icon: iconTikTok, link: "https://t.me/c/1342103338/1919" },
    { id: 1, icon: iconMail, link: "mailto:englishzoom.school@gmail.com" },
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
                scrollMarginTop: "80px",
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
                                xxs: "48px",
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
                        width={{
                            xxs: "275px",
                            xs: "800px",
                        }}
                    />
                </Stack>
                <Stack
                    direction="column"
                    justifyContent="center"
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
                        pl: {
                            xxs: "16px",
                            xs: "61px",
                            md: "57px",
                            xl: "73px",
                        },
                        gap: { xxs: "36px", xs: "44px", md: "48px" },
                    }}
                >
                    {socialIcons.map((item) => (
                        <Link href={item.link} key={item.id}>
                            {item.icon}
                        </Link>
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
