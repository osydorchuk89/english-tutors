import { AppBar, Typography, Stack } from "@mui/material";
import { NavLink } from "../_components/NavLink";
import { navItems } from "../../lib/navItems";

export const BottomNavBar = () => {
    return (
        <AppBar
            component="footer"
            position="static"
            elevation={0}
            sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                width: "100%",
                height: "8.688rem",
                px: "7.5rem",
                backgroundColor: "background.dark",
                borderRadius: "2rem 2rem 0 0",
                top: "auto",
                bottom: 0,
            }}
        >
            <Typography
                variant="h6"
                component="div"
                sx={{ fontSize: "1.5rem", width: "9.1875rem" }}
            >
                English
            </Typography>
            <Stack
                direction="row"
                justifyContent="flex-end"
                spacing={4}
                sx={{ width: "90rem" }}
            >
                {navItems.map((item) => (
                    <NavLink anchor={item.anchor} key={item} text={item.text} />
                ))}
            </Stack>
        </AppBar>
    );
};
