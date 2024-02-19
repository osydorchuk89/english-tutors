import Image from "next/image";
import { Paper, Typography, Box } from "@mui/material";
import { ContactButton } from "./ContactButton";

export const ContactCard = ({ img, name, text, phone, href }) => {
    return (
        <Paper
            elevation={0}
            sx={{
                width: {
                    xxs: "calc(100% - 32px)",
                    sm: "367px",
                    lg: "386px",
                    xxl: "485px",
                },
                height: { xxs: "513px", sm: "533px", md: "543px", xl: "585px" },
                backgroundColor: "lightBlue.dark",
                borderRadius: "16px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                px: { xxs: "65px", md: "75px", xxl: "112px" },
                pt: { xxs: "32px", md: "40px", xxl: "48px" },
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
                    mb: { xxs: "16px", sm: "24px" },
                }}
            >
                <Image src={img} alt="tutor-photo" width={237} height={237} />
            </Box>
            <Typography
                sx={{
                    fontSize: { xxs: "24px", xl: "32px" },
                    lineHeight: { xxs: "29.26px", xl: "39.01px" },
                    fontWeight: 700,
                    mb: { xxs: "16px", sm: "8px", md: "16px", xl: "8px" },
                }}
            >
                {name}
            </Typography>
            <Typography
                sx={{
                    fontSize: {
                        xxs: "18px",
                        sm: "16px",
                        md: "18px",
                        xl: "22px",
                    },
                    lineHeight: {
                        xxs: "21.94px",
                        sm: "19.5px",
                        md: "21.94px",
                        xl: "26.82px",
                    },
                    mb: { xxs: "24px", sm: "43px", md: "69px", xl: "40px" },
                }}
            >
                {text}
            </Typography>
            <Typography
                sx={{
                    fontSize: { xxs: "12px", sm: "10px", md: "12px" },
                    lineHeight: {
                        xxs: "14.63px",
                        sm: "12.19px",
                        md: "14.63px",
                        xl: "19.5px",
                    },
                    mb: { xxs: "8px", xl: "13px" },
                }}
            >
                {phone}
            </Typography>
            <ContactButton text="Телеграм" href={href} />
        </Paper>
    );
};
