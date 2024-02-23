"use client";

import Image from "next/image";
import { useState } from "react";
import { Box, Stack } from "@mui/material";
import { NavButton } from "./NavButtons";
import { iconDown } from "@/lib/icons";

export const FeedbackCards = ({ screenshots }) => {
    const [screenshotSlice, setScreenshotSlice] = useState([0, 1, 2, 3]);

    const handlePresButton = () => {
        let newSlice = [];
        for (const ind of screenshotSlice) {
            if (
                ind === screenshots.length - 1 ||
                ind === screenshots.length - 2
            ) {
                newSlice.push(ind - (screenshots.length - 2));
            } else {
                newSlice.push(ind + 2);
            }
        }
        setScreenshotSlice(newSlice);
    };

    return (
        <Stack
            direction="column"
            spacing={{ xxs: 5, xs: 3, lg: 5, xl: 4 }}
            justifyContent="flex-start"
            alignItems="center"
            sx={{
                pt: { xxs: 0, md: "115px", xl: "140px" },
                zIndex: 10,
            }}
        >
            <Box
                sx={{
                    display: "grid",
                    minWidth: {
                        xxs: "358px",
                        xs: "496px",
                        md: "590px",
                        xl: "615px",
                    },
                    maxWidth: {
                        xxs: "calc(100% - 32px)",
                        xs: "auto",
                    },
                    height: { xxs: "482px", xs: "670px", md: "793px" },
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gridTemplateRows: "repeat(2, 1fr)",
                    gridColumnGap: "12px",
                    gridRowGap: "24px",
                }}
            >
                {screenshotSlice
                    .map((ind) => screenshots[ind])
                    .map((item) => (
                        <Box
                            key={item.id}
                            sx={{
                                position: "relative",
                                borderRadius: "8px",
                                overflow: "hidden",
                            }}
                        >
                            <Image
                                src={item.photo}
                                fill
                                sizes="100vw"
                                alt="screenshot"
                                loading="lazy"
                            />
                        </Box>
                    ))}
            </Box>
            <NavButton
                _id="button-down"
                icon={iconDown}
                onClick={handlePresButton}
            />
        </Stack>
    );
};
