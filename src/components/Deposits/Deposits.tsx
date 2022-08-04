import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import moment from 'moment';
import { useStyles } from '../../hook/useStyles';
import { TitlePanel } from '../Title/TitlePanel';

export const Deposits: React.FC = () => {
    const classes = useStyles();
    return (
        <>
            <TitlePanel>Rendiconto Mensile</TitlePanel>
            <Typography component="p" variant="h4">
                $3,024.00
            </Typography>
            <Typography color="textSecondary" className={classes.depositContext}>
                al {moment().format('gg/MM/YYYY')}
            </Typography>
            <div>
                <Link color="primary" href="#" onClick={() => null}>
                    Report (PDF) - Coming Soon
                </Link>
            </div>
        </>
    );
}