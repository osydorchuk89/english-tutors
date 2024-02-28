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
        answer: "Щоб записатися на урок, ви можете залишити заявку на сайті, написати нам, або подзвонити менеджерам на пряму. Написати можна в Instagram або Telegram школи.",
    },
    {
        id: 2,
        question: "Де проходить онлайн заняття?",
        answer: "Наші вчителі використовують найбільш популярні платформи: Zoom, Meet, Teams або Skype. Ви самостійно зможете обрати программу для зустрічей.",
    },
    {
        id: 3,
        question: "Що входить у 60 хвилин уроку?",
        answer: "Перевірка домашньої роботи не входить в годину уроку, під час заняття викладач може вказати на помилки та дати відгук щодо ДЗ. Наповнення уроку залежить від ваших потреб.",
    },
    {
        id: 4,
        question: "Як проходить оплата?",
        answer: "Після безкоштовного пробного уроку та затвердження вчителя, менеджер вам скине данні для оплати. Ви зможете платити або за кожен урок окрем, або пакетами занятть. Зміна викладача чи термін використання уроків ніяк не впливаж на їхню кількість.",
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
                            minHeight: {
                                xxs: "54px",
                                xs: "91px",
                                md: "109px",
                                xl: "114px",
                            },
                            pl: {
                                xxs: "16px",
                                xs: "32px",
                                md: "40px",
                            },
                            borderRadius: "16px",
                            "&.Mui-expanded": {
                                backgroundColor: "darkBlue.main",
                                color: "lightBlue.light",
                                minHeight: {
                                    xxs: "54px",
                                    xs: "91px",
                                    md: "109px",
                                    xl: "114px",
                                },
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
                            // minHeight: "124px",
                            px: {
                                xxs: "16px",
                                xs: "32px",
                                md: "40px",
                            },
                            py: {
                                xxs: "16px",
                                xs: "24px",
                                xl: "32px",
                            },
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: {
                                    xxs: "18px",
                                    md: "20px",
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
                            {item.answer}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </Box>
    );
};
