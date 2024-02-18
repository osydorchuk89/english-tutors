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
                width: "100%",
                height: { md: "1685px", xl: "1860px" },
                pl: { md: "60px", xl: "100px" },
                m: "0 0 120px 0",
                scrollMarginTop: "80px",
            }}
        >
            <Stack
                direction="row"
                spacing={{ md: 2.5, xl: 4 }}
                sx={{
                    position: "relative",
                    minHeight: { md: "1060px", xl: "1161px" },
                    mb: { md: "80px", xl: "104px" },
                }}
            >
                <Comments reviews={reviews} />
                <FeedbackCards screenshots={screenshots} />
                <Box
                    sx={{
                        position: "absolute",
                        right: 0,
                        // width: { md: "608px", xl: "685px" },
                        left: { md: "832px", xl: "1235px" },
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
