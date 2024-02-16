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
            }}
        >
            <ApplicationForm borderRadiusProp="24px" />
        </Box>
    );
};
