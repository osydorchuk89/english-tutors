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
                width: "100%",
                pl: { lg: "120px", xl: "200px" },
                my: { lg: "120px", xl: "182px" },
                scrollMarginTop: "80px",
            }}
        >
            <TutorsDescription />
            <TutorsCards tutors={tutors} />
        </Stack>
    );
};
