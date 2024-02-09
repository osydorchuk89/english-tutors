import { Stack } from "@mui/material";
import { FeedbackCards } from "../_components/FeedbackCards";
import { Comments } from "../_components/Comments";
import { FeedbackForm } from "../_components/FeedbackForm";

export const Reviews = () => {
    return (
        <Stack
            id="reviews"
            sx={{
                position: "relative",
                width: "100%",
                height: "103.625rem",
                pl: "7.5rem",
                mb: "7.5rem",
                scrollMarginTop: "5rem",
            }}
        >
            <Stack direction="row" sx={{ height: "60.438rem" }}>
                <Comments />
                <FeedbackCards />
            </Stack>
            <FeedbackForm />
        </Stack>
    );
};
