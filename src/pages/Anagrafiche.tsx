import React, { useEffect, useState } from "react";
import { Grid, Paper } from "@material-ui/core";
import clsx from "clsx";
import StandardContainer from '../components/layout/StandardContainer';
import { useStyles } from '../hook/useStyles';
import { DynamicTable } from '../components/Table/DynamicTable';
import { actions, state } from '../store/anagrafiche';
import { useSnapshot } from 'valtio';
import AnagraficaDialog from '../components/Dialog/AnagraficaDialog';


const Anagrafiche: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false);
    const { paper } = useStyles();
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

    const onClickRow = (row: any) => {
        console.log(row)
        setOpen(true);
    }

    return (
        <>
            <AnagraficaDialog
                open={open}
                setOpen={setOpen}
                title="Nuova anagrafica"
                isNew={true}
                onSave={(obj: any) => {
                    console.log(obj)
                }}
                onDelete={(obj: any) => {
                    console.log(obj)
                }}
                onUpdate={(obj: any) => {
                    console.log(obj)
                }}
            />
            <StandardContainer>
                <Grid item xs={12} md={6} lg={6}>
                    <Paper className={clsx(paper)}>
                        <DynamicTable items={snap.fornitori ? snap.fornitori.list : []} properties={snap.fornitori ? snap.fornitori.controls : []} title="Fornitori" recent={false} onClickRow={onClickRow} />
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                    <Paper className={clsx(paper)}>
                        <DynamicTable items={snap.clienti ? snap.clienti.list : []} properties={snap.clienti ? snap.clienti.controls : []} title="Clienti" recent={false} onClickRow={onClickRow} />
                    </Paper>
                </Grid>
            </StandardContainer>
            <StandardContainer>
                <Grid item xs={12} md={6} lg={6}>
                    <Paper className={clsx(paper)}>
                        <DynamicTable items={snap.tipoCollo ? snap.tipoCollo.list : []} properties={snap.tipoCollo ? snap.tipoCollo.controls : []} title="Tipo Collo" recent={false} onClickRow={onClickRow} />
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                    <Paper className={clsx(paper)}>
                        <DynamicTable items={snap.tipoCassa ? snap.tipoCassa.list : []} properties={snap.tipoCassa ? snap.tipoCassa.controls : []} title="Tipo Cassa" recent={false} onClickRow={onClickRow} />
                    </Paper>
                </Grid>
            </StandardContainer>
        </>
    );
};

export default Anagrafiche;
