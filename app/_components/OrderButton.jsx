import { Button, Typography } from "@mui/material";

export const OrderButton = ({ onClick, text }) => {
    return (
        <Button
            type="submit"
            onClick={onClick}
            sx={{
                width: { md: "192px", xl: "217px" },
                height: { md: "54px", xl: "59px" },
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
                    fontSize: { xxs: "16px", md: "18px", xl: "22px" },
                    fontWeight: 600,
                }}
            >
                {text}
            </Typography>
        </Button>
    );
};
