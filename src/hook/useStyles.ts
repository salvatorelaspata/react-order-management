import { makeStyles } from "@material-ui/core";

const drawerWidth = 240;

export const useStyles = makeStyles(
    (theme) => ({
        root: {
            display: "flex",
        },
        toolbar: {
            paddingRight: 24, // keep right padding when drawer closed
        },
        toolbarIcon: {
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            padding: "0 8px",
            ...theme.mixins.toolbar,
        },
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
            transition: theme.transitions.create(["width", "margin"], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        appBarShift: {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(["width", "margin"], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        menuButton: {
            marginRight: 36,
        },
        menuButtonHidden: {
            display: "none",
        },
        title: {
            flexGrow: 1,
        },
        depositContext: {
            flex: 1,
        },
        seeMore: {
            marginTop: theme.spacing(3),
        },
        drawerPaper: {
            position: "relative",
            whiteSpace: "nowrap",
            width: drawerWidth,
            transition: theme.transitions.create("width", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        drawerPaperClose: {
            overflowX: "hidden",
            transition: theme.transitions.create("width", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            width: theme.spacing(7),
            [theme.breakpoints.up("sm")]: {
                width: theme.spacing(9),
            },
        },
        appBarSpacer: theme.mixins.toolbar,
        content: {
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
        },
        container: {
            paddingTop: theme.spacing(4),
            paddingBottom: theme.spacing(4),
        },
        paper: {
            padding: theme.spacing(2),
            display: "flex",
            overflow: "auto",
            flexDirection: "column",
        },
        fixedHeight: {
            height: 240,
        },
        fixedFormHeight: {
            height: '100%',
            marginBottom: '1rem'
        },
        none: {
            display: "none",
        },
        fabMargin: {
            position: "absolute",
            bottom: theme.spacing(5),
            right: theme.spacing(5),
        },
        formControl: {
            width: "100%",
            marginBottom: theme.spacing(1),
            marginTop: theme.spacing(1),
        },
        footer: {
            position: "fixed",
            padding: '0.5rem',
            bottom: 0,
            right: 0,
            marginBottom: '0.5rem',
            marginRight: '2.5rem',
            marginLeft: '2.5rem',
            border: '1px solid #7db3ff',
        },
    }),
    { index: 1 }
);
