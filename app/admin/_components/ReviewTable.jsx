import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
        field: "name",
        headerName: "Ім'я",
        width: 300,
        sortable: false,
    },
    {
        field: "text",
        headerName: "Текст",
        width: 500,
        sortable: false,
    },
];

export const ReviewTable = ({ reviews }) => {
    const rows = reviews.map((item) => ({
        id: item.id,
        name: item.name,
        text: item.text,
    }));

    return (
        <Box sx={{ width: "80%" }}>
            <Typography
                sx={{
                    ml: "10px",
                    mb: "10px",
                    fontSize: "24px",
                }}
            >
                Відгуки
            </Typography>
            <DataGrid
                rows={rows}
                columns={columns}
                getRowHeight={() => "auto"}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                pageSizeOptions={[5]}
                disableRowSelectionOnClick
                sx={{
                    height: "90%",
                    "&.MuiDataGrid-root--densityCompact .MuiDataGrid-cell": {
                        py: "8px",
                    },
                    "&.MuiDataGrid-root--densityStandard .MuiDataGrid-cell": {
                        py: "15px",
                    },
                    "&.MuiDataGrid-root--densityComfortable .MuiDataGrid-cell":
                        { py: "22px" },
                }}
            />
        </Box>
    );
};
