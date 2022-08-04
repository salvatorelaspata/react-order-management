import React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';

import { TitlePanel } from '../Title/TitlePanel';
import { useHistory } from 'react-router-dom';
import { useStyles } from '../../hook/useStyles';
import { aSpedizioni, aSpedizioniControls } from '../../mock/spedizioni';
// import DynamicFormControl from '../Input/DynamicFormControl';

interface SpedizioniTableProp {
    title?: string;
    recent?: boolean;
    items?: any[];
}

export const SpedizioniTable: React.FC<SpedizioniTableProp> = ({ title, recent, items }) => {
    const classes = useStyles();
    const history = useHistory();
    const onNavigateToDetail = (row: any) => {
        history.push({
            pathname: '/spedizione/' + row.id,
            // search: '?id=' + row.id,
            state: row
        });
    }
    return (
        <>
            <TitlePanel>{`${title || 'Spedizioni'}`}</TitlePanel>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        {aSpedizioniControls.map(({ id, label }) => (
                            <TableCell key={uuidv4()}>{label}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {aSpedizioni && aSpedizioni.map((row: any) => (
                        <TableRow key={row.id} onClick={() => onNavigateToDetail(row)}>
                            {aSpedizioniControls.map(({ id, property }) => (
                                <TableCell key={uuidv4()}>
                                    {`${moment.isMoment(row[property]) ? row[property].format('DD/MM/YYYY') : row[property]}`}
                                </TableCell>
                            ))}
                            {/* {aFormControls.map(({ id, property }) => (
                                <TableCell key={`table - row - id - ${ id }`}>
                                    <DynamicFormControl key={row.id} {...row} isDisable={false} handleChange={() => null} handleChangeDate={() => null} value={row[property]} />
                                </TableCell>
                            ))} */}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            {recent && <div className={classes.seeMore}>
                <Link color="primary" href="#" onClick={() => null}>
                    See more orders
                </Link>
            </div>}
        </>
    );
}