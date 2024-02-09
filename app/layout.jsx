import "./globals.css";
import { Montserrat } from "next/font/google";
import { ThemeProvider } from "@mui/material";
import { myTheme } from "./_themes/themes";

const montserratFont = Montserrat({ subsets: ["latin", "cyrillic"] });

export const metadata = {
    title: "English Tutors",
    description: "Find your English tutors online!",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={montserratFont.className}>
                <ThemeProvider theme={myTheme}>{children}</ThemeProvider>
            </body>
        </html>
    );
}
