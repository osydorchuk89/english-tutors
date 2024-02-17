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
                mt: { lg: "150px", xl: "160px" },
                scrollMarginTop: "80px",
            }}
        >
            <Paper
                sx={{
                    position: "relative",
                    width: "100%",
                    height: { lg: "773px", xl: "901px" },
                    mx: { lg: "60px", xl: "100px" },
                    backgroundColor: "lightBlue.light",
                    borderRadius: "1rem",
                    boxShadow: "0px 0px 48px 0px #14313D1F",
                }}
            >
                <Typography
                    sx={{
                        pt: { lg: "120px", xl: "144px" },
                        pb: { lg: "56px", xl: "72px" },
                        pl: { lg: "60px", xl: "100px" },
                        fontSize: { lg: "48px", xl: "56px" },
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
                        top: { lg: "60px", xl: "72px" },
                        right: { lg: "60px", xl: "100px" },
                        width: { lg: "418px", xl: "530px" },
                        height: { lg: "69px", xl: "79px" },
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
                            fontSize: { lg: "24px", xl: "32px" },
                            fontWeight: 700,
                        }}
                    >
                        Знижка 20% на 24 заняття
                    </Typography>
                </Paper>
                <Stack
                    direction="row"
                    spacing={{ lg: 2.5, xl: 4 }}
                    justifyContent="space-between"
                    sx={{
                        px: { lg: "60px", xl: "100px" },
                        mb: { lg: "56px", xl: "72px" },
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
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    spacing={{ lg: 8, xl: 12.5 }}
                    sx={{
                        mx: { lg: "60px", xl: "100px" },
                    }}
                >
                    {conditions.map((item) => (
                        <Box
                            key={item.id}
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: "0.5rem",
                                backgroundColor: "lightBlue.main",
                                px: "24px",
                                py: "12px",
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: { lg: "24px", xl: "28px" },
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
