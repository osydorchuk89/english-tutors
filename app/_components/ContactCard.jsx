import Image from "next/image";
import { Paper, Typography, Box } from "@mui/material";
import { ContactButton } from "./ContactButton";

export const ContactCard = ({ img, name, text, phone, href }) => {
    return (
        <Paper
            elevation={0}
            sx={{
                width: "386px",
                height: "543px",
                backgroundColor: "lightBlue.dark",
                borderRadius: "16px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                px: "75px",
                pt: "40px",
                boxShadow: `5px 4px 6px 0px #14313D17,
                    11px 10px 9px 0px #14313D0D,
                    19px 18px 10px 0px #14313D03,
                    30px 28px 11px 0px #14313D05,
                    0px 4px 4px 0px #14313D40,
                    -4px -4px 4px 0px #14313D1A`,
            }}
        >
            <Box
                sx={{
                    borderRadius: "16px",
                    overflow: "hidden",
                    mb: "24px",
                }}
            >
                <Image src={img} alt="tutor-photo" width={237} height={237} />
            </Box>
            <Typography
                sx={{
                    fontSize: "24px",
                    fontWeight: 700,
                    lineHeight: "29.26px",
                    mb: "16px",
                }}
            >
                {name}
            </Typography>
            <Typography
                sx={{ fontSize: "18px", lineHeight: "21.94px", mb: "69px" }}
            >
                {text}
            </Typography>
            <Typography sx={{ fontSize: "12px", mb: "8px" }}>
                {phone}
            </Typography>
            <ContactButton text="Телеграм" href={href} />
        </Paper>
    );
};
