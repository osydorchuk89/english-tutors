import { Box, Stack, Typography } from "@mui/material";

const conditions = [
    { id: 1, text: "60 хвилин" },
    { id: 2, text: "Продуктивність" },
    { id: 3, text: "На звʼязку 24/7" },
    { id: 4, text: "Гарантований результат" },
];

export const LessonConditions = ({ direction }) => {
    return (
        <Stack
            direction={direction}
            justifyContent="space-between"
            alignItems="flex-end"
            spacing={{ xxs: 2, md: 5, xl: 10 }}
            sx={{
                mx: { md: "60px", xl: "100px" },
                mt: { xxs: "40px", sm: 0 },
                height: "100%",
            }}
        >
            {conditions.map((item) => (
                <Box
                    key={item.id}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "8px",
                        backgroundColor: "lightBlue.main",
                        width: { xxs: "358px", xs: "367px", sm: "auto" },
                        px: { xs: "16px", lg: "24px", xl: "24px" },
                        py: "12px",
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: {
                                xxs: "18px",
                                xs: "22px",
                                lg: "24px",
                                xl: "28px",
                            },
                            textAlign: "center",
                        }}
                    >
                        {item.text}
                    </Typography>
                </Box>
            ))}
        </Stack>
    );
};
