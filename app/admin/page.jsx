import { Box } from "@mui/material";
import { AdminPage } from "./_components/AdminPage";
import { getApplications, getReviews, getTutors } from "@/lib/actions";

export default async function Admin() {
    const applications = await getApplications();
    const reviews = await getReviews();
    const tutors = await getTutors();

    return (
        <Box sx={{ display: "flex", flexDirection: "row" }}>
            <AdminPage
                applications={applications}
                reviews={reviews}
                tutors={tutors}
            />
        </Box>
    );
}
