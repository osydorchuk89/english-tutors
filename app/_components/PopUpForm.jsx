import { Paper, IconButton, Typography, Stack } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DoneRoundedIcon from "@mui/icons-material/DoneRounded";

export const PopUpForm = ({
    backgroundColor,
    textColor,
    onClick,
    isApplication,
}) => {
    return (
        <Paper
            sx={{
                display: "flex",
                position: "relative",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                color: textColor,
                backgroundColor: backgroundColor,
                width: {
                    xxs: "100%",
                    xs: "calc(100% - 40px)",
                    md: "calc(100% - 120px)",
                    xl: "calc(100% - 200px)",
                },
                height: {
                    xxs: "513px",
                    xs: "636px",
                    md: "706px",
                    xl: "909px",
                },
                mx: { xxs: 0, xs: "20px", md: "60px", xl: "100px" },
                borderRadius: "24px",
            }}
        >
            <IconButton
                disableRipple
                sx={{
                    position: "absolute",
                    top: { xxs: "10px", xs: "20px", md: "60px" },
                    right: { xxs: "10px", xs: "20px", md: "60px" },
                    color: "inherit",
                }}
                onClick={onClick}
            >
                <CloseIcon
                    sx={{
                        fontSize: { xxs: "24px", xs: "32px", xl: "40px" },
                    }}
                />
            </IconButton>
            <Stack
                justifyContent="center"
                alignItems="center"
                sx={{ mx: { xxs: "20px", xs: "40px", md: "auto" } }}
            >
                <DoneRoundedIcon sx={{ fontSize: "156px" }} />
                <Typography
                    sx={{
                        mt: "40px",
                        color: textColor,
                        textAlign: "center",
                        fontSize: {
                            xxs: "18px",
                            xs: "18px",
                            md: "24px",
                            xl: "28px",
                        },
                    }}
                >
                    {isApplication
                        ? "Ваша заявка прийнята."
                        : "Ваш коментар прийнято"}
                </Typography>
                {isApplication && (
                    <Typography
                        sx={{
                            color: textColor,
                            textAlign: "center",
                            fontSize: {
                                xxs: "18px",
                                xs: "18px",
                                md: "24px",
                                xl: "28px",
                            },
                        }}
                    >
                        Ми відповімо вам протягом години.
                    </Typography>
                )}
            </Stack>
        </Paper>
    );
};
