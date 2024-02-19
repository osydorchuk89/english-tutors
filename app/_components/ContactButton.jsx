import { Button, Typography } from "@mui/material";

export const ContactButton = ({ text, href, type }) => {
    return (
        <Button
            href={href}
            variant="outlined"
            type={type}
            sx={{
                width: { xxs: "75%", xs: "238px", md: "233px", xl: "253px" },
                height: { xxs: "60px", md: "40px", xl: "51px" },
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
                    fontSize: { xxs: "16px", md: "18px", xl: "22px" },
                    fontWeight: { xxs: 600, md: 400 },
                }}
            >
                {text}
            </Typography>
        </Button>
    );
};
