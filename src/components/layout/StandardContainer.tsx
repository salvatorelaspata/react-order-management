import { Container, Grid } from "@mui/material";
import React from "react";
import { useStyles } from "../../hook/useStyles";
const StandardContainer: React.FC = ({ children }) => {
    const classes = useStyles();

    return (
        <div>
            <Container maxWidth="lg" className={classes.container}>
                <Grid container spacing={3}>
                    {children}
                </Grid>
            </Container>
        </div>
    );
};

export default StandardContainer;
