import Link from "next/link";
import { Typography } from "@mui/material";

export const NavLink = ({ text, href }) => {
    return (
        <Link href={href} style={{ textDecoration: "inherit" }}>
            <Typography sx={{ fontSize: "1.125rem" }}>{text}</Typography>
        </Link>
    );
};
