"use client";

import { useState } from "react";
import { Box, ImageList, ImageListItem } from "@mui/material";
import { NavButton } from "./NavButtons";
import { iconUp, iconDown } from "@/lib/icons";

export const FeedbackCards = ({ screenshots }) => {
    const buttonDownDisabled = screenshots.length < 5;
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
            setReviewSlice((prevSlice) => prevSlice.map((index) => index - 2));
            newReviewSlice = reviewSlice.map((index) => index - 2);
        }

        if (buttonDownPressed) {
            setReviewSlice((prevSlice) => prevSlice.map((index) => index + 2));
            newReviewSlice = reviewSlice.map((index) => index + 2);
        }

        console.log(reviewSlice);

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

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flexStart",
                alignItems: "center",
                pt: { md: "115px", xl: "140px" },
                zIndex: 10,
            }}
        >
            <NavButton
                _id="button-up"
                icon={iconUp}
                onClick={handlePresButton}
                disabled={buttonDisabled.buttonUp}
            />
            <ImageList
                variant="standard"
                cols={2}
                gap={10}
                sx={{
                    width: { md: "590px", xl: "615px" },
                    height: "793px",
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
            <NavButton
                _id="button-down"
                icon={iconDown}
                onClick={handlePresButton}
                disabled={buttonDisabled.buttonDown}
            />
        </Box>
    );
};
