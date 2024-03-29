import { Typography, Stack, Paper, IconButton, Box } from "@mui/material";
import {
    iconTikTok,
    iconInstagram,
    iconMail,
    iconTelegram,
} from "../../lib/icons";
import { ContactCard } from "../_components/ContactCard";
import { getManagers } from "@/lib/actions";

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
        link: "mailto:englishzoom.school@gmail.com",
    },
];

export const Contacts = async () => {
    const managers = await getManagers();

    return (
        <Stack
            id="contacts"
            direction="row"
            alignItems="center"
            sx={{
                position: "relative",
                // width: {
                //     xxs: "calc(100% - 16px)",
                //     xs: "calc(100% - 40px)",
                //     md: "calc(100% - 80px)",
                //     lg: "calc(100% - 120px)",
                //     xl: "calc(100% - 200px)",
                // },
                height: {
                    xxs: "1387px",
                    sm: "904px",
                    md: "773px",
                    xl: "865px",
                },
                ml: {
                    xxs: "16px",
                    sm: "40px",
                    md: "80px",
                    lg: "120px",
                    xl: "200px",
                },
                scrollMarginTop: "100px",
                my: "120px",
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
                        xs: "auto",
                    },
                    backgroundColor: "lightBlue.light",
                    borderRadius: "24px 0 0 24px",
                    boxShadow: "0px 0px 48px 0px #14313D1F",
                    right: 0,
                    top: { xxs: "249px", sm: "193px", md: 0 },
                    left: {
                        xxs: "auto",
                        xs: "250px",
                        md: "450px",
                        xxl: "750px",
                    },
                }}
            />
            <Stack
                direction={{ xxs: "column", md: "row" }}
                alignItems="center"
                sx={{
                    position: "absolute",
                    top: { xxs: "73px", sm: "89px", md: "115px", xl: "140px" },
                    right: {
                        xxs: "8px",
                        xs: "40px",
                        md: "80px",
                        lg: "120px",
                        xl: "200px",
                    },
                    width: {
                        xxs: "calc(100% - 16px)",
                        xs: "calc(100% - 40px)",
                        md: "calc(100% - 80px)",
                        lg: "calc(100% - 120px)",
                        xl: "calc(100% - 200px)",
                    },
                }}
                spacing={{ xxs: 10, sm: 15, md: 8, lg: 12, xl: 15 }} //custom spacing
            >
                <Box
                    sx={{
                        width: { xxs: "100%", md: "auto" },
                        display: { xxs: "grid", sm: "flex" },
                        flexDirection: { sm: "row", md: "column" },
                        gap: { sm: "64px" },
                        justifyContent: "space-between",
                        justifyItems: { xxs: "center", sm: "normal" },
                        gridTemplateColumns: "repeat(2, 1fr)",
                        gridTemplateRows: "repeat(2, 1fr)",
                        gridColumnGap: "16px",
                        gridRowGap: "16px",
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
                                    xs: "170px",
                                    sm: "148px",
                                    lg: "183px",
                                    xxl: "256px",
                                },
                                height: { xxs: "64px", md: "72px" },
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor: "lightBlue.main",
                                borderRadius: "16px",
                                "&:hover": {
                                    backgroundColor: "lightBlue.dark",
                                },
                                "&:active": {
                                    backgroundColor: "button.pressed",
                                },
                            }}
                        >
                            {icon.img}
                        </IconButton>
                    ))}
                </Box>
                <Stack
                    direction={{ xxs: "column", sm: "row" }}
                    justifyContent={{ xxs: "center", sm: "space-between" }}
                    alignItems="center"
                    spacing={{ xxs: 2, sm: "auto" }}
                    sx={{ flexGrow: 1, width: "100%" }}
                >
                    {managers.map((manager) => (
                        <ContactCard
                            key={manager.id}
                            img={manager.photo}
                            name={manager.name}
                            text={manager.about}
                            phone={manager.phone}
                            href={manager.telegram}
                        />
                    ))}
                </Stack>
            </Stack>
        </Stack>
    );
};
