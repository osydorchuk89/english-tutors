import Image from "next/image";
import { Paper, Typography, Box } from "@mui/material";
import { ContactButton } from "./ContactButton";

export const ContactCard = ({ img, name, text, phone, href }) => {
    return (
        <Paper
            elevation={0}
            sx={{
                width: { md: "367px", lg: "386px", xxl: "485px" },
                height: { md: "543px", xl: "585px" },
                backgroundColor: "lightBlue.dark",
                borderRadius: "16px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                px: { md: "75px", xxl: "112px" },
                pt: { md: "40px", xxl: "48px" },
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
                    fontSize: { md: "24px", xl: "32px" },
                    lineHeight: { md: "29.26px", xl: "39.01px" },
                    fontWeight: 700,
                    mb: { md: "16px", xl: "8px" },
                }}
            >
                {name}
            </Typography>
            <Typography
                sx={{
                    fontSize: { md: "18px", xl: "22px" },
                    lineHeight: { md: "21.94px", xl: "26.82px" },
                    mb: { md: "69px", xl: "40px" },
                }}
            >
                {text}
            </Typography>
            <Typography
                sx={{
                    fontSize: "12px",
                    lineHeight: { md: "14.63px", xl: "19.5px" },
                    mb: { md: "8px", xl: "13px" },
                }}
            >
                {phone}
            </Typography>
            <ContactButton text="Телеграм" href={href} />
        </Paper>
    );
};
