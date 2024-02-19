"use client";

import { useState } from "react";
import {
    Box,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
} from "@mui/material";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";

const faqs = [
    {
        id: 1,
        question: "Як записатися на урок",
        answer: "Lorem ipsum dolor sit amet consectetur. Proin natoque adipiscing sagittis aliquet urna nullam. Etiam ut dui tincidunt lorem mauris a at in. Morbi tincidunt imperdiet lobortis nisi enim arcu in. Massa neque adipiscing ligula dolor orci. Dui laoreet proin netus quis egestas semper pulvinar. Et ac est sed cursus cursus quisque sit. Quam elementum vel turpis cras hendrerit ac fringilla.",
    },
    {
        id: 2,
        question: "Де проходить онлайн заняття?",
        answer: "Lorem ipsum dolor sit amet consectetur. Proin natoque adipiscing sagittis aliquet urna nullam. Etiam ut dui tincidunt lorem mauris a at in. Morbi tincidunt imperdiet lobortis nisi enim arcu in. Massa neque adipiscing ligula dolor orci. Dui laoreet proin netus quis egestas semper pulvinar. Et ac est sed cursus cursus quisque sit. Quam elementum vel turpis cras hendrerit ac fringilla.",
    },
    {
        id: 3,
        question: "Що входить у 60 хвилин уроку?",
        answer: "Lorem ipsum dolor sit amet consectetur. Proin natoque adipiscing sagittis aliquet urna nullam. Etiam ut dui tincidunt lorem mauris a at in. Morbi tincidunt imperdiet lobortis nisi enim arcu in. Massa neque adipiscing ligula dolor orci. Dui laoreet proin netus quis egestas semper pulvinar. Et ac est sed cursus cursus quisque sit. Quam elementum vel turpis cras hendrerit ac fringilla.",
    },
    {
        id: 4,
        question: "Як проходить оплата?",
        answer: "Lorem ipsum dolor sit amet consectetur. Proin natoque adipiscing sagittis aliquet urna nullam. Etiam ut dui tincidunt lorem mauris a at in. Morbi tincidunt imperdiet lobortis nisi enim arcu in. Massa neque adipiscing ligula dolor orci. Dui laoreet proin netus quis egestas semper pulvinar. Et ac est sed cursus cursus quisque sit. Quam elementum vel turpis cras hendrerit ac fringilla.",
    },
];

export const FAQAccordion = () => {
    const [expanded, setExpanded] = useState("panel1");

    const handleChange = (panel) => (_, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                width: "100%",
                minHeight: {
                    xxs: "360px",
                    xs: "516px",
                    md: "564px",
                    xl: "616px",
                },
                backgroundColor: "lightBlue.light",
                borderRadius: "16px",
                py: { xxs: "48px", xs: "40px", xl: "56px" },
                px: { xxs: "16px", xs: "20px", md: "56px", xl: "100px" },
            }}
        >
            {faqs.map((item) => (
                <Accordion
                    key={item.id}
                    elevation={0}
                    square={false}
                    defaultExpanded={item.id === 1 ? true : false}
                    expanded={expanded === `panel${item.id}`}
                    onChange={handleChange(`panel${item.id}`)}
                    sx={{
                        backgroundColor: "lightBlue.dark",
                        borderRadius: "16px",
                        mb: { xxs: "16px", xs: "24px" },
                        "&.MuiAccordion-root:first-of-type": {
                            borderRadius: "16px",
                        },
                        "&.MuiAccordion-root:last-of-type": {
                            borderRadius: "16px",
                            mb: 0,
                        },
                        "&.MuiAccordion-root::before": {
                            height: "0px",
                        },
                    }}
                >
                    <AccordionSummary
                        sx={{
                            backgroundColor: "inherit",
                            height: {
                                xxs: "54px",
                                xs: "91px",
                                md: "109px",
                                xl: "114px",
                            },
                            pl: {
                                xxs: "16px",
                                xs: "20px",
                                md: "60px",
                                xl: "100px",
                            },
                            borderRadius: "16px",
                            "&.Mui-expanded": {
                                backgroundColor: "darkBlue.main",
                                color: "lightBlue.light",
                            },
                        }}
                        expandIcon={
                            <ArrowDropDownRoundedIcon
                                sx={{
                                    fontSize: "52px",
                                    color:
                                        expanded === `panel${item.id}`
                                            ? "lightBlue.light"
                                            : "inherit",
                                }}
                            />
                        }
                    >
                        <Typography
                            sx={{
                                fontSize: {
                                    xxs: "18px",
                                    xs: "22px",
                                    md: "24px",
                                    xl: "28px",
                                },
                                color: "inherit",
                            }}
                        >
                            {item.question}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails
                        sx={{
                            backgroundColor: "inherit",
                            fontSize: { xxs: "18px", md: "20px", xl: "22px" },
                            minHeight: {
                                xs: "208px",
                                xs: "184px",
                                md: "152px",
                                xl: "168px",
                            },
                            px: {
                                xxs: "16px",
                                xs: "20px",
                                md: "60px",
                                xl: "100px",
                            },
                            pt: {
                                xxs: "16px",
                                xs: "32px",
                                md: "24px",
                                xl: "32px",
                            },
                        }}
                    >
                        {item.answer}
                    </AccordionDetails>
                </Accordion>
            ))}
        </Box>
    );
};
