"use client";

import { useState } from "react";
import { SideBar } from "./SideBar";
import { ApplicationTable } from "./ApplicationTable";
import { ReviewTable } from "./ReviewTable";
import { TutorTable } from "./TutorTable";

export const AdminPage = ({ applications, reviews, tutors }) => {
    const [activeMenuItem, setActiveMenuItem] = useState("tutors");

    return (
        <>
            <SideBar setActiveMenuItem={setActiveMenuItem} />
            {activeMenuItem === "applications" && (
                <ApplicationTable applications={applications} />
            )}
            {activeMenuItem === "reviews" && <ReviewTable reviews={reviews} />}
            {activeMenuItem === "tutors" && <TutorTable tutors={tutors} />}
        </>
    );
};
