import { Stack, Typography } from "@mui/material";
import { ContactButton } from "./_components/ContactButton";

export default function NotFound() {
    return (
        <Stack
            direction="column"
            spacing={5}
            justifyContent="center"
            alignItems="center"
            sx={{
                width: "100vw",
                height: "100vh",
            }}
        >
            <Typography variant="h3">Отакої...</Typography>
            <Typography variant="body1">Сторінку не знайдено</Typography>
            <ContactButton
                text="Повернутись додому"
                href="/"
                hoverBackgroundColor="button.hover"
                pressedBackgroundColor="button.pressed"
            />
        </Stack>
    );
}
