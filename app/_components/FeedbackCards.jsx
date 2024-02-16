"use client";

import Image from "next/image";
import { Box, ImageList, ImageListItem } from "@mui/material";
import { NavButton } from "./NavButtons";
import { iconUp, iconDown } from "@/lib/icons";

export const FeedbackCards = ({ screenshots }) => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flexStart",
                alignItems: "center",
                pt: "128px",
                zIndex: 10,
            }}
        >
            <NavButton icon={iconUp} onClick={() => {}} />
            <ImageList
                variant="masonry"
                cols={2}
                gap={10}
                sx={{
                    width: "590px",
                    height: "640px",
                    my: "24px",
                }}
            >
                {screenshots.map((item) => (
                    <ImageListItem
                        key={item.id}
                        sx={{ borderRadius: "8px", overflow: "hidden" }}
                    >
                        <img src={item.photo} alt="screenshot" loading="lazy" />
                    </ImageListItem>
                ))}
            </ImageList>
            <NavButton icon={iconDown} onClick={() => {}} />
        </Box>
    );
};
