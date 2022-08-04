import { Paper } from '@mui/material';
import clsx from 'clsx'
import { useStyles } from '../../hook/useStyles';

const Footer: React.FC<any> = ({ children }) => {
    const classes = useStyles();
    return (
        <Paper className={clsx(classes.footer)}>
            {children}
        </Paper>
    )
}

export default Footer