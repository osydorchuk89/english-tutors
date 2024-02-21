import { IconButton } from "@mui/material";

export const NavButton = ({ onClick, icon, disabled, _id }) => {
    return (
        <IconButton
            disableRipple
            id={_id}
            disabled={disabled}
            sx={{
                width: "56px",
                height: "56px",
                backgroundColor: "lightBlue.main",
                borderRadius: "50%",
                alignSelf: "center",
                "&:hover": {
                    boxShadow: "0px 0px 12px 0px #14313D66",
                },
                "&:active": {
                    boxShadow: "0px 0px 8px 0px #14313D66 inset",
                },
            }}
            onClick={onClick}
        >
            {icon}
        </IconButton>
    );
};
