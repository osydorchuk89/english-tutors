import { Button, Typography } from "@mui/material";

export const OrderButton = ({ onClick, text }) => {
    return (
        <Button
            type="submit"
            onClick={onClick}
            sx={{
                width: "192px",
                height: "54px",
                color: "inherit",
                backgroundColor: "lightBlue.dark",
                px: "40px",
                py: "16px",
                borderRadius: "0.5rem",
                textTransform: "capitalize",
            }}
        >
            <Typography
                sx={{
                    fontSize: "18px",
                    fontWeight: 600,
                }}
            >
                {text}
            </Typography>
        </Button>
    );
};
