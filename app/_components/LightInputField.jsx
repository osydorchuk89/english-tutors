import { TextField } from "@mui/material";

export const LightInputField = ({
    type,
    label,
    name,
    multiline,
    error,
    helperText,
    onFocus,
    defaultValue,
    inputProps,
}) => {
    return (
        <TextField
            variant="outlined"
            type={type}
            label={label}
            name={name}
            multiline={multiline}
            rows={5}
            error={error}
            helperText={helperText}
            onFocus={onFocus}
            defaultValue={defaultValue}
            inputProps={inputProps}
            FormHelperTextProps={{
                sx: {
                    textAlign: "right",
                    mt: 0,
                    mr: 0,
                    fontSize: "12px",
                    fontWeight: 700,
                },
            }}
            sx={{
                "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                        borderColor: "darkBlue.dark",
                    },
                    "&:hover fieldset": {
                        borderColor: "darkBlue.dark",
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
