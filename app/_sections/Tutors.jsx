import { Stack } from "@mui/material";
import { TutorsDescription } from "../_components/TutorsDescription";
import { TutorsCards } from "../_components/TutorsCards";
import { getTutors } from "@/lib/actions";

export const Tutors = async () => {
    const tutors = await getTutors();

    return (
        <Stack
            id="tutors"
            direction="row"
            sx={{
                height: "758px",
                m: "120px 0 120px 120px",
                scrollMarginTop: "80px",
            }}
        >
            <TutorsDescription />
            <TutorsCards tutors={tutors} />
        </Stack>
    );
};
