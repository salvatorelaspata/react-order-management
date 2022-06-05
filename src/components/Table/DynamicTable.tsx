import React from 'react';
import Link from '@material-ui/core/Link';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
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