import { Fab, Grid, Paper } from "@mui/material";
import clsx from "clsx";
import React, { useEffect } from "react";
import StandardContainer from "../components/layout/StandardContainer";
import AddIcon from "@mui/icons-material/Add";
import { useHistory } from 'react-router-dom';
import { useStyles } from '../hook/useStyles';
import { DynamicTable } from '../components/Table/DynamicTable';
import { actions, state } from '../store/spedizioni';
import { actions as actionsSpedizione } from '../store/spedizione';
import { useSnapshot } from 'valtio'
import { oInitialSpedizioniControls } from '../mock/spedizioni';
export const Spedizioni: React.FC = () => {
    const classes = useStyles();
    const history = useHistory();
    const snap = useSnapshot(state)
    useEffect(() => {
        document.title = "Spedizioni";
        actions.fetchSpedizioni();
    }, []);

    const navigateToCreate = () => {
        actionsSpedizione.setSpedizione(oInitialSpedizioniControls)
        history.push({
            pathname: '/spedizione/new',
            // search: '?id=' + row.id,
            state: null
        });
    }
    const navigateToUpdate = (row: any) => {
        actionsSpedizione.setSpedizione(row)
        history.push({
            pathname: '/spedizione/' + row.id,
            // search: '?id=' + row.id,
            state: null // Object.assign({}, row)
        });
    }

    return (
        <StandardContainer>
            <Grid item xs={12} md={12} lg={12}>
                <Paper className={clsx(classes.paper)}>
                    <DynamicTable title="Spedizioni" items={snap.list} properties={snap.controls} onClickRow={navigateToUpdate} />
                </Paper>
            </Grid>
            <Fab
                size="medium"
                color="secondary"
                aria-label="Add Project"
                className={classes.fabMargin}
            >
                <AddIcon onClick={navigateToCreate} />
            </Fab>
        </StandardContainer>
    );
};