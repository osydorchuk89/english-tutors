import Link from "next/link";
import { Typography } from "@mui/material";

export const NavLink = ({
    text,
    textColor,
    textSize,
    textWeight,
    href,
    px,
    py,
}) => {
    return (
        <Link href={href} style={{ textDecoration: "inherit" }}>
            <Typography
                sx={{
                    fontSize: textSize,
                    fontWeight: textWeight,
                    color: textColor,
                    px: px,
                    py: py,
                }}
            >
                {text}
            </Typography>
        </Link>
    );
};
