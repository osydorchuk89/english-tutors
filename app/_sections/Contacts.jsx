import { Typography, Stack, Paper, IconButton } from "@mui/material";
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
                width: {
                    xxs: "calc(100% - 16px)",
                    sm: "calc(100% - 40px)",
                    md: "calc(100% - 60px)",
                    lg: "calc(100% - 120px)",
                    xl: "calc(100% - 200px)",
                },
                height: {
                    xxs: "1387px",
                    sm: "904px",
                    md: "773px",
                    xl: "865px",
                },
                ml: {
                    xxs: "16px",
                    sm: "40px",
                    md: "60px",
                    lg: "120px",
                    xl: "200px",
                },
                scrollMarginTop: "80px",
                m: "120px 0 120px 0",
            }}
        >
            <Typography
                sx={{
                    fontSize: {
                        xxs: "34px",
                        sm: "40px",
                        md: "48px",
                        xl: "56px",
                    },
                    fontWeight: 700,
                    position: "absolute",
                    top: 0,
                    // left: { xxs: "16px", sm: "40px", md: "120px", xl: "200px" },
                    left: 0,
                    zIndex: 10,
                }}
            >
                Контакти
            </Typography>
            <Paper
                sx={{
                    position: "absolute",
                    height: { xxs: "1138px", sm: "711px", md: "100%" },
                    width: {
                        xxs: "289px",
                        sm: "278px",
                        md: "832px",
                        lg: "auto",
                    },
                    backgroundColor: "lightBlue.light",
                    borderRadius: "24px 0 0 24px",
                    right: 0,
                    top: { xxs: "249px", sm: "193px", md: 0 },
                    left: { xxs: "auto", lg: "608px", xl: "847px" },
                }}
            />
            <Stack
                direction={{ xxs: "column", md: "row" }}
                alignItems="center"
                sx={{
                    position: "absolute",
                    top: { xxs: "73px", sm: "89px", md: "auto" },
                    width: { xxs: "100%", md: "auto" },
                    pr: { xxs: "16px", sm: "40px", md: 0 },
                }}
                spacing={{ xxs: 10, xs: 15, md: 10, lg: 12, xl: 15 }} //custom spacing
            >
                <Stack
                    direction={{ xxs: "row", md: "column" }}
                    flexWrap={{ xxs: "wrap", sm: "nowrap" }}
                    useFlexGap={{ xxs: true, sm: false }}
                    spacing={{ xxs: 2, sm: 8 }}
                    justifyContent={{
                        xxs: "space-around",
                        sm: "space-between",
                    }}
                    sx={{
                        width: "100%",
                    }}
                >
                    {icons.map((icon) => (
                        <IconButton
                            href={icon.link}
                            disableRipple
                            key={icon.id}
                            sx={{
                                width: {
                                    xxs: "148px",
                                    xs: "183px",
                                    sm: "148px",
                                    lg: "183px",
                                    xxl: "356px",
                                },
                                height: { xxs: "64px", md: "72px" },
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
                <Stack
                    direction={{ xxs: "column", sm: "row" }}
                    justifyContent="center"
                    alignItems="center"
                    spacing={{ xxs: 2, sm: 2.5, md: 10, lg: 12, xl: 15 }}
                >
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
        </Stack>
    );
};
