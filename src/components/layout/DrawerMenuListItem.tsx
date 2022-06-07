import React from "react";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import {
    Link as RouterLink,
    LinkProps as RouterLinkProps,
    useLocation,
} from "react-router-dom";
import { Omit } from "@material-ui/types";
import clsx from 'clsx';

interface DrawerMenuListItemProps {
    icon?: React.ReactElement;
    primary: string;
    to: string;
    disabled?: boolean;
    drawerVisible?: boolean;
}

function DrawerMenuListItem(props: DrawerMenuListItemProps) {
    const location = useLocation();
    const { icon, primary, to, disabled, drawerVisible } = props;

    const renderLink = React.useMemo(
        () =>
            React.forwardRef<any, Omit<RouterLinkProps, "to">>(
                (itemProps, ref) => <RouterLink to={to} ref={ref} {...itemProps} />
            ),
        [to]
    );

    return (
        <li>
            <ListItem
                button
                component={renderLink}
                selected={to === location.pathname}
                disabled={disabled}
                className={clsx(drawerVisible === false && 'none')}
            >
                {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
                <ListItemText primary={primary} />
            </ListItem>
        </li>
    );
}
export default DrawerMenuListItem;
