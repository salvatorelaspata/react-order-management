import { Paper } from '@material-ui/core';
import clsx from 'clsx'
import { useStyles } from '../../hook/useStyles';

const Footer: React.FC = ({ children }) => {
    const classes = useStyles();
    return (
        <Paper className={clsx(classes.footer)}>
            {children}
        </Paper>
    )
}

export default Footer