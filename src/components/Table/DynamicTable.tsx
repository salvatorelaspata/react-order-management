import React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { TitlePanel } from '../Title/TitlePanel';
import { useStyles } from '../../hook/useStyles';
import moment from 'moment';
// import DynamicFormControl from '../Input/DynamicFormControl';

interface DynamicTableProp {
    title?: string;
    recent?: boolean;
    // convertire in generics
    properties?: readonly any[];
    items?: readonly any[];
    onClickRow?: (row: any) => any;
}

export const DynamicTable: React.FC<DynamicTableProp> = ({ title, recent, properties, items, onClickRow = (row) => console.log(row) }) => {
    const classes = useStyles();
    return (
        <>
            <TitlePanel>{`${title || 'Dynamic Table'}`}</TitlePanel>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        {properties && properties.map(({ id, label }) => (
                            <TableCell key={`table-head-id-${id}`}>{label}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {items && items.map((row: any) => (
                        <TableRow key={row.id} onClick={() => onClickRow(row)}>
                            {properties && properties.map(({ property }) => (
                                <TableCell key={`table-row-id-${row.id}-${property}`}>
                                    {`${moment.isMoment(row[property]) ? row[property].format('DD/MM/YYYY') : row[property]}`}
                                </TableCell>
                            ))}
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