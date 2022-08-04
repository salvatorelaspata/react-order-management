import React, { Dispatch, SetStateAction, useState } from "react";
import clsx from "clsx";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import { initialToDo, mockOptions, ToDoProp } from "../../hook/types";
import { useStyles } from "../../hook/useStyles";
import InputOutlined from "../Input/InputOutlined";
import SelectOutlined from "../Input/SelectOutlined";

interface FormProps {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    isNew: boolean;
    saveToDo: (obj: ToDoProp) => void;
    editToDo: (obj: ToDoProp) => void;
}

const AddToDoDialog: React.FC<FormProps> = ({
    open,
    setOpen,
    isNew,
    saveToDo,
    editToDo,
}) => {
    const [isEdit, setIsEdit] = useState<boolean>(isNew);
    const [currentToDo, setCurrentToDo] = useState<ToDoProp>(initialToDo);

    const theme = useTheme();
    const classes = useStyles(theme);
    const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (e: any) => {
        setCurrentToDo({ ...currentToDo, [e.target.name]: e.target.value });
    };

    return (
        <Dialog
            fullScreen={fullScreen}
            fullWidth={true}
            open={open}
            maxWidth={"sm"}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
        >
            <DialogTitle
                style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                {currentToDo.title || "Creazione"}
            </DialogTitle>

            <DialogContent>
                <Grid container justifyContent="space-around">
                    <SelectOutlined
                        id="39df8474-5a13-453d-b265-789b3d2f5e6b"
                        value={currentToDo.state || ""}
                        label="Stato"
                        name="state"
                        handleChange={handleChange}
                        options={mockOptions}
                        disabled={!isEdit}
                    />
                    <InputOutlined
                        handleChange={handleChange}
                        label="Title"
                        name="title"
                        type="title"
                        value={currentToDo.title || ""}
                        disabled={!isEdit}
                    />
                    <InputOutlined
                        handleChange={handleChange}
                        label="Text"
                        name="text"
                        type="text"
                        value={currentToDo.text || ""}
                        disabled={!isEdit}
                    />
                </Grid>
            </DialogContent>
            <DialogActions
                style={{
                    justifyContent: !isNew ? "space-between" : "flex-end",
                }}
            >
                {!isNew && (
                    <div>
                        <Button onClick={() => setIsEdit(!isEdit)}>
                            <CreateIcon />
                        </Button>

                        <Button>
                            <DeleteIcon />
                        </Button>
                    </div>
                )}
                <div>
                    <Button
                        onClick={() => {
                            isNew
                                ? saveToDo(currentToDo)
                                : editToDo(currentToDo);
                        }}
                        color="primary"
                        className={clsx(!isEdit && classes.none)}
                    >
                        Salva
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Chiudi
                    </Button>
                </div>
            </DialogActions>
        </Dialog>
    );
};
export default AddToDoDialog;
