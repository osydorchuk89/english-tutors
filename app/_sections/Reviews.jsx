import { Stack, Box } from "@mui/material";
import { FeedbackCards } from "../_components/FeedbackCards";
import { Comments } from "../_components/Comments";
import { FeedbackForm } from "../_components/FeedbackForm";
import { getApprovedReviews } from "@/lib/actions";
import { getScreenshots } from "@/lib/actions";

export const Reviews = async () => {
    const reviews = await getApprovedReviews();
    const screenshots = await getScreenshots();

    return (
        <Stack
            id="reviews"
            sx={{
                position: "relative",
                height: "1685px",
                m: "0 0 120px 60px",
                scrollMarginTop: "80px",
            }}
        >
            <Stack
                direction="row"
                spacing={2.5}
                sx={{ position: "relative", height: "1060px", mb: "80px" }}
            >
                <Comments reviews={reviews} />
                <FeedbackCards screenshots={screenshots} />
                <Box
                    sx={{
                        position: "absolute",
                        right: 0,
                        width: "608px",
                        height: "100%",
                        backgroundColor: "lightBlue.light",
                        borderRadius: "24px 0 0 24px",
                        boxShadow: "0px 0px 48px 0px #14313D1F",
                        zIndex: 1,
                    }}
                />
            </Stack>
            <FeedbackForm />
        </Stack>
    );
};
