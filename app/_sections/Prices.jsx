import { Box, Paper, Typography, Stack } from "@mui/material";
import { PriceCard } from "../_components/PriceCard";

const conditions = [
    { id: 1, text: "60 хвилин" },
    { id: 2, text: "Продуктивність" },
    { id: 3, text: "На звʼязку 24/7" },
    { id: 4, text: "Гарантований результат" },
];

const cardsContent = [
    {
        id: 1,
        title: "Індивідуально",
        offers: [
            { id: 1, lessons: "1 урок", price: "300 ₴", discount: "" },
            {
                id: 2,
                lessons: "4 уроки",
                price: "1150 ₴",
                discount: "4% знижка",
            },
            {
                id: 3,
                lessons: "8 уроків",
                price: "2200 ₴",
                discount: "8% знижка",
            },
            {
                id: 4,
                lessons: "12 уроків",
                price: "3165 ₴",
                discount: "12% знижка",
            },
        ],
    },
    {
        id: 2,
        title: "Парні",
        offers: [
            { id: 1, lessons: "1 урок", price: "250 ₴", discount: "" },
            {
                id: 2,
                lessons: "4 уроки",
                price: "960 ₴",
                discount: "4% знижка",
            },
            {
                id: 3,
                lessons: "8 уроків",
                price: "1840 ₴",
                discount: "8% знижка",
            },
            {
                id: 4,
                lessons: "12 уроків",
                price: "2640 ₴",
                discount: "12% знижка",
            },
        ],
    },
    {
        id: 3,
        title: "Групові",
        offers: [
            { id: 1, lessons: "1 урок", price: "150 ₴", discount: "" },
            {
                id: 2,
                lessons: "4 уроки",
                price: "600 ₴",
                discount: "4% знижка",
            },
            {
                id: 3,
                lessons: "8 уроків",
                price: "1200 ₴",
                discount: "8% знижка",
            },
            {
                id: 4,
                lessons: "12 уроків",
                price: "1800 ₴",
                discount: "12% знижка",
            },
        ],
    },
];

export const Prices = () => {
    return (
        <Box
            id="prices"
            sx={{
                display: "flex",
                justifyContent: "center",
                mt: "150px",
                scrollMarginTop: "80px",
            }}
        >
            <Paper
                sx={{
                    position: "relative",
                    width: "100%",
                    height: "765px",
                    mx: "60px",
                    backgroundColor: "lightBlue.light",
                    borderRadius: "1rem",
                    boxShadow: "0px 0px 48px 0px #14313D1F",
                }}
            >
                <Typography
                    sx={{
                        pt: "120px",
                        pb: "56px",
                        pl: "60px",
                        fontSize: "3rem",
                        fontWeight: 700,
                    }}
                >
                    Вартість навчання
                </Typography>
                <Paper
                    sx={{
                        position: "absolute",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        top: "60px",
                        right: "60px",
                        width: "418px",
                        height: "69px",
                        borderRadius: "8px",
                        backgroundColor: "darkBlue.main",
                        boxShadow: `5px 4px 6px 0px #14313D17, 
                            1px 10px 9px 0px #14313D0D, 
                            19px 18px 10px 0px #14313D03, 
                            30px 28px 11px 0px #14313D05, 
                            0px 4px 4px 0px #14313D40, 
                            -4px -4px 4px 0px #14313D1A`,
                        gap: "8px",
                    }}
                >
                    <Typography
                        sx={{
                            color: "lightBlue.light",
                            fontSize: "24px",
                            fontWeight: 700,
                            lineHeight: "29.26px",
                        }}
                    >
                        Скидка 20% на 24 заняття
                    </Typography>
                </Paper>
                <Stack
                    direction="row"
                    spacing={3}
                    justifyContent="space-between"
                    sx={{
                        px: "60px",
                        mb: "56px",
                    }}
                >
                    {cardsContent.map((item) => (
                        <PriceCard
                            key={item.id}
                            title={item.title}
                            offers={item.offers}
                        />
                    ))}
                </Stack>
                <Stack direction="row" justifyContent="center" spacing={8}>
                    {conditions.map((item) => (
                        <Box
                            key={item.id}
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                height: "53px",
                                borderRadius: "0.5rem",
                                backgroundColor: "lightBlue.main",
                                px: "24px",
                                py: "12px",
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: "24px",
                                }}
                            >
                                {item.text}
                            </Typography>
                        </Box>
                    ))}
                </Stack>
            </Paper>
        </Box>
    );
};
