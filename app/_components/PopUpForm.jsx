import { Paper, IconButton, Typography, Stack } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CircularProgress from "@mui/material/CircularProgress";
import DoneRoundedIcon from "@mui/icons-material/DoneRounded";

export const PopUpForm = ({ backgroundColor, onClick }) => {
    return (
        <Paper
            sx={{
                display: "flex",
                position: "relative",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                backgroundColor: backgroundColor,
                width: {
                    xxs: "80%",
                    xs: "calc(100% - 320px)",
                    md: "calc(100% - 480px)",
                    xl: "calc(100% - 800px)",
                },
                height: {
                    xxs: "60%",
                    xs: "calc(100% - 400px)",
                    md: "calc(100% - 600px)",
                    xl: "calc(100% - 920px)",
                },
                mx: { xxs: 0, xs: "160px", md: "240px", xl: "400px" },
                borderRadius: "24px",
                zIndex: 100,
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
            {/* {pending && <CircularProgress sx={{ color: "lightBlue.light" }} />} */}
            <Stack
                justifyContent="center"
                alignItems="center"
                sx={{ mx: { xxs: "20px", xs: "40px", md: "auto" } }}
            >
                <DoneRoundedIcon sx={{ fontSize: "156px" }} />
                <Typography
                    sx={{
                        mt: "40px",
                        color: "lightBlue.light",
                        textAlign: "center",
                    }}
                >
                    Ваша заявка прийнята.
                </Typography>
                <Typography
                    sx={{ color: "lightBlue.light", textAlign: "center" }}
                >
                    Ми відповімо вам протягом години.
                </Typography>
            </Stack>
        </Paper>
    );
};
