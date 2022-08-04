import React, { Dispatch, SetStateAction } from "react";
// import clsx from "clsx";
// import { useStyles } from "../../hook/useStyles";
import { useMediaQuery, useTheme } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import DynamicFormControl from '../Input/DynamicFormControl';
import { useSnapshot } from 'valtio';
import { stateAnagrafica } from '../../store/anagrafiche';

interface FormProps {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    title: string;
    isNew: boolean;
    onSave: (obj: any) => void;
    onDelete: (obj: any) => void;
    onUpdate: (obj: any) => void;
    controls?: readonly any[];
}

const AnagraficaDialog: React.FC<FormProps> = ({
    open, setOpen,
    title,
    isNew,
    onSave,
    onDelete,
    onUpdate,
    controls
}) => {
    const theme = useTheme();
    // const classes = useStyles(theme);
    const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const snapAnagrafica = useSnapshot(stateAnagrafica)

    return (
        <Dialog
            fullScreen={fullScreen}
            fullWidth={true}
            open={open}
            maxWidth={"sm"}
            onClose={() => setOpen(false)}
            aria-labelledby="form-dialog-title"
        >
            <DialogTitle
                style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                {title}
            </DialogTitle>
            <DialogContent>
                {controls && controls.map((control: any) => (<DynamicFormControl key={control.id} {...control} isDisable={false} handleChange={() => { }} handleChangeDate={() => { }} value={snapAnagrafica[control.property]} />))}
            </DialogContent>
            <DialogActions>
                <>
                    {!isNew &&
                        <div>
                            <Button onClick={onSave}>
                                <CreateIcon />
                            </Button>

                            <Button onClick={onDelete}>
                                <DeleteIcon />
                            </Button>
                        </div>}
                    <div>
                        <Button
                            onClick={() => {
                                isNew
                                    ? onSave({})
                                    : onUpdate({});
                            }}
                            color="primary"
                        >
                            {isNew ? `Salva` : `Aggiorna`}
                        </Button>
                        <Button onClick={() => setOpen(false)} color="secondary">
                            Chiudi
                        </Button>
                    </div>
                </>
            </DialogActions>
        </Dialog>
    );
};
export default AnagraficaDialog;
