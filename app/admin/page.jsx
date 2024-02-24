import { Box } from "@mui/material";
import { AdminPage } from "./_components/AdminPage";
import {
    getApplications,
    getReviews,
    getTutors,
    getScreenshots,
} from "@/lib/actions";

export default async function Admin() {
    const applications = await getApplications();
    const reviews = await getReviews();
    const tutors = await getTutors();
    const screenshots = await getScreenshots();

    return (
        <Box sx={{ display: "flex", flexDirection: "row" }}>
            <AdminPage
                applications={applications}
                reviews={reviews}
                tutors={tutors}
                screenshots={screenshots}
            />
        </Box>
    );
}
