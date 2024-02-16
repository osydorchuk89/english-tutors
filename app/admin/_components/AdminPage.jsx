"use client";

import { useState } from "react";
import { SideBar } from "./SideBar";
import { ApplicationTable } from "./ApplicationTable";
import { ReviewTable } from "./ReviewTable";
import { TutorTable } from "./TutorTable";
import { ScreenshotTable } from "./ScreenshotTable";

export const AdminPage = ({ applications, reviews, tutors, screenshots }) => {
    const [activeMenuItem, setActiveMenuItem] = useState("tutors");

    return (
        <>
            <SideBar setActiveMenuItem={setActiveMenuItem} />
            {activeMenuItem === "applications" && (
                <ApplicationTable applications={applications} />
            )}
            {activeMenuItem === "reviews" && <ReviewTable reviews={reviews} />}
            {activeMenuItem === "tutors" && <TutorTable tutors={tutors} />}
            {activeMenuItem === "screenshots" && (
                <ScreenshotTable screenshots={screenshots} />
            )}
        </>
    );
};
