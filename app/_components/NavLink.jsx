import { Box, Typography } from "@mui/material";

export const NavLink = ({
    text,
    textColor,
    textSize,
    textWeight,
    href,
    px,
    py,
    backgroundHoverColor,
}) => {
    return (
        <Box
            component="a"
            href={href}
            sx={{
                textDecoration: "inherit",
                borderRadius: "8px",
                padding: "8px 16px 8px 16px",
                "&:hover": { backgroundColor: backgroundHoverColor },
            }}
        >
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
        </Box>
    );
};
