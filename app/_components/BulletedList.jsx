import { List, ListItem, ListItemText } from "@mui/material";

export const BulletedList = ({ items }) => {
    return (
        <List
            disablePadding
            dense
            sx={{
                marginBottom: "32px",
                paddingLeft: "16px",
                listStyleType: "disc",
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
                            fontSize: { lg: "22px", xl: "30px" },
                            lineHeight: {
                                lg: "26.82px",
                                xl: "36.57px",
                            },
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
