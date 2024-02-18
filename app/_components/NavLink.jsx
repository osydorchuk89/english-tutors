import Link from "next/link";
import { Typography } from "@mui/material";

export const NavLink = ({ text, textColor, textSize, textWeight, href }) => {
    return (
        <Link href={href} style={{ textDecoration: "inherit" }}>
            <Typography
                sx={{
                    fontSize: textSize,
                    fontWeight: textWeight,
                    color: textColor,
                }}
            >
                {text}
            </Typography>
        </Link>
    );
};
