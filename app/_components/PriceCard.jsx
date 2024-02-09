import {
    Box,
    Card,
    CardContent,
    Typography,
    List,
    ListItem,
    ListItemText,
} from "@mui/material";

const pricesText = [
    "1 урок . . . . . . . . . . . . . . 240 ₴",
    "4 урока . . . . . . . . . . . . 960 ₴",
    "8 уроков . . . . . . . . . . 1920 ₴",
    "24 урока . . . . . . . . . . 5760 ₴",
];

export const PriceCard = () => {
    return (
        <Card
            id="price-card"
            elevation={0}
            sx={{
                width: "17.8125rem",
                height: "18.75rem",
                borderRadius: "1rem",
                backgroundColor: "background.dark",
            }}
        >
            <CardContent>
                <Box
                    sx={{
                        width: "100%",
                        background: "#B7B7B7",
                        borderRadius: "1rem",
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: "1.5rem",
                            fontWeight: 700,
                            py: "3rem",
                            pl: "1.5rem",
                        }}
                    >
                        Індивідуально
                    </Typography>
                </Box>
                <List>
                    {pricesText.map((item) => (
                        <ListItem
                            key={item}
                            sx={{ py: "0.1rem", textAlign: "center" }}
                        >
                            <ListItemText>{item}</ListItemText>
                        </ListItem>
                    ))}
                </List>
            </CardContent>
        </Card>
    );
};
