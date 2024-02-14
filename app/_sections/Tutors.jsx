import { Stack } from "@mui/material";
import { TutorsDescription } from "../_components/TutorsDescription";
import { TutorsCards } from "../_components/TutorsCards";

export const Tutors = () => {
    return (
        <Stack
            id="tutors"
            direction="row"
            sx={{
                height: "758px",
                mt: "120px",
                ml: "120px",
                mr: 0,
                scrollMarginTop: "80px",
            }}
        >
            <TutorsDescription />
            <TutorsCards />
        </Stack>
    );
};
