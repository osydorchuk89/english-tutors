import { Button, Typography } from "@mui/material";

export const ContactButton = ({
    text,
    href,
    type,
    onClick,
    hoverBackgroundColor,
    pressedBackgroundColor,
    maxWidth,
}) => {
    return (
        <Button
            disableRipple
            href={href}
            variant="outlined"
            type={type}
            onClick={onClick}
            sx={{
                dislay: "flex",
                justifyContent: "center",
                alignItems: "center",
                px: "72px",
                py: "12px",
                backgroundColor: "inherit",
                borderRadius: "8px",
                textTransform: "capitalize",
                borderColor: "darkBlue.dark",
                "&:hover": {
                    backgroundColor: hoverBackgroundColor,
                    borderColor: "darkBlue.dark",
                },
                "&:active": {
                    backgroundColor: pressedBackgroundColor,
                },
                maxWidth: maxWidth,
            }}
        >
            <Typography
                sx={{
                    fontSize: { xxs: "16px", md: "18px", xl: "22px" },
                    fontWeight: { xxs: 600, md: 400 },
                }}
            >
                {text}
            </Typography>
        </Button>
    );
};
