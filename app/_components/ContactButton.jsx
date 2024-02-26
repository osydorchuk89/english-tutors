"use client";

import { useFormStatus } from "react-dom";
import { Button, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

const minWidthSizesFeedback = { xxs: "243px", md: "255px", xl: "280px" };
const minWidthSizesOther = { xxs: "238px", xs: "176px", xl: "278px" };

export const ContactButton = ({
    text,
    href,
    type,
    onClick,
    hoverBackgroundColor,
    pressedBackgroundColor,
    maxWidth,
    isFeedback,
}) => {
    const { pending } = useFormStatus();
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
                minWidth: isFeedback
                    ? minWidthSizesFeedback
                    : minWidthSizesOther,
                maxWidth: maxWidth,
                minHeight: isFeedback ? "60px" : "auto",
            }}
        >
            <Typography
                sx={{
                    fontSize: { xxs: "16px", md: "18px", xl: "22px" },
                    fontWeight: { xxs: 600, md: 400 },
                }}
            >
                {pending ? (
                    <CircularProgress
                        size={18}
                        sx={{ color: "darkBlue.dark" }}
                        style={{ padding: 0 }}
                    />
                ) : (
                    text
                )}
            </Typography>
        </Button>
    );
};
