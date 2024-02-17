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
                width: "100%",
                height: { lg: "773px", xl: "865px" },
                pl: { lg: "60px", lgr: "120px", xl: "200px" },
                scrollMarginTop: "80px",
                m: "120px 0 120px 0",
            }}
        >
            <Typography
                sx={{
                    fontSize: { lg: "48px", xl: "56px" },
                    fontWeight: 700,
                    position: "absolute",
                    top: 0,
                    left: { lg: "120px", xl: "200px" },
                    zIndex: 10,
                }}
            >
                Контакти
            </Typography>
            <Box
                sx={{
                    position: "absolute",
                    height: "100%",
                    backgroundColor: "lightBlue.light",
                    borderRadius: "24px 0 0 24px",
                    right: 0,
                    left: { lg: "608px", xl: "847px" },
                }}
            />
            <Stack
                direction="row"
                alignItems="center"
                sx={{ position: "absolute" }}
                spacing={{ lg: 10, lgr: 12, xl: 15 }} //custom spacing
            >
                <Stack spacing={8}>
                    {icons.map((icon) => (
                        <IconButton
                            href={icon.link}
                            disableRipple
                            key={icon.id}
                            sx={{
                                width: {
                                    lg: "148px",
                                    lgr: "183px",
                                    xl: "356px",
                                },
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
