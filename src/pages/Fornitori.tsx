import { Fab, Grid, Paper } from "@mui/material";
import clsx from "clsx";
import React from "react";
import StandardContainer from "../components/layout/StandardContainer";
import AddIcon from "@mui/icons-material/Add";
import { useStyles } from '../hook/useStyles';
import { DynamicDataGrid } from '../components/Table/DynamicDataGrid';

export const Fornitori: React.FC = () => {
    const classes = useStyles();
    return (
        <StandardContainer>
            <Grid item xs={12} md={12} lg={12}>
                <Paper className={clsx(classes.paper)}>
                    <DynamicDataGrid />
                </Paper>
            </Grid>
            <Fab
                size="medium"
                color="secondary"
                aria-label="Add Project"
                className={classes.fabMargin}
            >
                <AddIcon />
            </Fab>
        </StandardContainer>
    );
};