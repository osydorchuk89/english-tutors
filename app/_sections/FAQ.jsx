import { Box, Typography } from "@mui/material";
import { FAQAccordion } from "../_components/FAQAccordion";

export const FAQ = () => {
    return (
        <Box
            id="faq"
            sx={{
                width: "82.5rem",
                height: "56.25rem",
                ml: "7.5rem",
                mb: "7.5rem",
                scrollMarginTop: "5rem",
            }}
        >
            <Typography sx={{ fontSize: "3rem", fontWeight: 700, mb: "1rem" }}>
                FAQ
            </Typography>
            <Typography
                sx={{ fontSize: "1.5rem", fontWeight: 600, mb: "3rem" }}
            >
                Найпопулярніші запитання
            </Typography>
            <FAQAccordion />
        </Box>
    );
};
