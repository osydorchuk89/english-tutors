import Image from "next/image";
import { Paper, Typography, Box } from "@mui/material";
import { ContactButton } from "./ContactButton";

export const ContactCard = ({ img, name, text, phone, href }) => {
    return (
        <Paper
            elevation={0}
            sx={{
                width: { lg: "367px", lgr: "386px", xl: "485px" },
                height: { lg: "543px", xl: "585px" },
                backgroundColor: "lightBlue.dark",
                borderRadius: "16px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                px: { lg: "75px", xl: "112px" },
                pt: { lg: "40px", xl: "48px" },
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
                    fontSize: { lg: "24px", xl: "32px" },
                    lineHeight: { lg: "29.26px", xl: "39.01px" },
                    fontWeight: 700,
                    mb: { lg: "16px", xl: "8px" },
                }}
            >
                {name}
            </Typography>
            <Typography
                sx={{
                    fontSize: { lg: "18px", xl: "22px" },
                    lineHeight: { lg: "21.94px", xl: "26.82px" },
                    mb: { lg: "69px", xl: "40px" },
                }}
            >
                {text}
            </Typography>
            <Typography
                sx={{
                    fontSize: "12px",
                    lineHeight: { lg: "14.63px", xl: "19.5px" },
                    mb: { lg: "8px", xl: "13px" },
                }}
            >
                {phone}
            </Typography>
            <ContactButton text="Телеграм" href={href} />
        </Paper>
    );
};
