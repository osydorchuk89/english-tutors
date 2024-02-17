import { Box, Typography } from "@mui/material";
import { FAQAccordion } from "../_components/FAQAccordion";

export const FAQ = () => {
    return (
        <Box
            id="faq"
            sx={{
                width: "82.5rem",
                minHeight: "749px",
                my: "60px",
                pl: "60px",
                scrollMarginTop: "80px",
                alignSelf: "center",
                width: "calc(100% - 120px)",
            }}
        >
            <Typography
                sx={{
                    fontSize: "48px",
                    fontWeight: 700,
                    mb: "24px",
                }}
            >
                FAQ
            </Typography>
            <Typography sx={{ fontSize: "18px", fontWeight: 600, mb: "56px" }}>
                Найпопулярніші запитання
            </Typography>
            <FAQAccordion />
        </Box>
    );
};
