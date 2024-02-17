import { Button, Typography } from "@mui/material";

export const ContactButton = ({ text, href, type }) => {
    return (
        <Button
            href={href}
            variant="outlined"
            type={type}
            sx={{
                width: { lg: "233px", xl: "253px" },
                height: { lg: "40px", xl: "51px" },
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
                    fontSize: { lg: "18px", xl: "22px" },
                    fontWeight: 400,
                }}
            >
                {text}
            </Typography>
        </Button>
    );
};
