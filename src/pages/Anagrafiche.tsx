import React, { useEffect, useState } from "react";
import { Fab, Grid, Paper } from "@material-ui/core";
import clsx from "clsx";
import StandardContainer from '../components/layout/StandardContainer';
import { useStyles } from '../hook/useStyles';
import { DynamicTable } from '../components/Table/DynamicTable';
import { actions, state } from '../store/anagrafiche';
import { useSnapshot } from 'valtio';
import AnagraficaDialog from '../components/Dialog/AnagraficaDialog';
import Add from '@material-ui/icons/Add';


const Anagrafiche: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [isNew, setIsNew] = useState<boolean>(false);
    const [who, setWho] = useState<string>('');
    const [stateControls, setStateControls] = useState<any[]>();;
    const { paper, fabContainer, fabPaperMargin } = useStyles();
    const snap = useSnapshot(state)
    useEffect(() => {
        actions.fetchFornitori();
        actions.fetchClienti();
        actions.fetchTipoCollo();
        actions.fetchTipoCassa();
    }, []);

    // alert(JSON.stringify(snap.fornitori))
    // alert(JSON.stringify(snap.clienti))
    // alert(JSON.stringify(snap.tipoCollo))
    // alert(JSON.stringify(snap.tipoCassa))

    const onClickRow = (row: any, controls: any) => {
        setIsNew(false)
        console.log(row)
        setStateControls(controls)
        setOpen(true);
    }

    const onCreate = (controls: any, who: string) => {
        setIsNew(true);
        setWho(`${who.charAt(0).toUpperCase()}${who.slice(1)}`);
        setStateControls(controls)
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
                        <Fab onClick={() => onCreate(snap.fornitori.controls, "Fornitori")} size="small" color="primary" className={fabPaperMargin}>
                            <Add />
                        </Fab>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                    <Paper className={clsx(paper, fabContainer)}>
                        <DynamicTable items={snap.clienti ? snap.clienti.list : []} properties={snap.clienti ? snap.clienti.controls : []} title="Clienti" recent={false} onClickRow={(row) => onClickRow(row, snap.clienti.controls)} />
                        <Fab onClick={() => onCreate(snap.clienti.controls, 'Clienti')} size="small" color="primary" className={fabPaperMargin}>
                            <Add />
                        </Fab>
                    </Paper>
                </Grid>
            </StandardContainer>
            <StandardContainer>
                <Grid item xs={12} md={6} lg={6}>
                    <Paper className={clsx(paper, fabContainer)}>
                        <DynamicTable items={snap.tipoCollo ? snap.tipoCollo.list : []} properties={snap.tipoCollo ? snap.tipoCollo.controls : []} title="Tipo Collo" recent={false} onClickRow={(row) => onClickRow(row, snap.tipoCollo.controls)} />
                        <Fab onClick={() => onCreate(snap.tipoCollo.controls, 'Tipo Collo')} size="small" color="primary" className={fabPaperMargin}>
                            <Add />
                        </Fab>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                    <Paper className={clsx(paper, fabContainer)}>
                        <DynamicTable items={snap.tipoCassa ? snap.tipoCassa.list : []} properties={snap.tipoCassa ? snap.tipoCassa.controls : []} title="Tipo Cassa" recent={false} onClickRow={(row) => onClickRow(row, snap.tipoCassa.controls)} />
                        <Fab onClick={() => onCreate(snap.tipoCassa.controls, 'Tipo Cassa')} size="small" color="primary" className={fabPaperMargin}>
                            <Add />
                        </Fab>
                    </Paper>
                </Grid>
            </StandardContainer>
        </>
    );
};

export default Anagrafiche;
