import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export const AddButton = ({ onClick }) => {
    return (
        <Button
            disableRipple
            variant="outlined"
            sx={{
                backgroundColor: "inherit",
                borderColor: "darkBlue.dark",
                color: "inherit",
                "&:hover": {
                    backgroundColor: "lightBlue.main",
                    borderColor: "darkBlue.dark",
                },
                "&:active": {
                    backgroundColor: "lightBlue.dark",
                },
                mb: "16px",
            }}
            startIcon={<AddIcon />}
            onClick={onClick}
        >
            Додати запис
        </Button>
    );
};
