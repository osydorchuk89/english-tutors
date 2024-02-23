import { useFormStatus } from "react-dom";
import { Button, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

export const OrderButton = ({ onClick, text }) => {
    const { pending } = useFormStatus();
    return (
        <Button
            disableRipple
            type="submit"
            onClick={onClick}
            sx={{
                minWidth: "228px",
                minHeight: "60px",
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
                {pending ? <CircularProgress size="22px" /> : text}
            </Typography>
        </Button>
    );
};
