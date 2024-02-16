import { IconButton } from "@mui/material";

export const NavButton = ({ onClick, icon, disabled, _id }) => {
    return (
        <IconButton
            id={_id}
            disabled={disabled}
            sx={{
                width: "56px",
                height: "56px",
                backgroundColor: "lightBlue.main",
                borderRadius: "50%",
                alignSelf: "center",
            }}
            onClick={onClick}
        >
            {icon}
        </IconButton>
    );
};
