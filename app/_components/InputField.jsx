import { TextField } from "@mui/material";

export const InputField = ({ type, label, name }) => {
    return (
        <TextField
            variant="outlined"
            type={type}
            label={label}
            name={name}
            sx={{
                "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                        borderColor: "lightBlue.light",
                    },
                    "&:hover fieldset": {
                        borderColor: "lightBlue.light",
                    },
                    "&.Mui-focused fieldset": {
                        borderColor: "lightBlue.light",
                    },
                },
                input: {
                    color: "lightBlue.light",
                },
            }}
            InputLabelProps={{
                sx: {
                    color: "disabledText.main",
                    "&.Mui-focused": { color: "disabledText.main" },
                },
            }}
        />
    );
};
