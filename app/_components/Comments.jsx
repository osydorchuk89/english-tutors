"use client";

import { useState, useLayoutEffect } from "react";
import { Stack, Typography, Box } from "@mui/material";
import { NavButton } from "./NavButtons";
import { iconUp, iconDown } from "@/lib/icons";

export const Comments = ({ reviews }) => {
    const buttonDownDisabled = reviews.length < 5;
    const [reviewSlice, setReviewSlice] = useState([0, 4]);
    const [buttonDisabled, setButtonDisabled] = useState({
        buttonUp: true,
        buttonDown: buttonDownDisabled,
    });

    const handlePresButton = (event) => {
        console.log(event.target);
        const buttonUpPressed = ["button-up", "svg-up", "path-up"].includes(
            event.target.id
        );
        const buttonDownPressed = [
            "button-down",
            "svg-down",
            "path-down",
        ].includes(event.target.id);
        let newReviewSlice = [];

        if (buttonUpPressed) {
            setReviewSlice((prevSlice) => prevSlice.map((index) => index - 1));
            newReviewSlice = reviewSlice.map((index) => index - 1);
        }

        if (buttonDownPressed) {
            setReviewSlice((prevSlice) => prevSlice.map((index) => index + 1));
            newReviewSlice = reviewSlice.map((index) => index + 1);
        }

        if (newReviewSlice[0] === 0) {
            setButtonDisabled((prevState) => ({
                ...prevState,
                buttonUp: true,
            }));
        } else {
            setButtonDisabled((prevState) => ({
                ...prevState,
                buttonUp: false,
            }));
        }

        if (newReviewSlice[1] === reviews.length) {
            setButtonDisabled((prevState) => ({
                ...prevState,
                buttonDown: true,
            }));
        } else {
            setButtonDisabled((prevState) => ({
                ...prevState,
                buttonDown: false,
            }));
        }
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
                width: { lg: "650px", xl: "973px" },
                height: "100%",
                pl: { lg: "60px", xl: "100px" },
            }}
        >
            <Typography
                sx={{
                    height: { lg: "55px", xl: "68px" },
                    fontSize: { lg: "48px", xl: "56px" },
                    fontWeight: 700,
                    mb: { lg: "56px", xl: "72px" },
                }}
            >
                Відгуки
            </Typography>
            <Stack
                direction="column"
                spacing={3}
                sx={{ ml: { lg: "-60px", lgr: 0, xl: 0 } }}
            >
                <NavButton
                    _id="button-up"
                    icon={iconUp}
                    onClick={handlePresButton}
                    disabled={buttonDisabled.buttonUp}
                />
                {reviews.slice(...reviewSlice).map((item, index) => (
                    <Box
                        key={item.id}
                        sx={{
                            width: { lg: "425px", lgr: "488px", xl: "614px" },
                            height: { lg: "181px", xl: "211px" },
                            backgroundColor: "lightBlue.dark",
                            borderRadius: "16px",
                            p: "24px",
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
                                fontSize: { lg: "24px", xl: "32px" },
                                fontWeight: 700,
                                lineHeight: { lg: "29.26px", xl: "39.01px" },
                                mb: "16px",
                            }}
                        >
                            {item.name}
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: {
                                    lg: "16px",
                                    lgr: "18px",
                                    xl: "22px",
                                },
                                lineHeight: { lg: "21.94px", xl: "26.82px" },
                            }}
                        >
                            {item.text}
                        </Typography>
                    </Box>
                ))}
                <NavButton
                    _id="button-down"
                    icon={iconDown}
                    onClick={handlePresButton}
                    disabled={buttonDisabled.buttonDown}
                />
            </Stack>
        </Stack>
    );
};
