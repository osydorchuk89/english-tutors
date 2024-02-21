import { Button, Typography } from "@mui/material";

export const OrderButton = ({ onClick, text }) => {
    return (
        <Button
            disableRipple
            type="submit"
            onClick={onClick}
            sx={{
                // width: { xs: "228px", md: "192px", xl: "217px" },
                // height: { xs: "60px", md: "54px", xl: "59px" },
                color: "inherit",
                backgroundColor: "lightBlue.dark",
                px: "40px",
                py: "16px",
                borderRadius: "8px",
                textTransform: "capitalize",
                "&:hover": {
                    backgroundColor: "button.hover",
                    boxShadow: "0px 0px 12px 0px #14313DB2",
                },
                "&:active": {
                    backgroundColor: "button.pressed",
                    boxShadow: "0px 0px 12px 0px #14313DB2 inset",
                },
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
