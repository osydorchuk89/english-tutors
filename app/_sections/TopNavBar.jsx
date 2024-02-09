import { AppBar, Typography, Stack } from "@mui/material";
import { NavLink } from "../_components/NavLink";
import { navItems } from "../../lib/navItems";

export const TopNavBar = () => {
    return (
        <AppBar
            position="sticky"
            elevation={0}
            sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                px: "7.5rem",
                backgroundColor: "background.light",
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
