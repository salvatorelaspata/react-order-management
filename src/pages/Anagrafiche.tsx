import React, { useEffect } from "react";
import { Grid, Paper } from "@material-ui/core";
import clsx from "clsx";
import StandardContainer from '../components/layout/StandardContainer';
import { useStyles } from '../hook/useStyles';
import { DynamicTable } from '../components/Table/DynamicTable';
import { actions, state } from '../store/anagrafiche';
import { useSnapshot } from 'valtio';


const Anagrafiche: React.FC = () => {
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

    return (
        <>
            <StandardContainer>
                <Grid item xs={12} md={6} lg={6}>
                    <Paper className={clsx(paper)}>
                        <DynamicTable items={snap.fornitori ? snap.fornitori.list : []} properties={snap.fornitori ? snap.fornitori.controls : []} title="Fornitori" recent={false} />
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                    <Paper className={clsx(paper)}>
                        <DynamicTable items={snap.clienti ? snap.clienti.list : []} properties={snap.clienti ? snap.clienti.controls : []} title="Clienti" recent={false} />
                    </Paper>
                </Grid>
            </StandardContainer>
            <StandardContainer>
                <Grid item xs={12} md={6} lg={6}>
                    <Paper className={clsx(paper)}>
                        <DynamicTable items={snap.tipoCollo ? snap.tipoCollo.list : []} properties={snap.tipoCollo ? snap.tipoCollo.controls : []} title="Tipo Collo" recent={false} />
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                    <Paper className={clsx(paper)}>
                        <DynamicTable items={snap.tipoCassa ? snap.tipoCassa.list : []} properties={snap.tipoCassa ? snap.tipoCassa.controls : []} title="Tipo Cassa" recent={false} />
                    </Paper>
                </Grid>
            </StandardContainer>
        </>
    );
};

export default Anagrafiche;
