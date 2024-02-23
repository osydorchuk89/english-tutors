"use client";

import { useState, createContext } from "react";
import Image from "next/image";
import { Box, Button, Typography, Modal } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import {
    DataGrid,
    GridToolbarContainer,
    GridActionsCellItem,
} from "@mui/x-data-grid";
import { deleteTutor } from "@/lib/actions";
import { TutorModal } from "./TutorModal";
import { AddButton } from "./AddButton";

export const TutorModalContext = createContext({
    modalOpen: false,
    setModalOpen: () => {},
});

const AddToolbar = (props) => {
    const { setModalOpen } = props;

    return (
        <GridToolbarContainer>
            <AddButton onClick={() => setModalOpen(true)} />
        </GridToolbarContainer>
    );
};

export const TutorTable = ({ tutors }) => {
    const [rows, setRows] = useState(tutors);
    const [tutorId, setTutorId] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const value = { modalOpen, setModalOpen };

    const handleEditClick = (id) => () => {
        setTutorId(id);
        setModalOpen(true);
    };

    const handleDeleteClick = (id) => async () => {
        const confirmDelete = confirm(
            "Ви впевнені, що хочете видалити цей запис?"
        );
        if (confirmDelete) {
            setRows(rows.filter((row) => row.id !== id));
            await deleteTutor(id);
        }
    };

    const columns = [
        {
            field: "name",
            headerName: "Ім'я",
            width: 150,
            sortable: false,
        },
        {
            field: "experience",
            headerName: "Досвід",
            width: 200,
            sortable: false,
        },
        {
            field: "about",
            headerName: "Про себе",
            width: 600,
            sortable: false,
        },
        {
            field: "photo",
            headerName: "Фото",
            width: 100,
            sortable: false,
            renderCell: (params) => {
                const imagePath = `/${params.value}`;
                return (
                    <Image
                        src={imagePath}
                        alt="uploaded image"
                        width={48}
                        height={48}
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
                        icon={<EditIcon />}
                        label="Edit"
                        onClick={handleEditClick(id)}
                        color="inherit"
                    />,
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
        <TutorModalContext.Provider value={value}>
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
                    setTutorId(null);
                    setModalOpen(false);
                }}
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    // ml: "-16px",
                }}
            >
                <TutorModal
                    setModalOpen={setModalOpen}
                    tutorId={tutorId}
                    tutors={tutors}
                    setTutorId={setTutorId}
                />
            </Modal>
        </TutorModalContext.Provider>
    );
};
