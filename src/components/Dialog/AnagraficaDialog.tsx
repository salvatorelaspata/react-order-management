import React, { Dispatch, SetStateAction } from "react";
import clsx from "clsx";
import { useMediaQuery, useTheme } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import { useStyles } from "../../hook/useStyles";

interface FormProps {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    title: string;
    isNew: boolean;
    onSave: (obj: any) => void;
    onDelete: (obj: any) => void;
    onUpdate: (obj: any) => void;
}

const AnagraficaDialog: React.FC<FormProps> = ({
    open, setOpen,
    title,
    isNew,
    onSave,
    onDelete,
    onUpdate
}) => {
    const theme = useTheme();
    const classes = useStyles(theme);
    const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

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
            </DialogContent>
            <DialogActions>
                <>
                    <div>
                        <Button onClick={onSave}>
                            <CreateIcon />
                        </Button>

                        <Button onClick={onDelete}>
                            <DeleteIcon />
                        </Button>
                    </div>
                    <div>
                        <Button
                            onClick={() => {
                                isNew
                                    ? onSave({})
                                    : onUpdate({});
                            }}
                            color="primary"
                            className={clsx(!isNew && classes.none)}
                        >
                            Salva
                        </Button>
                        <Button onClick={() => setOpen(false)} color="primary">
                            Chiudi
                        </Button>
                    </div>
                </>
            </DialogActions>
        </Dialog>
    );
};
export default AnagraficaDialog;
