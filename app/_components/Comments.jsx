import { Stack, Typography, Box } from "@mui/material";

const comments = [
    {
        id: 1,
        name: "Анастасія",
        text: "Lorem ipsum dolor sit amet consectetur. Proin natoque adipiscing sagittis aliquet urna nullam. Etiam ut dui tincidunt lorem mauris a at in. Morbi tincidunt ",
    },
    {
        id: 2,
        name: "Анастасія",
        text: "Lorem ipsum dolor sit amet consectetur. Proin natoque adipiscing sagittis aliquet urna nullam. Etiam ut dui tincidunt lorem mauris a at in. Morbi tincidunt ",
    },
    {
        id: 3,
        name: "Анастасія",
        text: "Lorem ipsum dolor sit amet consectetur. Proin natoque adipiscing sagittis aliquet urna nullam. Etiam ut dui tincidunt lorem mauris a at in. Morbi tincidunt ",
    },
    {
        id: 4,
        name: "Анастасія",
        text: "Lorem ipsum dolor sit amet consectetur. Proin natoque adipiscing sagittis aliquet urna nullam. Etiam ut dui tincidunt lorem mauris a at in. Morbi tincidunt ",
    },
];

export const Comments = () => {
    return (
        <Stack
            sx={{
                width: "40rem",
            }}
        >
            <Typography
                sx={{
                    fontSize: "3rem",
                    fontWeight: 700,
                    mb: "3rem",
                }}
            >
                Відгуки
            </Typography>
            <Stack spacing={3}>
                {comments.map((item) => (
                    <Box
                        key={item.id}
                        sx={{
                            width: "30.5rem",
                            height: "11.313rem",
                            backgroundColor: "background.dark",
                            borderRadius: "1rem",
                            p: "1rem",
                            alignSelf:
                                item.id % 2 === 0 ? "flex-end" : "flex-start",
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: "1.5rem",
                                fontWeight: 700,
                                mb: "0.5rem",
                            }}
                        >
                            {item.name}
                        </Typography>
                        <Typography sx={{ fontSize: "1.125rem" }}>
                            {item.text}
                        </Typography>
                    </Box>
                ))}
            </Stack>
        </Stack>
    );
};
