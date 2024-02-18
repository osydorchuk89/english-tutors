"use client";

import { useState } from "react";
import Image from "next/image";
import { Box, Paper, Stack, Typography } from "@mui/material";
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
                width: { xxs: "100%", sm: "536px", md: "710px", xl: "944px" },
                height: { xxs: "700px", sm: "100%" },
            }}
        >
            <Paper
                sx={{
                    position: "absolute",
                    width: {
                        xxs: "289px",
                        xs: "407px",
                        md: "608px",
                        xxl: "815px",
                    },
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
                justifyContent="space-between"
                sx={{
                    position: "absolute",
                    width: {
                        xxs: "358px",
                        xs: "496px",
                        md: "590px",
                        xxl: "744px",
                    },
                    right: {
                        xxs: "16px",
                        xs: "40px",
                        md: "120px",
                        xl: "200px",
                    },
                    height: "646px",
                    zIndex: 10,
                }}
            >
                <NavButton onClick={handlePressUp} icon={iconUp} />
                <Box
                    sx={{
                        width: "100%",
                        height: { xxs: "412px", xs: "442px", md: "534px" },
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                    }}
                >
                    <Box
                        className="flip-box"
                        sx={{
                            width: "100%",
                            height: { xxs: "412px", xs: "442px", md: "486px" },
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
                                        mb: {
                                            xxs: "24px",
                                            xs: "32px",
                                            md: "40px",
                                        },
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
                                        mb: { xxs: "16px", xs: "24px" },
                                    }}
                                >
                                    {tutors[cardIndex].name}
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: { xxs: "16px", md: "18px" },
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
