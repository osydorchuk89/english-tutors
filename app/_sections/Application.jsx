import { Stack, Box, Typography } from "@mui/material";
import { ApplicationForm } from "../_components/ApplicationForm";

export const Application = () => {
    return (
        <Stack
            id="application"
            direction="row"
            justifyContent="start"
            sx={{
                width: "82.625rem",
                mb: "7.5rem",
            }}
        >
            <ApplicationForm borderRadiusProp="0 1rem 1rem 0" />
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "30.5rem",
                }}
            >
                <Typography
                    sx={{
                        fontSize: "1.375rem",
                        pl: "2rem",
                    }}
                >
                    Lorem ipsum dolor sit amet consectetur. Vestibulum accumsan
                    suspendisse eget magna sit viverra maecenas semper. Lorem
                    quis auctor
                </Typography>
            </Box>
        </Stack>
    );
};
