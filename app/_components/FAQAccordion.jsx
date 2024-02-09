"use client";

import { useState } from "react";
import {
    Box,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const faqs = [
    {
        id: 1,
        question: "For example question?",
        answer: "Lorem ipsum dolor sit amet consectetur. Proin natoque adipiscing sagittis aliquet urna nullam. Etiam ut dui tincidunt lorem mauris a at in. Morbi tincidunt imperdiet lobortis nisi enim arcu in. Massa neque adipiscing ligula dolor orci. Dui laoreet proin netus quis egestas semper pulvinar. Et ac est sed cursus cursus quisque sit. Quam elementum vel turpis cras hendrerit ac fringilla. Id egestas quis ultrices.",
    },
    {
        id: 2,
        question: "For example question?",
        answer: "Lorem ipsum dolor sit amet consectetur. Proin natoque adipiscing sagittis aliquet urna nullam. Etiam ut dui tincidunt lorem mauris a at in. Morbi tincidunt imperdiet lobortis nisi enim arcu in. Massa neque adipiscing ligula dolor orci. Dui laoreet proin netus quis egestas semper pulvinar. Et ac est sed cursus cursus quisque sit. Quam elementum vel turpis cras hendrerit ac fringilla. Id egestas quis ultrices.",
    },
    {
        id: 3,
        question: "For example question?",
        answer: "Lorem ipsum dolor sit amet consectetur. Proin natoque adipiscing sagittis aliquet urna nullam. Etiam ut dui tincidunt lorem mauris a at in. Morbi tincidunt imperdiet lobortis nisi enim arcu in. Massa neque adipiscing ligula dolor orci. Dui laoreet proin netus quis egestas semper pulvinar. Et ac est sed cursus cursus quisque sit. Quam elementum vel turpis cras hendrerit ac fringilla. Id egestas quis ultrices.",
    },
    {
        id: 4,
        question: "For example question?",
        answer: "Lorem ipsum dolor sit amet consectetur. Proin natoque adipiscing sagittis aliquet urna nullam. Etiam ut dui tincidunt lorem mauris a at in. Morbi tincidunt imperdiet lobortis nisi enim arcu in. Massa neque adipiscing ligula dolor orci. Dui laoreet proin netus quis egestas semper pulvinar. Et ac est sed cursus cursus quisque sit. Quam elementum vel turpis cras hendrerit ac fringilla. Id egestas quis ultrices.",
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
                height: "45.813rem",
                backgroundColor: "background.main",
                borderRadius: "1rem",
                px: "3rem",
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
                        backgroundColor: "background.dark",
                        borderRadius: "1rem",
                        mb: "1rem",
                    }}
                >
                    <AccordionSummary
                        sx={{
                            backgroundColor: "background.darker",
                            height: "6.813rem",
                            fontSize: "1.5rem",
                            pl: "3rem",
                            borderRadius: "1rem",
                        }}
                        expandIcon={
                            <ArrowDropDownIcon sx={{ fontSize: "2.5rem" }} />
                        }
                    >
                        {item.question}
                    </AccordionSummary>
                    <AccordionDetails
                        sx={{
                            backgroundColor: "background.dark",
                            fontSize: "1.125rem",
                            height: "9.5rem",
                            pl: "3rem",
                            pt: "1.5rem",
                            borderRadius: "1rem",
                        }}
                    >
                        {item.answer}
                    </AccordionDetails>
                </Accordion>
            ))}
        </Box>
    );
};
