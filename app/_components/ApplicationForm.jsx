"use client";

import axios from "axios";
import { useState, useContext, useRef, createContext } from "react";
import { ModalContext } from "./TryItCard";
import {
    TextField,
    Stack,
    Paper,
    Typography,
    Box,
    IconButton,
    Modal,
} from "@mui/material";
import { OrderButton } from "./OrderButton";
import { createApplication } from "../../lib/actions";
import CloseIcon from "@mui/icons-material/Close";
import { MuiTelInput } from "mui-tel-input";
import { PopUpForm } from "./PopUpForm";

const PopUpModalContext = createContext({
    popUpModalOpen: false,
    setPopUpModalOpen: () => {},
});

const DarkInputField = ({ type, label, name, error, helperText, onFocus }) => {
    return (
        <TextField
            variant="outlined"
            id="outlined-error-helper-text"
            error={error}
            helperText={helperText}
            type={type}
            label={label}
            name={name}
            onFocus={onFocus}
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
                        borderColor: "lightBlue.light",
                    },
                    "&:hover fieldset": {
                        borderColor: "lightBlue.light",
                    },
                    "&.Mui-focused fieldset": {
                        borderColor: "lightBlue.light",
                    },
                },
                input: {
                    color: "lightBlue.light",
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

const PhoneInputField = ({ value, onChange, error, helperText, onFocus }) => {
    return (
        <MuiTelInput
            defaultCountry="UA"
            forceCallingCode
            focusOnSelectCountry
            langOfCountryName="uk"
            type="tel"
            label="Номер телефону"
            name="phone"
            value={value}
            onChange={onChange}
            id="outlined-error-helper-text"
            error={error}
            helperText={helperText}
            onFocus={onFocus}
            FormHelperTextProps={{
                sx: {
                    textAlign: "right",
                    mt: 0,
                    mr: 0,
                    fontSize: "12px",
                    fontWeight: 700,
                },
            }}
            inputProps={{
                maxLength: 11,
            }}
            MenuProps={{
                MenuListProps: {
                    sx: {
                        backgroundColor: "darkBlue.dark",
                        "& .MuiListItemText-primary": {
                            color: "lightBlue.light",
                        },
                        "& .MuiTelInput-Typography-calling-code": {
                            color: "lightBlue.light",
                        },
                        "& .MuiTelInput-MenuItem": {
                            "&:hover": {
                                backgroundColor: "darkBlue.light",
                            },
                        },
                    },
                },
                sx: {
                    height: "80%",
                    width: "90%",
                    color: "lightBlue.light",
                    "& .MuiListItemText-root": {
                        color: "lightBlue.light",
                        sx: { color: "lightBlue.light" },
                    },
                },
            }}
            InputLabelProps={{
                sx: {
                    color: "disabledText.main",
                    "&.Mui-focused": {
                        color: "disabledText.main",
                    },
                    "&.MuiTelInput-IconButton": {
                        disableRipple: true,
                    },
                },
            }}
            sx={{
                "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                        borderColor: "lightBlue.light",
                    },
                    "&:hover fieldset": {
                        borderColor: "lightBlue.light",
                    },
                    "&.Mui-focused fieldset": {
                        borderColor: "lightBlue.light",
                    },
                },
                "& .MuiTypography-root": {
                    color: "lightBlue.light",
                    borderRight: 0,
                },
                // "&.MuiTelInput-IconButton": {
                //     disableRipple: true,
                // },
                input: { color: "lightBlue.light" },
            }}
        />
    );
};

export const ApplicationForm = ({ borderRadiusProp, display }) => {
    const [popUpModalOpen, setPopUpModalOpen] = useState(false);
    const value = { popUpModalOpen, setPopUpModalOpen };

    const allInputsNotFocused = {
        name: false,
        phone: false,
    };
    const [inputsFocused, setInputsFocused] = useState(allInputsNotFocused);
    const [submitButtonClicked, setSubmitButtonClicked] = useState(false);
    const [error, setError] = useState({ name: null, phone: null });
    const [phone, setPhone] = useState("");
    let { setModalOpen } = useContext(ModalContext);
    const formRef = useRef(null);

    const handlePhoneChange = (newPhone) => {
        setPhone(newPhone);
    };

    const createApplicationData = async (formData) => {
        setSubmitButtonClicked(true);
        setInputsFocused(allInputsNotFocused);
        const applicationData = {
            name: formData.get("name"),
            phone: phone.replace(/\s+/g, ""),
        };
        const response = await createApplication(applicationData);
        if (response && response.error) {
            if (response.error.some((e) => e.path[0] === "name")) {
                const nameError = response.error.filter(
                    (e) => e.path[0] === "name"
                );
                setError((prevState) => ({
                    ...prevState,
                    name: nameError[0].message,
                }));
            } else {
                setError((prevState) => ({
                    ...prevState,
                    name: null,
                }));
            }
            if (response.error.some((e) => e.path[0] === "phone")) {
                const phoneError = response.error.filter(
                    (e) => e.path[0] === "phone"
                );
                setError((prevState) => ({
                    ...prevState,
                    phone: phoneError[0].message,
                }));
            } else {
                setError((prevState) => ({
                    ...prevState,
                    phone: null,
                }));
            }
            return;
        }
        setPopUpModalOpen(true);
        setError({
            name: null,
            phone: null,
        });

        const messageText = `You received a new application! Name: ${applicationData.name}, phone number: ${applicationData.phone}`;
        const telegramToken = process.env.NEXT_PUBLIC_TELEGRAM_TOKEN;
        const telegramChatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;
        const telegramURL = `https://api.telegram.org/bot${telegramToken}/sendMessage?chat_id=${telegramChatId}&text=${messageText}`;
        axios({
            method: "get",
            url: telegramURL,
        })
            .then((_) => {
                formRef.current.reset();
                setPhone("");
                setError(null);
            })
            .catch((error) => console.log(error));
    };

    return (
        <PopUpModalContext.Provider value={value}>
            <Paper
                sx={{
                    display: "flex",
                    position: "relative",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    color: "lightBlue.light",
                    backgroundColor: "darkBlue.dark",
                    width: {
                        xxs: "100%",
                        xs: "calc(100% - 40px)",
                        md: "calc(100% - 120px)",
                        xl: "calc(100% - 200px)",
                    },
                    height: {
                        xxs: "513px",
                        xs: "636px",
                        md: "706px",
                        xl: "909px",
                    },
                    aspectRatio: "1.87/1",
                    py: { xxs: "56px", sm: "80px", md: "120px", xl: "182px" },
                    mx: { xxs: 0, xs: "20px", md: "60px", xl: "100px" },
                    borderRadius: borderRadiusProp,
                    boxShadow: `5px 4px 6px 0px #14313D17, 
                    11px 10px 9px 0px #14313D0D, 
                    19px 18px 10px 0px #14313D03,
                    30px 28px 11px 0px #14313D05,
                    0px 4px 4px 0px #14313D40,
                    -4px -4px 4px 0px #14313D1A`,
                }}
            >
                <IconButton
                    disableRipple
                    sx={{
                        display: display,
                        position: "absolute",
                        top: { xxs: "10px", xs: "20px", md: "60px" },
                        right: { xxs: "10px", xs: "20px", md: "60px" },
                        color: "inherit",
                    }}
                    onClick={() => setModalOpen(false)}
                >
                    <CloseIcon
                        sx={{
                            fontSize: { xxs: "24px", xs: "32px", xl: "40px" },
                        }}
                    />
                </IconButton>
                <Typography
                    sx={{
                        fontSize: {
                            xxs: "34px",
                            xs: "40px",
                            md: "48px",
                            xl: "56px",
                        },
                        fontWeight: 700,
                        color: "inherit",
                        mb: {
                            xxs: "32px",
                            xs: "48px",
                            md: "56px",
                        },
                        textAlign: "center",
                    }}
                >
                    Залиште заявку
                </Typography>
                <Box
                    component="form"
                    ref={formRef}
                    action={createApplicationData}
                    sx={{
                        width: {
                            xxs: "90%",
                            xs: "496px",
                            md: "590px",
                            xl: "746px",
                        },
                    }}
                >
                    <Stack
                        spacing={{ xxs: 2, xs: 3, xl: 4 }}
                        sx={{
                            mb: { xxs: "24px", xs: "32px", xl: "56px" },
                        }}
                    >
                        <DarkInputField
                            type="text"
                            label="Ім'я"
                            name="name"
                            error={
                                error &&
                                error.name !== null &&
                                !inputsFocused.name &&
                                submitButtonClicked
                            }
                            helperText={
                                error && !inputsFocused.name ? error.name : ""
                            }
                            onFocus={() =>
                                setInputsFocused((prevState) => ({
                                    ...prevState,
                                    name: true,
                                }))
                            }
                        />
                        <PhoneInputField
                            value={phone}
                            onChange={handlePhoneChange}
                            error={
                                error &&
                                error.phone !== null &&
                                !inputsFocused.phone &&
                                submitButtonClicked
                            }
                            helperText={
                                error && !inputsFocused.phone ? error.phone : ""
                            }
                            onFocus={() =>
                                setInputsFocused((prevState) => ({
                                    ...prevState,
                                    phone: true,
                                }))
                            }
                        />
                    </Stack>
                    <Typography
                        sx={{
                            color: "inherit",
                            fontSize: {
                                xxs: "18px",
                                xs: "18px",
                                md: "24px",
                                xl: "28px",
                            },
                            mb: {
                                xxs: "32px",
                                xs: "48px",
                                md: "56px",
                                xl: "72px",
                            },
                        }}
                    >
                        Ви можете залишити заявку на безкоштовне заняття. Ми
                        відповідаємо протягом години
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <OrderButton text="Записатися" isApplication />
                    </Box>
                </Box>
            </Paper>
            <Modal
                open={popUpModalOpen}
                onClose={() => setPopUpModalOpen(false)}
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    // ml: "-16px",
                }}
            >
                <PopUpForm
                    backgroundColor="darkBlue.dark"
                    textColor="lightBlue.light"
                    isApplication
                    onClick={() => {
                        setPopUpModalOpen(false);
                        setModalOpen(false);
                    }}
                />
            </Modal>
        </PopUpModalContext.Provider>
    );
};
