"use client";

import { useState, useLayoutEffect } from "react";
import { Stack, Typography, Box } from "@mui/material";
import { NavButton } from "./NavButtons";
import { iconDown } from "@/lib/icons";

export const Comments = ({ reviews }) => {
    const [reviewSlice, setReviewSlice] = useState([0, 1, 2]);

    const handlePresButton = () => {
        let newSlice = [];
        for (const ind of reviewSlice) {
            if (ind === reviews.length - 1) {
                newSlice.push(ind - (reviews.length - 1));
            } else {
                newSlice.push(ind + 1);
            }
        }
        setReviewSlice(newSlice);
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
            sx={{
                width: { xxs: "100%", md: "650px", xl: "973px" },
                maxHeight: {
                    xxs: "calc(100% - 64px)",
                    xs: "calc(100% - 160px)",
                    md: "100%",
                },
                pl: {
                    xxs: "16px",
                    xs: "20px",
                    md: "40px",
                    lg: "60px",
                    xl: "100px",
                },
                flexGrow: 1,
            }}
        >
            <Typography
                sx={{
                    height: { xxs: "41px", xs: "49px", md: "55px", xl: "68px" },
                    fontSize: {
                        xxs: "34px",
                        xs: "40px",
                        md: "48px",
                        xl: "56px",
                    },
                    fontWeight: 700,
                    mb: { xxs: "32px", xs: "40px", md: "56px", xl: "72px" },
                }}
            >
                Відгуки
            </Typography>
            <Stack
                direction="column"
                justifyContent="space-around"
                spacing={{ xxs: 2, xs: 3 }}
                sx={{
                    // ml: { xxs: 0, xs: "-20px", md: "-60px", lg: 0, xl: 0 },
                    mr: { xxs: "16px", xs: "40px", md: 0 },
                    mb: { xxs: "40px", xs: "24px", lg: "40px", xl: "32px" },
                    flexGrow: 1,
                }}
            >
                {reviewSlice
                    .map((ind) => reviews[ind])
                    .map((item, index) => (
                        <Box
                            key={item.id}
                            sx={{
                                width: {
                                    xxs: "100%",
                                    xs: "496px",
                                    sm: "614px",
                                    md: "425px",
                                    lg: "488px",
                                    xl: "614px",
                                },
                                minHeight: {
                                    xxs: "209px",
                                    xs: "153px",
                                    md: "181px",
                                    xl: "211px",
                                },
                                backgroundColor: "lightBlue.dark",
                                borderRadius: "16px",
                                p: { xxs: "16px", xs: "24px" },
                                alignSelf:
                                    index % 2 === 0 ? "flex-start" : "flex-end",
                                boxShadow: `5px 4px 6px 0px #14313D17,
                                11px 10px 9px 0px #14313D0D,
                                19px 18px 10px 0px #14313D03,
                                30px 28px 11px 0px #14313D05,
                                0px 4px 4px 0px #14313D40,
                                -4px -4px 4px 0px #14313D1A`,
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: { xxs: "24px", xl: "32px" },
                                    fontWeight: 700,
                                    lineHeight: {
                                        xxs: "29.26px",
                                        xl: "39.01px",
                                    },
                                    mb: "16px",
                                }}
                            >
                                {item.name}
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: {
                                        xxs: "18px",
                                        xs: "16px",
                                        lg: "18px",
                                        xl: "22px",
                                    },
                                    lineHeight: {
                                        xxs: "21.94px",
                                        xs: "19.5px",
                                        md: "21.94px",
                                        xl: "26.82px",
                                    },
                                }}
                            >
                                {item.text}
                            </Typography>
                        </Box>
                    ))}
            </Stack>
            <NavButton
                _id="button-down"
                icon={iconDown}
                onClick={handlePresButton}
            />
        </Stack>
    );
};
