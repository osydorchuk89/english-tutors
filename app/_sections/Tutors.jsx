import { Stack } from "@mui/material";
import { TutorsDescription } from "../_components/TutorsDescription";
import { TutorsCards } from "../_components/TutorsCards";
import { getTutors } from "@/lib/actions";

export const Tutors = async () => {
    const tutors = await getTutors();

    return (
        <Stack
            id="tutors"
            direction={{ xxs: "column", sm: "row" }}
            spacing={{ xxs: 4, sm: 0 }}
            sx={{
                height: {
                    xxs: "1114px",
                    sm: "896px",
                    lg: "758px",
                    xl: "758px",
                },
                width: "100%",
                pl: { xxs: "16px", xs: "40px", md: "120px", xl: "200px" },
                my: { xxs: "80px", md: "120px", xl: "182px" },
                scrollMarginTop: "80px",
            }}
        >
            <TutorsDescription />
            <TutorsCards tutors={tutors} />
        </Stack>
    );
};
