import { Stack, Typography, Box } from "@mui/material";
import { TryItCard } from "../_components/TryItCard";
import {
    iconInstagram,
    iconMail,
    iconTelegram,
    iconTikTok,
} from "../../lib/icons";

export const AboutUs = () => {
    return (
        <Stack
            id="about-us"
            direction="column"
            sx={{ px: "7.5rem", pt: "12.75rem", scrollMarginTop: "5rem" }}
        >
            <Stack direction="row">
                <Stack direction="column" sx={{ width: "90%" }}>
                    <Typography
                        sx={{
                            fontSize: "5rem",
                            fontWeight: 900,
                            width: "75rem",
                            mb: "1.5rem",
                        }}
                    >
                        Заговоріть англійською впевнено
                    </Typography>
                    <Typography sx={{ fontSize: "1.5rem", width: "36.875rem" }}>
                        Lorem ipsum dolor sit amet consectetur. Quam mauris
                        euismod magna fermentum vel risus nisi.fermentum vel
                        risus nisi.
                    </Typography>
                </Stack>
                <Stack
                    direction="column"
                    spacing={4}
                    justifyContent="flex-end"
                    alignItems="center"
                    sx={{ width: "1.5rem", ml: "auto", mr: 0 }}
                >
                    {iconInstagram}
                    {iconMail}
                    {iconTelegram}
                    {iconTikTok}
                </Stack>
            </Stack>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    my: "7.5rem",
                }}
            >
                <TryItCard />
            </Box>
        </Stack>
    );
};
