import { Stack, Box, Typography } from "@mui/material";
import { ApplicationForm } from "../_components/ApplicationForm";

export const Application = () => {
    return (
        <Box
            id="application"
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                minHeight: {
                    xxs: "513px",
                    sm: "636px",
                    md: "706px",
                    xl: "909px",
                },
            }}
        >
            <ApplicationForm borderRadiusProp="24px" />
        </Box>
    );
};
