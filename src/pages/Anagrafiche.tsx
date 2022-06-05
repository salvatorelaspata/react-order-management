import React from "react";
import { Grid, Paper } from "@material-ui/core";
import clsx from "clsx";
import StandardContainer from '../components/layout/StandardContainer';
import { useStyles } from '../hook/useStyles';
import { DynamicTable } from '../components/Table/DynamicTable';


const Anagrafiche: React.FC = () => {
    const { paper } = useStyles();
    return (
        <>
            <StandardContainer>
                <Grid item xs={12} md={6} lg={6}>
                    <Paper className={clsx(paper)}>
                        <DynamicTable items={[]} properties={[]} title="Fornitori" recent={true} />
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                    <Paper className={clsx(paper)}>
                        <DynamicTable items={[]} properties={[]} title="Clienti" recent={true} />
                    </Paper>
                </Grid>
            </StandardContainer>
            <StandardContainer>
                <Grid item xs={12} md={6} lg={6}>
                    <Paper className={clsx(paper)}>
                        <DynamicTable items={[]} properties={[]} title="Tipo Collo" recent={true} />
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                    <Paper className={clsx(paper)}>
                        <DynamicTable items={[]} properties={[]} title="Tipo Cassa" recent={true} />
                    </Paper>
                </Grid>
            </StandardContainer>
        </>
    );
};

export default Anagrafiche;
