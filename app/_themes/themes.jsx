"use client";
import { createTheme } from "@mui/material/styles";

export const myTheme = createTheme({
    palette: {
        background: {
            main: "#FFFFFF",
        },
        button: {
            hover: "#5CBAD4",
            pressed: "#37A1C0",
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
        MuiTextField: {
            styleOverrides: {
                root: {
                    borderColor: "lightBlue.light",
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    fontFamily: "Montserrat",
                },
            },
        },
    },
    breakpoints: {
        values: {
            xxs: 0,
            xs: 612,
            sm: 834,
            md: 1137,
            lg: 1450,
            xl: 1680,
            xxl: 1800,
        },
    },
});
