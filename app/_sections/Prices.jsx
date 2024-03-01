import { Box, Paper, Typography, Stack } from "@mui/material";
import { PriceCard } from "../_components/PriceCard";
import { LessonConditions } from "../_components/LessonConditions";

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
                mt: { xxs: "64px", xs: "80px", md: "150px", xl: "160px" },
                scrollMarginTop: "100px",
            }}
        >
            <Paper
                sx={{
                    position: "relative",
                    width: {
                        xxs: "100%",
                        xs: "calc(100% - 40px)",
                        md: "calc(100% - 80px)",
                        lg: "calc(100% - 120px)",
                        xl: "calc(100% - 200px)",
                    },
                    minHeight: {
                        xxs: "1654px",
                        xs: "1080px",
                        md: "773px",
                        xl: "901px",
                    },
                    mx: {
                        xxs: 0,
                        xs: "20px",
                        md: "40px",
                        lg: "60px",
                        xl: "100px",
                    },
                    pb: { xxs: "64px", xs: "80px", md: "60px", xl: "72px" },
                    backgroundColor: "lightBlue.light",
                    borderRadius: "16px",
                    boxShadow: "0px 0px 48px 0px #14313D1F",
                }}
            >
                <Typography
                    sx={{
                        pt: {
                            xxs: "200px",
                            sm: "150px",
                            lg: "120px",
                            xl: "144px",
                        },
                        pb: { xxs: "32px", sm: "40px", md: "56px", xl: "72px" },
                        pl: {
                            xxs: "16px",
                            sm: "20px",
                            md: "40px",
                            lg: "60px",
                            xl: "100px",
                        },
                        fontSize: {
                            xxs: "34px",
                            sm: "40px",
                            md: "48px",
                            xl: "56px",
                        },
                        fontWeight: 700,
                        textAlign: { xxs: "center", sm: "left" },
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
                        top: {
                            xxs: "64px",
                            sm: "40px",
                            lg: "60px",
                            xl: "72px",
                        },
                        right: {
                            xxs: 0,
                            sm: "20px",
                            md: "40px",
                            lg: "60px",
                            xl: "100px",
                        },
                        left: { xxs: 0, sm: "auto" },
                        mx: "auto",
                        p: { xxs: "20px 47px 20px 47px", xs: 0 },
                        width: { xxs: "270px", xs: "418px", xl: "530px" },
                        height: { xxs: "98px", xs: "69px", xl: "79px" },
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
                            fontSize: { xxs: "24px", xl: "32px" },
                            fontWeight: 700,
                        }}
                    >
                        Знижка 20% на 24 заняття
                    </Typography>
                </Paper>
                <Stack
                    direction={{ xxs: "column", sm: "row" }}
                    flexWrap={{ xxs: "nowrap", sm: "wrap", md: "nowrap" }}
                    useFlexGap={{ xxs: false, sm: true, md: false }}
                    spacing={{ xxs: 2, sm: 2.5, xl: 4 }}
                    justifyContent="space-between"
                    alignItems={{ xxs: "center", sm: "normal" }}
                    sx={{
                        px: { sm: "20px", md: "40px", lg: "60px", xl: "100px" },
                        mb: { md: "56px", xl: "72px" },
                    }}
                >
                    {cardsContent.map((item) => (
                        <PriceCard
                            key={item.id}
                            title={item.title}
                            offers={item.offers}
                        />
                    ))}
                    <Box
                        sx={{
                            display: { xxs: "block", md: "none" },
                            width: { xxs: "100%", sm: "auto" },
                        }}
                    >
                        <LessonConditions direction="column" />
                    </Box>
                </Stack>
                <Box
                    sx={{
                        display: { xxs: "none", md: "block" },
                    }}
                >
                    <LessonConditions direction="row" />
                </Box>
            </Paper>
        </Box>
    );
};
