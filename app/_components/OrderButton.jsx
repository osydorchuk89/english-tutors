import { Button, Typography } from "@mui/material";

export const OrderButton = ({ onClick, text }) => {
    return (
        <Button
            type="submit"
            onClick={onClick}
            sx={{
                width: { lg: "192px", xl: "217px" },
                height: { lg: "54px", xl: "59px" },
                color: "inherit",
                backgroundColor: "lightBlue.dark",
                px: "40px",
                py: "16px",
                borderRadius: "8px",
                textTransform: "capitalize",
            }}
        >
            <Typography
                sx={{
                    fontSize: { lg: "18px", xl: "22px" },
                    fontWeight: 600,
                }}
            >
                {text}
            </Typography>
        </Button>
    );
};
