import { AppBar, Typography, Stack } from "@mui/material";
import { NavLink } from "./NavLink";
import { navItems } from "../../lib/navItems";

export const NavBar = ({ component, position, styles }) => {
    return (
        <AppBar
            component={component}
            position={position}
            elevation={0}
            sx={styles}
        >
            <Typography
                variant="h6"
                component="div"
                sx={{ fontSize: "1.5rem" }}
            >
                English zoom
            </Typography>
            <Stack
                direction="row"
                justifyContent="flex-end"
                spacing={4}
                sx={{ flexGrow: 1 }}
            >
                {navItems.map((item) => (
                    <NavLink anchor={item.anchor} key={item} text={item.text} />
                ))}
            </Stack>
        </AppBar>
    );
};
