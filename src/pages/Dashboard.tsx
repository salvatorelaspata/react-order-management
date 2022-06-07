import React, { useEffect } from "react";
import { Grid, Paper } from "@material-ui/core";
import clsx from "clsx";
import { DashboardChart } from '../components/ReCharts/DashboardChart';
import { Deposits } from '../components/Deposits/Deposits';
import StandardContainer from '../components/layout/StandardContainer';
import { useStyles } from '../hook/useStyles';
import { DynamicTable } from '../components/Table/DynamicTable';

import { useSnapshot } from 'valtio'
import { actions, state } from '../store/spedizioni';
import { ImageButton } from '../components/Input/ImageButton';
interface DashboardProps {
    darkState: boolean;
    handleThemeChange: () => void;
}

function compareDataPartenza(a: any, b: any) {
    if (a.Data_Partenza > b.Data_Partenza) {
        return -1;
    }
    if (a.Data_Partenza < b.Data_Partenza) {
        return 1;
    }
    return 0;
}

const Dashboard: React.FC<DashboardProps> = ({
    darkState,
    handleThemeChange,
}) => {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    const snap = useSnapshot(state)
    useEffect(() => {
        document.title = "Dashboard";
        actions.fetchSpedizioni();
    }, [])
    useEffect(() => {
    }, []);
    return (
        <>
            <StandardContainer>
                <Grid item xs={12}>
                    <ImageButton />
                </Grid>
                <Grid item xs={12} md={8} lg={9}>
                    <Paper className={fixedHeightPaper}>
                        <DashboardChart />
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4} lg={3}>
                    <Paper className={fixedHeightPaper}>
                        <Deposits />
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        {/* <SpedizioniTable items={[]} recent={true} title="Spedizioni Recenti" /> */}
                        <DynamicTable title="Ultime Spedizioni" items={Array.from(snap.list).sort(compareDataPartenza).splice(0, 5)} properties={snap.controls} recent={true} />
                    </Paper>
                </Grid>
            </StandardContainer>
        </>
    );
};

export default Dashboard;
