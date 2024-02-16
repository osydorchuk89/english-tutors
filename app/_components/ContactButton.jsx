import { Button, Typography } from "@mui/material";

export const ContactButton = ({ text, href, type }) => {
    return (
        <Button
            href={href}
            variant="outlined"
            type={type}
            sx={{
                width: "233px",
                height: "40px",
                dislay: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "inherit",
                backgroundColor: "inherit",
                borderRadius: "8px",
                textTransform: "capitalize",
                borderColor: "darkBlue.dark",
                "&:hover": {
                    borderColor: "darkBlue.dark",
                },
            }}
        >
            <Typography
                sx={{
                    fontSize: "18px",
                    fontWeight: 400,
                }}
            >
                {text}
            </Typography>
        </Button>
    );
};
