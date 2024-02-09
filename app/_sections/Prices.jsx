import { Box, Card, CardContent, Typography, Stack } from "@mui/material";
import { PriceCard } from "../_components/PriceCard";

const conditions = [
    "60 хвилин",
    "Якійсь текст",
    "По вашим умогам",
    "Підготовка до екзаменів",
];

export const Prices = () => {
    return (
        <Box
            id="prices"
            sx={{
                display: "flex",
                justifyContent: "center",
                width: "82.5rem",
                ml: "3.5rem",
                mb: "7rem",
                scrollMarginTop: "5rem",
            }}
        >
            <Card
                elevation={0}
                sx={{
                    width: "82.5rem",
                    height: "47.8125rem",
                    backgroundColor: "background.main",
                    borderRadius: "1rem",
                }}
            >
                <CardContent>
                    <Typography
                        sx={{
                            pt: "7.5rem",
                            pl: "3rem",
                            fontSize: "3rem",
                            fontWeight: 700,
                        }}
                    >
                        Вартість навчання
                    </Typography>
                    <Stack
                        direction="row"
                        spacing={5}
                        justifyContent="center"
                        sx={{
                            mt: "3.5rem",
                        }}
                    >
                        <PriceCard />
                        <PriceCard />
                        <PriceCard />
                    </Stack>
                    <Stack
                        direction="row"
                        justifyContent="center"
                        spacing={8}
                        sx={{
                            py: "3.5rem",
                        }}
                    >
                        {conditions.map((item) => (
                            <Typography
                                key={item}
                                sx={{
                                    fontSize: "1.5rem",
                                    background: "#FFF",
                                    px: "1.5rem",
                                    py: "0.75rem",
                                    borderRadius: "0.5rem",
                                }}
                            >
                                {item}
                            </Typography>
                        ))}
                    </Stack>
                </CardContent>
            </Card>
        </Box>
    );
};
