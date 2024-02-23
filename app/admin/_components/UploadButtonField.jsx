import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

const UploadButton = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
});

export const UploadButtonField = ({ text, onChange }) => {
    return (
        <Button
            disableRipple
            component="label"
            variant="outlined"
            sx={{
                backgroundColor: "lightBlue.light",
                borderColor: "disabledText.main",
                color: "inherit",
                ":hover": {
                    bgcolor: "lightBlue.dark",
                    borderColor: "darkBlue.light",
                },
                mb: "30px",
            }}
        >
            {text}
            <UploadButton
                name="photo"
                type="file"
                accept="image/png, image/jpeg"
                onChange={onChange}
            />
        </Button>
    );
};
