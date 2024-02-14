import { Link, Button, Typography } from "@mui/material";

export const OrderButton = ({ onClick, text }) => {
    return (
        <Button
            component="label"
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
                // boxShadow: `1px 2px 5px 0px #14313D4A,
                // 5px 9px 10px 0px #14313D42,
                // 31px 54px 17px 0px #14313D03,
                // -8px -8px 20px 32px #14313D40`,
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
