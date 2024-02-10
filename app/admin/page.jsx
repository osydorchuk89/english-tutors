import { Box } from "@mui/material";
import { AdminPage } from "./_components/AdminPage";
import { getApplications } from "@/lib/actions";
import { getReviews } from "@/lib/actions";

export default async function Admin() {
    const applications = await getApplications();
    const reviews = await getReviews();

    return (
        <Box sx={{ display: "flex", flexDirection: "row" }}>
            <AdminPage applications={applications} reviews={reviews} />
        </Box>
    );
}
