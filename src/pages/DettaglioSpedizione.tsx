import { Button, Grid, Paper } from '@material-ui/core';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import DynamicFormControl from '../components/Input/DynamicFormControl';
import StandardContainer from '../components/layout/StandardContainer';
import { TitlePanel } from '../components/Title/TitlePanel';
import { aFormControls, aMockTableControls, oInitialFormControls } from '../config/aFormControls';
import { useStyles } from '../hook/useStyles';
import clsx from "clsx";
import Footer from '../components/layout/Footer';

import { green, red } from '@material-ui/core/colors';
import { useHistory } from 'react-router-dom';
import { Cancel, Save } from '@material-ui/icons';
import { actions, state } from '../store/spedizione';
import { useSnapshot } from 'valtio'
const greenColor = green[800];
const redColor = red[800];

export const DettaglioSpedizione: React.FC = () => {
    // const [state, setState] = useState<any>(oInitialFormControls);
    const snap = useSnapshot(state)
    const [isDisable] = useState(false);
    const location = useLocation();
    useEffect(() => {
        console.log('DettaglioSpedizioni: useEffect');
        // if (location.pathname.indexOf('new') !== -1) {
        //     const paths = location.pathname.split('/');
        //     console.log(paths)
        //     const id = paths[location.pathname.split('/').length - 1];
        //     setState(aMockTableControls && aMockTableControls.find(x => x.id === id));
        // }
        console.log(location.pathname);
        // console.log(location.search);
        // console.log(location.state);
    }, [location]);

    const history = useHistory();
    const classes = useStyles();

    // const handleChange = (e: any) => {
    //     const { name, value } = e.target
    //     setState({ ...state, [name]: value || '' });
    // };

    // const handleChangeDate = (e: any, name: string) => {
    //     setState({ ...state, [name]: e || moment().format('DD/MM/YYYY') });
    // };

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
                        {/* 
                    <Grid container justify='center'>
                        <Grid item xs={12} md={8} lg={8} style={{ padding: '1rem' }}>
                            {aFormControls.map((control) => (<DynamicFormControl key={control.id} {...control} isDisable={isDisable} handleChange={handleChange} handleChangeDate={handleChangeDate} value={state[control.property]} />))}
                        </Grid>
                    </Grid>
                     */}
                        <Grid container justify='space-around'>
                            <Grid item xs={12} md={6} lg={6} style={{ padding: '1rem' }}>
                                {aFormControls.slice(0, 10).map((control) => (<DynamicFormControl key={control.id} {...control} isDisable={isDisable} handleChange={actions.handleChange} handleChangeDate={actions.handleChangeDate} value={snap.current[control.property]} />))}
                            </Grid>
                            <Grid item xs={12} md={6} lg={6} style={{ padding: '1rem' }}>
                                {aFormControls.slice(10, 20).map((control) => (<DynamicFormControl key={control.id} {...control} isDisable={isDisable} handleChange={actions.handleChange} handleChangeDate={actions.handleChangeDate} value={snap.current[control.property]} />))}
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