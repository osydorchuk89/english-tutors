import { Typography, Stack, Box } from "@mui/material";
import {
    iconTikTok,
    iconInstagram,
    iconMail,
    iconTelegram,
} from "../../lib/icons";
import { ContactCard } from "../_components/ContactCard";

const icons = [
    { id: 1, img: iconTikTok },
    { id: 2, img: iconInstagram },
    { id: 3, img: iconMail },
    { id: 4, img: iconTelegram },
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
                height: "48.313rem",
                pl: "7.5rem",
                mb: "7.5rem",
                scrollMarginTop: "5rem",
            }}
        >
            <Typography
                sx={{
                    fontSize: "3rem",
                    fontWeight: 700,
                    position: "absolute",
                    top: 0,
                    left: "7.5rem",
                }}
            >
                Контакти
            </Typography>
            <Box
                sx={{
                    position: "absolute",
                    width: "40rem",
                    height: "100%",
                    backgroundColor: "background.main",
                    borderRadius: "1rem 0 0 1rem",
                    right: 0,
                }}
            />
            <Stack
                direction="row"
                alignItems="center"
                sx={{ position: "absolute" }}
                spacing={3}
            >
                <Stack spacing={3}>
                    {icons.map((icon) => (
                        <Box
                            key={icon.id}
                            sx={{
                                width: "11.438rem",
                                height: "4.5rem",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor: "background.dark",
                                borderRadius: "1rem",
                            }}
                        >
                            {icon.img}
                        </Box>
                    ))}
                </Stack>
                <Stack direction="row" spacing={3}>
                    <ContactCard
                        img="https://s3-alpha-sig.figma.com/img/0df2/b40f/4f43a55b729d10d0d432da59b6599346?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L9-QLhGPADyGVNJsyTdT0bza8sPvt5R25xp6eoMBggdRxJtlek8QGF-Sd2cZRcqjwZBqx-qwkcQ4FqV1oYtfHKMi8NRdhCHX6NiBZhGdlCHbrKPC6KORSWtAjyVdena2VdkgyEDUro5arXA-Sf8mB~4zSZyOnLnf1G8TXNAU9mOYdE83A81MkMXArujOR53eIEiLhJixOOzsvkYkESUCK8MOKQSOCZqHAKx4yM82l5jPlB7Uux9pESU9tCjjzIcACs6hCB0Yg8xDog7KEX1xEpRqShgP9ucsiCYmvm~T5sFSVpVyAfOXhQVRUC9rJo-em5L0dtNTzkNB8MW7sZoC0g__"
                        title="Анастасія"
                    />
                    <ContactCard
                        img="https://s3-alpha-sig.figma.com/img/c191/a905/ef696ae91385b0ec893a49f7640d6114?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GsFLLu0cSqWYksSBwuiIC1lUHLbG-xrtPux4oH5wtPp7HbHEWzYbXP1kWrlodUsQBs2DIDw2rw-COjR6PdRp7Q-0xaWfyz9nzwh9Rdp5n-juq-ShnwXawVpD5JXGV97fkNrosrxVlhHYKGKHUGedz6aCyYONuia7Xnokf8TH92-wqGzRLcuCbI~eVmp1YJxEzUyJYdbgspJd1iyNGpBApIsSf6xcXi-bQTD7H~1IS-noCYeUgbHnIstGj4j15GhED-Pt57lx0iUv52ND9~VmAZT84so8Sys6RzmcFJSPtKLidsFMdQiftgSRUqZhlt2fZOn6a5wsnf7vH10GOixx9A__"
                        title="Яна"
                    />
                </Stack>
            </Stack>
        </Stack>
    );
};
