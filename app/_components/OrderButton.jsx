import { Link } from "@mui/material";

export const OrderButton = ({ onClick, text }) => {
    return (
        <Link
            component="button"
            onClick={onClick}
            sx={{
                width: "13.3rem",
                height: "3.375rem",
                textDecoration: "inherit",
                color: "inherit",
                backgroundColor: "button.main",
                px: "2.5rem",
                py: "1rem",
                fontSize: "1.125rem",
                fontWeight: 700,
                borderRadius: "0.5rem",
                cursor: "pointer",
            }}
        >
            {text}
        </Link>
    );
};
