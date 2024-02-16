"use client";

import { useState } from "react";
import Image from "next/image";
import { Box, Paper, Stack, Typography, IconButton } from "@mui/material";
import { iconDown, iconUp } from "@/lib/icons";
import { NavButton } from "./NavButtons";

export const TutorsCards = ({ tutors }) => {
    const [cardIndex, setCardIndex] = useState(0);

    const handlePressUp = () => {
        if (cardIndex === 0) {
            setCardIndex(tutors.length - 1);
        } else {
            setCardIndex((prevIndex) => prevIndex - 1);
        }
    };
    const handlePressDown = () => {
        if (cardIndex === tutors.length - 1) {
            setCardIndex(0);
        } else {
            setCardIndex((prevIndex) => prevIndex + 1);
        }
    };

    return (
        <Box
            sx={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                width: "710px",
                height: "100%",
            }}
        >
            <Paper
                sx={{
                    position: "absolute",
                    width: "608px",
                    height: "100%",
                    right: 0,
                    backgroundColor: "lightBlue.light",
                    borderRadius: "24px 0 0 24px",
                    boxShadow: "0px 0px 48px 0px #14313D1F",
                    zIndex: 1,
                }}
            />
            <Stack
                alignItems="center"
                sx={{
                    position: "absolute",
                    width: "590px",
                    height: "646px",
                    zIndex: 10,
                }}
            >
                <NavButton onClick={handlePressUp} icon={iconUp} />
                <Box
                    sx={{
                        width: "100%",
                        height: "534px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                    }}
                >
                    <Box
                        className="flip-box"
                        sx={{
                            width: "100%",
                            height: "486px",
                            perspective: "1000px",
                        }}
                    >
                        <Box
                            className="flip-box-inner"
                            sx={{
                                position: "relative",
                                height: "100%",
                                width: "100%",
                                transition: "transform 0.8s",
                                transformStyle: "preserve-3d",
                            }}
                        >
                            <Paper
                                className="flip-box-front"
                                sx={{
                                    backgroundColor: "lightBlue.dark",
                                }}
                            >
                                <Box
                                    sx={{
                                        position: "relative",
                                        width: "229px",
                                        height: "229px",
                                        overflow: "hidden",
                                        mb: "40px",
                                        borderRadius: "8px",
                                    }}
                                >
                                    <Image
                                        src={`/${tutors[cardIndex].photo}`}
                                        alt="photo"
                                        loading="lazy"
                                        fill
                                        style={{
                                            objectFit: "cover",
                                        }}
                                    />
                                </Box>
                                <Typography
                                    sx={{
                                        fontSize: "24px",
                                        fontWeight: 700,
                                        mb: "24px",
                                    }}
                                >
                                    {tutors[cardIndex].name}
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: "18px",
                                        fontWeight: 600,
                                        mb: "8px",
                                    }}
                                >
                                    Досвід викладання
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: "18px",
                                    }}
                                >
                                    {tutors[cardIndex].experience}
                                </Typography>
                            </Paper>
                            <Paper
                                className="flip-box-back"
                                sx={{
                                    backgroundColor: "lightBlue.dark",
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: "24px",
                                        fontWeight: 700,
                                        mt: "56px",
                                        mb: "112px",
                                    }}
                                >
                                    {tutors[cardIndex].name}
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: "24px",
                                        mx: "56px",
                                        textAlign: "center",
                                    }}
                                >
                                    {tutors[cardIndex].about}
                                </Typography>
                            </Paper>
                        </Box>
                    </Box>
                </Box>
                <NavButton onClick={handlePressDown} icon={iconDown} />
            </Stack>
        </Box>
    );
};
