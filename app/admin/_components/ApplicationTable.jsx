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
        field: "phone",
        headerName: "Телефон",
        width: 300,
        sortable: false,
    },
];

export const ApplicationTable = ({ applications }) => {
    const rows = applications.map((item) => ({
        id: item.id,
        name: item.name,
        phone: item.phone,
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
                Заявки
            </Typography>
            <DataGrid
                rows={rows}
                columns={columns}
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
                }}
            />
        </Box>
    );
};
