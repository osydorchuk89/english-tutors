import { Box, Typography } from "@mui/material";
import { FAQAccordion } from "../_components/FAQAccordion";

export const FAQ = () => {
    return (
        <Box
            id="faq"
            sx={{
                minHeight: { md: "749px", xl: "873px" },
                mb: "60px",
                mx: { md: "60px", xl: "100px" },
                scrollMarginTop: "80px",
                alignSelf: "center",
            }}
        >
            <Typography
                sx={{
                    fontSize: { md: "48px", xl: "56px" },
                    fontWeight: 700,
                    mb: "24px",
                    pl: { md: "60px", xl: "100px" },
                }}
            >
                FAQ
            </Typography>
            <Typography
                sx={{
                    fontSize: { md: "18px", xl: "22px" },
                    fontWeight: 600,
                    mb: { md: "56px", xl: "72px" },
                    pl: { md: "60px", xl: "100px" },
                }}
            >
                Найпопулярніші запитання
            </Typography>
            <FAQAccordion />
        </Box>
    );
};
