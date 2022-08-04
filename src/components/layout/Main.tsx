import React from 'react'
import { useStyles } from '../../hook/useStyles';

const Main: React.FC = ({ children }) => {
    const classes = useStyles();
    return (
        <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <div>{children}</div>
        </main>
    )
}

export default Main