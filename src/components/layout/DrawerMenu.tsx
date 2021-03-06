import clsx from "clsx";
import { Divider, Drawer, IconButton, List, useTheme } from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { useStyles } from "../../hook/useStyles";
import { ITEMS_MENU } from "../../config/constants";
import DrawerMenuListItem from "./DrawerMenuListItem";

interface DrawerMenuProp {
    open: boolean;
    handleDrawerClose: () => void;
}

const DrawerMenu: React.FC<DrawerMenuProp> = ({ open, handleDrawerClose }) => {
    const theme = useTheme();
    const classes = useStyles(theme);
    return (
        <>
            <Drawer
                variant="permanent"
                classes={{
                    paper: clsx(
                        classes.drawerPaper,
                        !open && classes.drawerPaperClose
                    ),
                }}
                open={open}
            >
                <div className={classes.toolbarIcon}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />

                <List>
                    {ITEMS_MENU(false, () => { }).map((item) => {
                        return (
                            <DrawerMenuListItem
                                to={item.path}
                                primary={item.text}
                                icon={item.icon}
                                key={item.id}
                                disabled={item.disabled}
                                drawerVisible={item.drawerVisible}
                            />
                        );
                    })}
                </List>
                <Divider />
            </Drawer>
        </>
    );
};

export default DrawerMenu;
