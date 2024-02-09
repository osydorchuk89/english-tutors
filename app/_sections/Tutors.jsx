import { Stack } from "@mui/material";
import { TutorsDescription } from "../_components/TutorsDescription";
import { TutorsCards } from "../_components/TutorsCards";

export const Tutors = () => {
    return (
        <Stack
            id="tutors"
            direction="row"
            sx={{
                height: "67rem",
                ml: "7.5rem",
                mb: "7.5rem",
                scrollMarginTop: "5rem",
            }}
        >
            <TutorsDescription />
            <TutorsCards />
        </Stack>
    );
};
