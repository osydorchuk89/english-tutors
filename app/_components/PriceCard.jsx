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
                width: { lg: "387px", xl: "485px" },
                height: { lg: "369px", xl: "415px" },
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
                    height: { lg: "125px", xl: "135px" },
                    backgroundColor: "darkBlue.light",
                    gap: "8px",
                    borderRadius: "16px",
                }}
            >
                <Typography
                    sx={{
                        color: "lightBlue.light",
                        fontSize: { lg: "24px", xl: "32px" },
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
                    width: "calc( 100% - 60px )",
                    height: "calc( 100% - 125px )",
                    py: 0,
                    mx: "30px",
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
                                        fontsize: { lg: "18px", xl: "22px" },
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
                                        fontsize: { lg: "18px", xl: "22px" },
                                        float: "right",
                                    }}
                                >
                                    {item.price}
                                </Typography>
                            </Stack>
                            <Typography
                                sx={{ fontSize: "12px", fontWeight: 700 }}
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
