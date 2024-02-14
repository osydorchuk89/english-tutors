import Link from "next/link";
import { Stack, Typography, Box, IconButton } from "@mui/material";
import { TryItCard } from "../_components/TryItCard";
import {
    iconInstagram,
    iconMail,
    iconTelegram,
    iconTikTok,
} from "../../lib/icons";

const socialIcons = [
    { id: 1, icon: iconInstagram, link: "https://t.me/c/1342103338/1918" },
    { id: 1, icon: iconTelegram, link: "https://t.me/engl1sh_zoom" },
    { id: 1, icon: iconTikTok, link: "https://t.me/c/1342103338/1919" },
    { id: 1, icon: iconMail, link: "mailto:englishzoom.school@gmail.com" },
];

export const AboutUs = () => {
    return (
        <Stack
            direction="column"
            sx={{ ml: "120px", mt: "170px", scrollMarginTop: "80px" }}
        >
            <Stack direction="row">
                <Stack direction="column">
                    <Typography
                        sx={{
                            fontSize: "80px",
                            fontWeight: 900,
                            lineHeight: "97.52px",
                            width: "1098px",
                            height: "196px",
                            mb: "24px",
                        }}
                    >
                        Заговоріть англійською впевнено
                    </Typography>
                    <ul
                        style={{
                            fontSize: "24px",
                            lineHeight: "29.26px",
                            width: "590px",
                            height: "93px",
                            listStylePosition: "inside",
                            paddingLeft: "16px",
                        }}
                    >
                        <li>Рівні від A1 до С1</li>
                        <li>Підготовка до НМТ</li>
                        <li>Американська/Британська англійська</li>
                    </ul>
                </Stack>
                <Stack
                    direction="column"
                    justifyContent="center"
                    sx={{
                        width: "201px",
                        height: "352px",
                        position: "absolute",
                        top: "360px",
                        right: 0,
                        backgroundColor: "lightBlue.light",
                        borderRadius: "24px 0 0 24px",
                        boxShadow: "0px 0px 48px 0px #14313D1F",
                        pl: "57px",
                        gap: "48px",
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
                    my: "120px",
                }}
            >
                <TryItCard />
            </Box>
        </Stack>
    );
};
