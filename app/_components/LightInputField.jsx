import { TextField } from "@mui/material";

export const LightInputField = ({ type, label, name, multiline, rows }) => {
    return (
        <TextField
            variant="outlined"
            type={type}
            label={label}
            name={name}
            multiline={multiline}
            rows={rows}
            sx={{
                "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                        borderColor: "disabledText.main",
                    },
                    "&:hover fieldset": {
                        borderColor: "disabledText.main",
                    },
                    "&.Mui-focused fieldset": {
                        borderColor: "darkBlue.dark",
                    },
                },
                input: {
                    color: "darkBlue.dark",
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
