import React, { Dispatch, SetStateAction } from "react";
// import clsx from "clsx";
// import { useStyles } from "../../hook/useStyles";
import { useMediaQuery, useTheme } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
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
