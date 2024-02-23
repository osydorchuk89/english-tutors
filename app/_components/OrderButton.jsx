import { useFormStatus } from "react-dom";
import { Button, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

const minHeightSizesApplication = { xs: "56px", xs: "65px" };
const minHeightSizesOther = { xxs: "56px", xs: "60px", md: "54px", xl: "59px" };

export const OrderButton = ({ onClick, text, isApplication }) => {
    const { pending } = useFormStatus();
    return (
        <Button
            disableRipple
            type="submit"
            onClick={onClick}
            sx={{
                width: {
                    xxs: "100%",
                    xs: "auto",
                },
                minWidth: {
                    xs: "228px",
                    md: "192px",
                    xl: "217px",
                },
                minHeight: isApplication
                    ? minHeightSizesApplication
                    : minHeightSizesOther,
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
                {pending ? (
                    <CircularProgress
                        size="1.4rem"
                        sx={{
                            color: "darkBlue.dark",
                        }}
                    />
                ) : (
                    text
                )}
            </Typography>
        </Button>
    );
};
