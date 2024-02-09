import {
    Box,
    TextField,
    Stack,
    Card,
    CardContent,
    Typography,
} from "@mui/material";
import { OrderButton } from "@/app/_components/OrderButton";

export default function AdminLogin() {
    return (
        <Box
            sx={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Card
                elevation={0}
                sx={{
                    backgroundColor: "background.main",
                    width: "35rem",
                    height: "25rem",
                    borderRadius: "1rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Typography
                    sx={{
                        fontSize: "1.5rem",
                        fontWeight: 700,
                        mb: "2rem",
                    }}
                >
                    Вхід до адмін панелі
                </Typography>
                <form>
                    <Stack spacing={5} sx={{ mb: "2rem" }}>
                        <TextField
                            variant="filled"
                            type="text"
                            label="E-mail"
                            name="email"
                            sx={{ width: "20rem" }}
                            InputProps={{
                                disableUnderline: true,
                                sx: { borderRadius: "0.5rem" },
                            }}
                        ></TextField>
                        <TextField
                            variant="filled"
                            type="password"
                            label="Пароль"
                            name="password"
                            sx={{ width: "20rem" }}
                            InputProps={{
                                disableUnderline: true,
                                sx: { borderRadius: "0.5rem" },
                            }}
                        ></TextField>
                    </Stack>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <OrderButton text="Увійти" />
                    </Box>
                </form>
            </Card>
        </Box>
    );
}
