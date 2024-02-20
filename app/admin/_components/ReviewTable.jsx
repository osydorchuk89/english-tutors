import { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { approveReview, deleteReview } from "@/lib/actions";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";

export const ReviewTable = ({ reviews }) => {
    const [rows, setRows] = useState(reviews);

    const handleReviewApproval = (id) => async () => {
        const confirmDelete = confirm(
            "Ви впевнені, що хочете підтвердити цей відгук?"
        );
        if (confirmDelete) {
            const targetRowIndex = rows.findIndex((row) => row.id === id);
            rows[targetRowIndex].approved = "Підтверджено";
            setRows([...rows]);
            await approveReview(id);
        }
    };

    const handleDeleteClick = (id) => async () => {
        const confirmDelete = confirm(
            "Ви впевнені, що хочете видалити цей запис?"
        );
        if (confirmDelete) {
            setRows(rows.filter((row) => row.id !== id));
            await deleteReview(id);
        }
    };

    const columns = [
        {
            field: "name",
            headerName: "Ім'я",
            width: 200,
            sortable: false,
        },
        {
            field: "text",
            headerName: "Текст",
            width: 500,
            sortable: false,
        },
        {
            field: "approved",
            headerName: "Статус",
            width: 200,
        },
        {
            field: "approve",
            headerName: "Підтвердити",
            width: 150,
            renderCell: (params) => {
                const approved = params.row.approved === "Підтверджено";
                return (
                    <Button
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
                        }}
                        disabled={approved}
                        onClick={handleReviewApproval(params.id)}
                    >
                        Підтвердити
                    </Button>
                );
            },
        },
        {
            field: "actions",
            type: "actions",
            headerName: "Дії",
            width: 100,
            getActions: ({ id }) => {
                return [
                    <GridActionsCellItem
                        icon={<DeleteIcon />}
                        label="Delete"
                        onClick={handleDeleteClick(id)}
                        color="inherit"
                    />,
                ];
            },
        },
    ];

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
                disableRowSelectionOnClick
                editMode="row"
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
