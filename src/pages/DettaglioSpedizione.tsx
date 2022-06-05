import React, { useState } from 'react';
import { Button, Grid, Paper } from '@material-ui/core';
import DynamicFormControl from '../components/Input/DynamicFormControl';
import StandardContainer from '../components/layout/StandardContainer';
import { TitlePanel } from '../components/Title/TitlePanel';
import { useStyles } from '../hook/useStyles';
import clsx from "clsx";
import Footer from '../components/layout/Footer';
import { green, red } from '@material-ui/core/colors';
import { useHistory, useLocation } from 'react-router-dom';
import { Cancel, Save } from '@material-ui/icons';
import { actions, state } from '../store/spedizione';
import { state as stateSpedizioni } from '../store/spedizioni';
import { useSnapshot } from 'valtio'
const greenColor = green[800];
const redColor = red[800];

export const DettaglioSpedizione: React.FC = () => {
    const snap = useSnapshot(state)
    const snapSpedizioni = useSnapshot(stateSpedizioni)
    const [isDisable] = useState(false);
    const location = useLocation();
    // useEffect(() => {
    //     console.log(location.pathname);
    // }, [location]);

    const history = useHistory();
    const classes = useStyles();
    const paperStyle = clsx(classes.paper, classes.fixedFormHeight);

    const onAnnulla = () => {
        // sei sicuro?
        history.push({
            pathname: '/spedizioni'
        });
    }

    const onSalva = () => {
        // salvataggio DB
        history.push({
            pathname: '/spedizioni'
        });
    }

    return (
        <>
            <StandardContainer>
                <Grid item xs={12} md={12} lg={12}>
                    <Paper className={paperStyle}>
                        <TitlePanel>{location.pathname.indexOf('new') !== -1 ? 'Creazione' : 'Aggiornamento'}</TitlePanel>
                        <Grid container justify='space-around'>
                            <Grid item xs={12} md={6} lg={6} style={{ padding: '1rem' }}>
                                {snapSpedizioni.controls.slice(0, 10).map((control: any) => (<DynamicFormControl key={control.id} {...control} isDisable={isDisable} handleChange={actions.handleChange} handleChangeDate={actions.handleChangeDate} value={snap.current[control.property]} />))}
                            </Grid>
                            <Grid item xs={12} md={6} lg={6} style={{ padding: '1rem' }}>
                                {snapSpedizioni.controls.slice(10, 20).map((control: any) => (<DynamicFormControl key={control.id} {...control} isDisable={isDisable} handleChange={actions.handleChange} handleChangeDate={actions.handleChangeDate} value={snap.current[control.property]} />))}
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Footer >
                    <Button variant='outlined' color='secondary' onClick={onAnnulla} style={{ marginRight: '0.5rem', marginLeft: '0.5rem', borderWidth: '2px', fontWeight: 'bolder', borderColor: redColor, color: redColor }}>
                        <Cancel />
                        Annulla
                    </Button>
                    <Button variant='outlined' color='secondary' onClick={onSalva} style={{ marginRight: '0.5rem', marginLeft: '0.5rem', borderWidth: '2px', fontWeight: 'bolder', borderColor: greenColor, color: greenColor }}>
                        <Save />
                        Salva
                    </Button>
                </Footer>
            </StandardContainer>
        </>
    );
};