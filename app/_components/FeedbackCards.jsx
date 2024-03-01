"use client";

import Image from "next/image";
import { useState, useLayoutEffect } from "react";
import { Box, Stack, Paper } from "@mui/material";
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

    if (typeof window !== "undefined") {
        const scrollX = window.scrollX;
        const scrollY = window.scrollY;

        useLayoutEffect(() => {
            window.scrollTo(scrollX, scrollY);
        });
    }

    return (
        <Stack
            useFlexGap
            direction="column"
            spacing={{ xxs: 5, xs: 3, lg: 5, xl: 4 }}
            justifyContent="flex-start"
            alignItems={{ xxs: "center", md: "flex-end" }}
            sx={{
                position: "relative",
                py: { xxs: "48px", sm: "80px", md: "115px", xl: "140px" },
                zIndex: 10,
            }}
        >
            <Box
                sx={{
                    display: "grid",
                    minWidth: {
                        xxs: "358px",
                        xs: "496px",
                        lg: "590px",
                        xl: "615px",
                    },
                    maxWidth: {
                        xxs: "calc(100% - 32px)",
                        xs: "auto",
                    },
                    height: { xxs: "482px", xs: "670px", lg: "793px" },
                    mr: {
                        xxs: 0,
                        md: "80px",
                        lg: "120px",
                        xl: "200px",
                    },
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gridTemplateRows: "repeat(2, 1fr)",
                    gridColumnGap: "12px",
                    gridRowGap: "24px",
                    zIndex: 10,
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
                                sizes="(min-width: 0px) 100vw"
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
                mr={{
                    xxs: 0,
                    md: "80px",
                    lg: "120px",
                    xl: "200px",
                }}
            />
            <Paper
                sx={{
                    position: "absolute",
                    right: 0,
                    bottom: 0,
                    left: {
                        xxs: "101px",
                        xs: "298px",
                        md: "15%",
                        lg: "25%",
                        xl: "25%",
                        xxl: "30%",
                    },
                    height: "100%",
                    backgroundColor: "lightBlue.light",
                    borderRadius: "24px 0 0 24px",
                    boxShadow: "0px 0px 48px 0px #14313D1F",
                    zIndex: 1,
                }}
            />
        </Stack>
    );
};
