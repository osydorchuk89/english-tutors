"use client";

import { useState, createContext } from "react";
import Image from "next/image";
import { Box, Button, Typography, Modal } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import {
    DataGrid,
    GridToolbarContainer,
    GridActionsCellItem,
} from "@mui/x-data-grid";
import { deleteScreenshot } from "@/lib/actions";
import { ScreenshotModal } from "./ScreenshotModal";

export const ScreenshotModalContext = createContext({
    modalOpen: false,
    setModalOpen: () => {},
});

const AddToolbar = (props) => {
    const { setModalOpen } = props;

    return (
        <GridToolbarContainer>
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
                    mb: "16px",
                }}
                startIcon={<AddIcon />}
                onClick={() => setModalOpen(true)}
            >
                Додати запис
            </Button>
        </GridToolbarContainer>
    );
};

export const ScreenshotTable = ({ screenshots }) => {
    const [rows, setRows] = useState(screenshots);
    const [modalOpen, setModalOpen] = useState(false);
    const value = { modalOpen, setModalOpen };

    const handleDeleteClick = (id) => async () => {
        const confirmDelete = confirm(
            "Ви впевнені, що хочете видалити цей запис?"
        );
        if (confirmDelete) {
            setRows(rows.filter((row) => row.id !== id));
            await deleteScreenshot(id);
        }
    };

    const columns = [
        {
            field: "screenshot",
            headerName: "Скріншот",
            width: 500,
            sortable: false,
            renderCell: (params) => {
                const imagePath = params.row.photo;
                return (
                    <Image
                        src={imagePath}
                        alt="uploaded image"
                        width={128}
                        height={128}
                    />
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
        <ScreenshotModalContext.Provider value={value}>
            <Box
                sx={{
                    height: "89vh",
                    width: "80%",
                }}
            >
                <Typography
                    sx={{
                        ml: "10px",
                        mb: "10px",
                        fontSize: "24px",
                    }}
                >
                    Учителі
                </Typography>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    getRowHeight={() => "auto"}
                    disableRowSelectionOnClick
                    slots={{
                        toolbar: AddToolbar,
                    }}
                    slotProps={{
                        toolbar: { setModalOpen },
                    }}
                    sx={{
                        "&.MuiDataGrid-root--densityCompact .MuiDataGrid-cell":
                            {
                                py: "8px",
                            },
                        "&.MuiDataGrid-root--densityStandard .MuiDataGrid-cell":
                            {
                                py: "15px",
                            },
                        "&.MuiDataGrid-root--densityComfortable .MuiDataGrid-cell":
                            { py: "22px" },
                        overflowX: "auto",
                    }}
                />
            </Box>
            <Modal
                open={modalOpen}
                onClose={() => {
                    setModalOpen(false);
                }}
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    ml: "-1rem",
                }}
            >
                <ScreenshotModal
                    setModalOpen={setModalOpen}
                    screenshots={screenshots}
                />
            </Modal>
        </ScreenshotModalContext.Provider>
    );
};
