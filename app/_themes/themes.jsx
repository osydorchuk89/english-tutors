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
        logo: {
            main: "#000000",
        },
        disabledText: {
            main: "#C2C2C2",
        },
        lightBlue: {
            light: "#F3F9FC",
            main: "#E6F3F8",
            dark: "#C7E6F0",
        },
        darkBlue: {
            light: "#1F596D",
            main: "#1F4A5B",
            dark: "#14313D",
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
    components: {
        MuiDataGrid: {
            styleOverrides: {
                root: {
                    border: "none",
                },
            },
        },
    },
});
