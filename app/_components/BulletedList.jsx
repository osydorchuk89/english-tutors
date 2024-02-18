import { List, ListItem, ListItemText } from "@mui/material";

export const BulletedList = ({ items, fontSize, width }) => {
    return (
        <List
            disablePadding
            dense
            sx={{
                mb: "32px",
                pl: "16px",
                listStyleType: "disc",
                width: width,
            }}
        >
            {items.map((item) => (
                <ListItem
                    key={item.id}
                    sx={{
                        "&.MuiListItem-root": {
                            padding: 0,
                            margin: 0,
                        },
                        display: "list-item",
                    }}
                >
                    <ListItemText
                        inset={false}
                        disableTypography
                        sx={{
                            fontSize: fontSize,
                            "&.MuiListItemText-root": {
                                padding: 0,
                                margin: 0,
                            },
                        }}
                    >
                        {item.text}
                    </ListItemText>
                </ListItem>
            ))}
        </List>
    );
};
