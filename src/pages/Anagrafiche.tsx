import React, { useEffect, useState } from "react";
import { Fab, Grid, Paper } from "@mui/material";
import clsx from "clsx";
import StandardContainer from '../components/layout/StandardContainer';
import { useStyles } from '../hook/useStyles';
import { DynamicTable } from '../components/Table/DynamicTable';
import { actionsAnagrafica, state } from '../store/anagrafiche';
import { useSnapshot } from 'valtio';
import AnagraficaDialog from '../components/Dialogs/AnagraficaDialog';
import Add from '@mui/icons-material/Add';
import { TAnagrafiche } from '../types';


const Anagrafiche: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [isNew, setIsNew] = useState<boolean>(false);
    const [who, setWho] = useState<string>('');
    const [stateControls, setStateControls] = useState<any[]>();;
    const { paper, fabContainer, fabPaperMargin } = useStyles();
    const snap = useSnapshot(state)
    useEffect(() => { }, []);


    const onClickRow = (row: any, controls: any) => {
        setIsNew(false)
        setStateControls(controls)
        actionsAnagrafica.setAnagrafica(row)
        setOpen(true);
    }

    const onCreate = (controls: any, who: TAnagrafiche) => {
        setIsNew(true);
        setWho(`${who.charAt(0).toUpperCase()}${who.slice(1)}`);
        setStateControls(controls)
        actionsAnagrafica.setAnagrafica(state[who].initialState)
        setOpen(true);
    }

    return (
        <>
            <AnagraficaDialog
                open={open}
                setOpen={setOpen}
                title={`${isNew ? 'Crea' : 'Aggiorna'} Anagrafica ${who}`}
                isNew={isNew}
                onSave={(obj: any) => {
                    console.log(obj)
                }}
                onDelete={(obj: any) => {
                    console.log(obj)
                }}
                onUpdate={(obj: any) => {
                    console.log(obj)
                }}
                controls={stateControls}
            />
            <StandardContainer>
                <Grid item xs={12} md={6} lg={6}>
                    <Paper className={clsx(paper, fabContainer)}>
                        <DynamicTable items={snap.fornitori ? snap.fornitori.list : []} properties={snap.fornitori ? snap.fornitori.controls : []} title="Fornitori" recent={false} onClickRow={(row) => onClickRow(row, snap.fornitori.controls)} />
                        <Fab onClick={() => onCreate(snap.fornitori.controls, 'fornitori')} size="small" color="primary" className={fabPaperMargin}>
                            <Add />
                        </Fab>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                    <Paper className={clsx(paper, fabContainer)}>
                        <DynamicTable items={snap.clienti ? snap.clienti.list : []} properties={snap.clienti ? snap.clienti.controls : []} title="Clienti" recent={false} onClickRow={(row) => onClickRow(row, snap.clienti.controls)} />
                        <Fab onClick={() => onCreate(snap.clienti.controls, 'clienti')} size="small" color="primary" className={fabPaperMargin}>
                            <Add />
                        </Fab>
                    </Paper>
                </Grid>
            </StandardContainer>
            <StandardContainer>
                <Grid item xs={12} md={6} lg={6}>
                    <Paper className={clsx(paper, fabContainer)}>
                        <DynamicTable items={snap.tipoCollo ? snap.tipoCollo.list : []} properties={snap.tipoCollo ? snap.tipoCollo.controls : []} title="Tipo Collo" recent={false} onClickRow={(row) => onClickRow(row, snap.tipoCollo.controls)} />
                        <Fab onClick={() => onCreate(snap.tipoCollo.controls, 'tipoCollo')} size="small" color="primary" className={fabPaperMargin}>
                            <Add />
                        </Fab>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                    <Paper className={clsx(paper, fabContainer)}>
                        <DynamicTable items={snap.tipoCassa ? snap.tipoCassa.list : []} properties={snap.tipoCassa ? snap.tipoCassa.controls : []} title="Tipo Cassa" recent={false} onClickRow={(row) => onClickRow(row, snap.tipoCassa.controls)} />
                        <Fab onClick={() => onCreate(snap.tipoCassa.controls, 'tipoCassa')} size="small" color="primary" className={fabPaperMargin}>
                            <Add />
                        </Fab>
                    </Paper>
                </Grid>
            </StandardContainer>
        </>
    );
};

export default Anagrafiche;
