import { Box, Typography } from "@mui/material";
import { FAQAccordion } from "../_components/FAQAccordion";

export const FAQ = () => {
    return (
        <Box
            id="faq"
            sx={{
                minHeight: {
                    xxs: "469px",
                    xs: "639px",
                    md: "749px",
                    xl: "873px",
                },
                mb: { xxs: "80px", md: "120px", xl: "182px" },
                mx: { xxs: 0, xs: "20px", md: "40px", lg: "60px", xl: "100px" },
                scrollMarginTop: "100px",
                alignSelf: "center",
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
                    mb: { xxs: "16px", md: "24px" },
                    pl: { xxs: "16px", xs: "20px", md: "60px", xl: "100px" },
                }}
            >
                FAQ
            </Typography>
            <Typography
                sx={{
                    fontSize: {
                        xxs: "16px",
                        xs: "22px",
                        md: "18px",
                        xl: "22px",
                    },
                    fontWeight: 600,
                    mb: { xxs: "32px", xs: "40px", md: "56px", xl: "72px" },
                    pl: { xxs: "16px", xs: "20px", md: "60px", xl: "100px" },
                }}
            >
                Найпопулярніші запитання
            </Typography>
            <FAQAccordion />
        </Box>
    );
};
