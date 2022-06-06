import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";
// import ShowChartIcon from '@material-ui/icons/ShowChart';
import { ShowChart as ShowChartIcon, CalendarToday, InvertColorsRounded, ShoppingCart, CreateNewFolderSharp, People } from '@material-ui/icons';

import { Calendario } from '../pages/Calendario';
import ToDo from "../pages/ToDo";
import { Spedizioni } from '../pages/Spedizioni';
import { Fornitori } from '../pages/Fornitori';
import { Clienti } from '../pages/Clienti';
import { DettaglioSpedizione } from '../pages/DettaglioSpedizione';
import Anagrafiche from '../pages/Anagrafiche';
import { MenuItem } from '../types';

/**
 * 
 * @param darkState 
 * @param handleThemeChange 
 * @returns a list of routes
 */
export const ITEMS_MENU = (
    darkState: boolean,
    handleThemeChange: () => void
): MenuItem[] => [
        {
            id: "ccdeef55-2404-46a8-816f-8c911d55019f",
            icon: <DashboardIcon />,
            text: "Dashboard",
            path: "/",
            component: null,

        },
        {
            id: "a985ab79-3ec5-4e04-bb75-27011aa27fde",
            path: "/spedizioni",
            icon: <ShoppingCart />,
            text: "Spedizioni",
            component: <Spedizioni />,

        },
        {
            id: "cfd92dea-5d17-4de4-a85d-e0d3ed2490db",
            path: "/spedizione/:id",
            icon: <CreateNewFolderSharp />,
            text: "",
            component: <DettaglioSpedizione />,
            drawerVisible: false,
        },
        {
            id: "74859409-a070-4d65-96b7-72ea9a17891e",
            path: "/spedizione/new",
            icon: <CreateNewFolderSharp />,
            text: "",
            component: <DettaglioSpedizione />,
            drawerVisible: false,
        },
        {
            id: "75da3548-4495-4a9b-8562-396326010193",
            path: "/anagrafiche",
            icon: <People />,
            text: "Anagrafiche",
            component: <Anagrafiche />,
        },
        {
            id: "1b455e8c-f5e5-4cd0-bb77-c678addb3f25",
            path: "/customers",
            icon: <InvertColorsRounded />,
            text: "Fornitori",
            component: <Fornitori />,

        },
        {
            id: "2c7b380f-401e-45e8-8169-3aeff490166f",
            path: "/client",
            icon: <PeopleIcon />,
            text: "Clienti",
            component: <Clienti />,

        },
        {
            id: "aa67b81a-027b-416f-9330-36b79c633f98",
            path: "/calendar-order",
            icon: <CalendarToday />,
            text: "Calendario",
            component: <Calendario />,
            disabled: true
        },
        {
            id: "8aab5301-7a7b-41b3-a9e4-992088cb8e08",
            path: "/report",
            icon: <ShowChartIcon />,
            text: "Report",
            component: null,
            disabled: true
        },
        {
            id: "71b6fa83-694d-49f3-aea9-e7ea49185ab4",
            path: "/todo",
            icon: <PlaylistAddCheckIcon />,
            text: "ToDo",
            component: <ToDo />,
            disabled: true
        }
    ];

/**
 * PALETTE COLORS
 */
export const PRIMARY_DARK = "#7DB3FF";
export const PRIMARY_LIGTH = "#111827";
export const SECONDARY_DARK = "#FFFFFF";
export const SECONDARY_LIGHT = "#7DB3FF";
export const PAPER_DARK = "#1F2937";
export const PAPER_LIGHT = "#fff";
export const BG_DARK = "#111827";
export const BG_LIGHT = "#F3F6FD";
