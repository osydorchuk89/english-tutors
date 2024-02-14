import { Stack } from "@mui/material";
import { TopNavBar } from "./_components/TopNavBar";
import { AboutUs } from "./_sections/AboutUs";
import { Prices } from "./_sections/Prices";
import { Tutors } from "./_sections/Tutors";
import { Application } from "./_sections/Application";
import { Contacts } from "./_sections/Contacts";
import { Reviews } from "./_sections/Reviews";
import { FAQ } from "./_sections/FAQ";

export default function Home() {
    return (
        <main>
            <Stack>
                <TopNavBar />
                <AboutUs />
                <Prices />
                <Tutors />
                <Application />
                <Contacts />
                <Reviews />
                <FAQ />
            </Stack>
        </main>
    );
}
