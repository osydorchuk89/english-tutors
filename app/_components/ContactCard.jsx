import Image from "next/image";
import { Card, CardContent, Typography, Link, Box } from "@mui/material";

export const ContactCard = ({ img, title }) => {
    return (
        <Card
            elevation={0}
            sx={{
                width: "24.125rem",
                height: "33.938rem",
                backgroundColor: "background.dark",
                borderRadius: "1rem",
            }}
        >
            <CardContent
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    pt: "2rem !important",
                    pl: "5rem !important",
                }}
            >
                <Box
                    sx={{
                        borderRadius: "1rem",
                        overflow: "hidden",
                    }}
                >
                    <Image src={img} alt={title} width={237} height={237} />
                </Box>
                <Typography
                    sx={{
                        textAlign: "left !important",
                        fontSize: "1.5rem",
                        fontWeight: 700,
                        my: "0.75rem",
                    }}
                >
                    {title}
                </Typography>
                <Typography sx={{ fontSize: "1.125rem" }}>
                    Lorem ipsum dolor sit amet consectetur. Massa amet faucibus
                    cum.Massa amet faucibu
                </Typography>
                <Typography sx={{ fontSize: "0.75rem", pb: "1.5rem" }}>
                    +38 067 12 24 876
                </Typography>
                <Link
                    sx={{
                        width: "14.563rem",
                        height: "2.5rem",
                        textDecoration: "inherit",
                        color: "inherit",
                        backgroundColor: "background.light",
                        px: "4.5rem",
                        py: "0.563rem",
                        fontSize: "1.125rem",
                        borderRadius: "0.5rem",
                        cursor: "pointer",
                    }}
                >
                    Телеграм
                </Link>
            </CardContent>
        </Card>
    );
};
