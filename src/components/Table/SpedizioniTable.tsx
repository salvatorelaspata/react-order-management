import React from 'react';
import Link from '@material-ui/core/Link';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { TitlePanel } from '../Title/TitlePanel';
import { useHistory } from 'react-router-dom';
import { useStyles } from '../../hook/useStyles';
import moment from 'moment';
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
                            <TableCell key={`table-head-id-${id}`}>{label}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {aSpedizioni && aSpedizioni.map((row: any) => (
                        <TableRow key={row.id} onClick={() => onNavigateToDetail(row)}>
                            {aSpedizioniControls.map(({ id, property }) => (
                                <TableCell key={`table-row-id-${row.id}-${property}`}>
                                    {`${moment.isMoment(row[property]) ? row[property].format('DD/MM/YYYY') : row[property]}`}
                                </TableCell>
                            ))}
                            {/* {aFormControls.map(({ id, property }) => (
                                <TableCell key={`table-row-id-${id}`}>
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