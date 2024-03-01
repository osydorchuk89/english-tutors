"use client";

import { useState } from "react";
import Image from "next/image";
import { Box, Paper, Stack, Typography } from "@mui/material";
import { iconDown, iconUp } from "@/lib/icons";
import { NavButton } from "./NavButtons";

const flipBoxCardsStyle = {
    display: "flex",
    position: "absolute",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "100%",
    borderRadius: "16px",
    boxShadow: `5px 4px 6px 0px #14313D17,
    11px 10px 9px 0px #14313D0D,
    19px 18px 10px 0px #14313D03,
    30px 28px 11px 0px #14313D05,
    0px 4px 4px 0px #14313D40,
    -4px -4px 4px 0px #14313D1A`,
    backgroundColor: "lightBlue.dark",
};

export const TutorsCards = ({ tutors }) => {
    const [imageLoaded, setImageLoaded] = useState({});
    const [cardIndex, setCardIndex] = useState(1);

    const handlePressUp = () => {
        if (imageLoaded[cardIndex]) {
            if (cardIndex === 0) {
                setCardIndex(tutors.length - 1);
            } else {
                setCardIndex((prevIndex) => prevIndex - 1);
            }
        }
    };

    const handlePressDown = () => {
        if (imageLoaded[cardIndex]) {
            if (cardIndex === tutors.length - 1) {
                setCardIndex(0);
            } else {
                setCardIndex((prevIndex) => prevIndex + 1);
            }
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
                ontouchstart=""
            />
            <Stack
                alignItems="center"
                justifyContent="space-between"
                sx={{
                    position: "absolute",
                    width: {
                        xxs: "95%",
                        xs: "496px",
                        md: "590px",
                        xxl: "744px",
                    },
                    maxWidth: {
                        xxs: "358px",
                        xs: "none",
                    },
                    right: {
                        xxs: "16px",
                        xs: "40px",
                        md: "80px",
                        lg: "120px",
                        xl: "200px",
                    },
                    left: { xxs: 0, md: "auto" },
                    mx: "auto",
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
                                    ...flipBoxCardsStyle,
                                    justifyContent: "center",
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
                                        src={tutors[cardIndex].photo}
                                        alt="photo"
                                        fill
                                        sizes="229px"
                                        priority
                                        style={{
                                            objectFit: "cover",
                                        }}
                                        onLoad={() => {
                                            if (!imageLoaded[cardIndex]) {
                                                setImageLoaded((prevState) => ({
                                                    ...prevState,
                                                    [cardIndex]: true,
                                                }));
                                            }
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
                                    ...flipBoxCardsStyle,
                                    transform: "rotateY(180deg)",
                                    justifyContent: "flex-start",
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: { xxs: "24px", xxl: "32px" },
                                        fontWeight: 700,
                                        mt: {
                                            xxs: "32px",
                                            xs: "40px",
                                            md: "56px",
                                        },
                                        mb: {
                                            xxs: "77px",
                                            xs: "100px",
                                            xxl: "80px",
                                        },
                                    }}
                                >
                                    {tutors[cardIndex].name}
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: {
                                            xxs: "22px",
                                            md: "24px",
                                            xxl: "28px",
                                        },
                                        lineHeight: {
                                            xxs: "26.82px",
                                            md: "29.26px",
                                            xxl: "34.13px",
                                        },
                                        mx: {
                                            xxs: "16px",
                                            xs: "40px",
                                            md: "56px",
                                            xxl: "130px",
                                        },
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
