"use client";
import { createTheme } from "@mui/material/styles";

export const myTheme = createTheme({
    palette: {
        background: {
            light: "#F9FAFA",
            main: "#F1F1F1",
            dark: "#D9D9D9",
            darker: "#B7B7B7",
        },
        button: {
            main: "#9DD5E6",
        },
    },

    typography: {
        fontFamily: {
            display: "Montserrat",
            body: "Montserrat",
        },
        allVariants: {
            color: "#171B1C",
        },
    },
});
