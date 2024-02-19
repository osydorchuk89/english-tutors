import "./globals.css";
import { Montserrat } from "next/font/google";
import { ThemeProvider } from "@mui/material";
import { myTheme } from "./_themes/themes";
import { IsClientContextProvider } from "./_context/IsClientContextProvider";
import { AuthProvider } from "./_context/AuthProvider";

const montserratFont = Montserrat({ subsets: ["latin", "cyrillic"] });

export const metadata = {
    title: "English Tutors",
    description: "Find your English tutors online!",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <AuthProvider>
                <IsClientContextProvider>
                    <ThemeProvider theme={myTheme}>
                        <body className={montserratFont.className}>
                            {children}
                        </body>
                    </ThemeProvider>
                </IsClientContextProvider>
            </AuthProvider>
        </html>
    );
}
