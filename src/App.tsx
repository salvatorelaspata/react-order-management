import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import Bar from "./components/layout/Bar";
import DrawerMenu from "./components/layout/DrawerMenu";
import { ITEMS_MENU } from "./config/constants";
import Dashboard from './pages/Dashboard';
import { useDarkMode } from './hook/useDarkMode';
import { useDrawer } from './hook/useDrawer';
import Main from './components/layout/Main';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

const App = () => {
    const { darkState, darkTheme, handleThemeChange } = useDarkMode(true);
    const {
        open: isOpenDrawer,
        handleDrawerOpen,
        handleDrawerClose,
    } = useDrawer(true);

    return (
        <LocalizationProvider dateAdapter={AdapterMoment}>
            <div className='root'>
                <ThemeProvider theme={darkTheme}>
                    <CssBaseline />
                    <Bar
                        open={isOpenDrawer}
                        handleDrawerOpen={handleDrawerOpen}
                        darkState={darkState}
                        handleThemeChange={handleThemeChange}
                    />
                    <Router>
                        <DrawerMenu
                            open={isOpenDrawer}
                            handleDrawerClose={handleDrawerClose}
                        />
                        {/* <main className={classes.content}>
                        <div className={classes.appBarSpacer} /> */}
                        <Main>
                            {/* ROUTING */}
                            <Switch>
                                {ITEMS_MENU(darkState, handleThemeChange).map(
                                    (route) => (
                                        <Route
                                            key={route.id}
                                            exact
                                            path={route.path}
                                        >
                                            {route.component || <Dashboard darkState={darkState} handleThemeChange={handleThemeChange} />}
                                        </Route>
                                    )
                                )}
                            </Switch>
                        </Main>
                        {/* </main> */}
                    </Router>
                </ThemeProvider>
            </div>
        </LocalizationProvider>
    );
};

export default App;
