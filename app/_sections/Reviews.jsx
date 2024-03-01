import { Stack, Paper } from "@mui/material";
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
                // height: { md: "1685px", xl: "1860px" },
                pl: { xxs: 0, xs: "20px", md: "40px", lg: "60px", xl: "100px" },
                mb: { xxs: "80px", md: "120px", xl: "182px" },
                scrollMarginTop: "100px",
            }}
        >
            <Stack
                direction={{ xxs: "column", md: "row" }}
                spacing={{ xxs: 8, xs: 10, md: 2.5, xl: 4 }}
                sx={{
                    position: "relative",
                    // maxHeight: {
                    //     xxs: "1783px",
                    //     xs: "1843px",
                    //     md: "1060px",
                    //     xl: "1161px",
                    // },
                    mb: { xxs: "64px", xs: "80px", xl: "104px" },
                }}
            >
                <Comments reviews={reviews} />
                <FeedbackCards screenshots={screenshots} />
            </Stack>
            <FeedbackForm />
        </Stack>
    );
};
