import { Stack } from "@mui/material";
import { NavBar } from "./_components/NavBar";
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
                <NavBar
                    component="header"
                    position="sticky"
                    styles={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        px: "7.5rem",
                        backgroundColor: "background.light",
                    }}
                />
                <AboutUs />
                <Prices />
                <Tutors />
                <Application />
                <Contacts />
                <Reviews />
                <FAQ />
                <NavBar
                    component="footer"
                    position="static"
                    styles={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        width: "100%",
                        height: "8.688rem",
                        px: "7.5rem",
                        backgroundColor: "background.dark",
                        borderRadius: "2rem 2rem 0 0",
                        top: "auto",
                        bottom: 0,
                    }}
                />
            </Stack>
        </main>
    );
}
