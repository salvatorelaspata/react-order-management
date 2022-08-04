import { createTheme } from '@mui/material';
import { BG_DARK, BG_LIGHT, PAPER_DARK, PAPER_LIGHT, PRIMARY_DARK, PRIMARY_LIGTH, SECONDARY_DARK, SECONDARY_LIGHT } from '../config/constants';

export const theme = (darkState: boolean) => createTheme({
    palette: {
        mode: darkState ? "dark" : "light",
        primary: {
            main: darkState ? PRIMARY_DARK : PRIMARY_LIGTH,
        },
        secondary: {
            main: darkState ? SECONDARY_DARK : SECONDARY_LIGHT,
        },
        background: {
            paper: darkState ? PAPER_DARK : PAPER_LIGHT,
            default: darkState ? BG_DARK : BG_LIGHT,
        }
    },
});