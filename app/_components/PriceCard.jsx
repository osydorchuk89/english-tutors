import { Box, Paper, Typography, List, ListItem, Stack } from "@mui/material";

export const PriceCard = ({ title, offers }) => {
    return (
        <Paper
            id="price-card"
            elevation={0}
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: { xxs: "358px", xs: "367px", md: "387px", xl: "485px" },
                height: { xxs: "337px", xs: "369px", xl: "415px" },
                borderRadius: "16px",
                backgroundColor: "lightBlue.dark",
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
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: { xxs: "93px", xs: "125px", xl: "135px" },
                    backgroundColor: "darkBlue.light",
                    gap: "8px",
                    borderRadius: "16px",
                }}
            >
                <Typography
                    sx={{
                        color: "lightBlue.light",
                        fontSize: { xxs: "24px", xl: "32px" },
                        fontWeight: 700,
                    }}
                >
                    {title}
                </Typography>
            </Box>
            <List
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: {
                        xxs: "calc(100% - 32px)",
                        xs: "calc( 100% - 40px )",
                        md: "calc( 100% - 60px )",
                    },
                    height: {
                        xxs: "calc(100% - 93px)",
                        xs: "calc( 100% - 125px )",
                        xl: "calc( 100% - 135px )",
                    },
                    py: 0,
                    mx: { xxs: "16px", xs: "20px", md: "30px" },
                    gap: "16px",
                }}
            >
                {offers.map((item) => (
                    <ListItem key={item.id} sx={{ p: 0 }}>
                        <Stack sx={{ width: "100%" }}>
                            <Stack
                                direction="row"
                                sx={{ position: "relative", width: "100%" }}
                            >
                                <Typography
                                    sx={{
                                        fontsize: {
                                            xxs: "18px",
                                            xs: "16px",
                                            md: "18px",
                                            xl: "22px",
                                        },
                                        float: "left",
                                    }}
                                >
                                    {item.lessons}
                                </Typography>
                                <Box
                                    sx={{
                                        flexGrow: 1,
                                        borderBottomStyle: "dotted",
                                        borderBottomWidth: "2px",
                                        borderBottomColor: "darkBlue.dark",
                                        mx: "4px",
                                        mb: "6px",
                                    }}
                                />
                                <Typography
                                    sx={{
                                        fontsize: {
                                            xxs: "18px",
                                            xs: "16px",
                                            md: "18px",
                                            xl: "22px",
                                        },
                                        float: "right",
                                    }}
                                >
                                    {item.price}
                                </Typography>
                            </Stack>
                            <Typography
                                sx={{
                                    fontSize: { xxs: "10px", md: "12px" },
                                    fontWeight: 700,
                                }}
                            >
                                {item.discount}
                            </Typography>
                        </Stack>
                    </ListItem>
                ))}
            </List>
        </Paper>
    );
};
