import { Typography, Stack, Box, IconButton } from "@mui/material";
import {
    iconTikTok,
    iconInstagram,
    iconMail,
    iconTelegram,
} from "../../lib/icons";
import { ContactCard } from "../_components/ContactCard";

const icons = [
    {
        id: 1,
        img: iconInstagram,
        link: "https://www.instagram.com/english.zoom_/",
    },
    { id: 2, img: iconTelegram, link: "https://t.me/engl1sh_zoom" },
    {
        id: 3,
        img: iconTikTok,
        link: "https://www.tiktok.com/@english.zoom_?_t=8juDBypfxA6&_r=1",
    },
    {
        id: 4,
        img: iconMail,
        link: "englishzoom.school@gmail.com",
    },
];

export const Contacts = () => {
    return (
        <Stack
            id="contacts"
            direction="row"
            alignItems="center"
            sx={{
                position: "relative",
                height: "773px",
                scrollMarginTop: "80px",
                m: "120px 0 120px 120px",
            }}
        >
            <Typography
                sx={{
                    fontSize: "48px",
                    fontWeight: 700,
                    position: "absolute",
                    top: 0,
                    left: 0,
                }}
            >
                Контакти
            </Typography>
            <Box
                sx={{
                    position: "absolute",
                    width: "832px",
                    height: "100%",
                    backgroundColor: "lightBlue.light",
                    borderRadius: "24px 0 0 24px",
                    right: 0,
                }}
            />
            <Stack
                direction="row"
                alignItems="center"
                sx={{ position: "absolute" }}
                spacing={15}
            >
                <Stack spacing={8}>
                    {icons.map((icon) => (
                        <IconButton
                            href={icon.link}
                            disableRipple
                            key={icon.id}
                            sx={{
                                width: "183px",
                                height: "72px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor: "lightBlue.main",
                                borderRadius: "16px",
                            }}
                        >
                            {icon.img}
                        </IconButton>
                    ))}
                </Stack>
                <ContactCard
                    img="/tutor-photos/tutor-anastasiia.jpg"
                    name="Анастасія"
                    text="Відповім на будь-яке запитання"
                    phone="+38 098 06 21 910"
                    href="https://t.me/nastia_hryb"
                />
                <ContactCard
                    img="/tutor-photos/tutor-iana.jpg"
                    name="Яна"
                    text="Допоможу вирішити будь-яку проблему"
                    phone="+380 67 410 89 09"
                    href="https://t.me/yana_english_zoom"
                />
            </Stack>
        </Stack>
    );
};
