import React, { ComponentType, useMemo, useState } from "react";
import moment from "moment";

import {
    Calendar,
    CalendarProps,
    NavigateAction,
    View,
} from "react-big-calendar";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import AddEventDialog from "../components/Dialog/AddEventDialog";

import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { EventProp } from '../hook/types';
import { useBigCalendar } from '../hook/useBigCalendar';
const initialEvent = {
    start: "",
    end: "",
    title: "",
    ore: "",
    slots: []
};

const CalendarWithDnD = withDragAndDrop<any, object>(
    Calendar as ComponentType<CalendarProps<any, object>>
);

export const Calendario: React.FC = () => {
    const [defaultDate, setDefaultDate] = useState<Date>(moment().toDate());
    const [view, setView] = useState<View>("month");
    const [currentEvent, setCurrentEvent] = useState<EventProp>(initialEvent);
    //const [action, setAction] = useState<NavigateAction>("TODAY");

    const onCalendarNavigate = (
        newDate: Date,
        view: View,
        action: NavigateAction
    ) => {
        setDefaultDate(newDate);
        setView(view);
        //setAction(action);
    };

    const {
        localizer,
        events,
        open,
        setOpen,
        onEventDrop,
        onSelectSlot,
        saveEvent,
        editEvent,
        onEditEvent,
        onDeleteEvent,
        isNew,
        resizeEvent
    } = useBigCalendar();

    const DnDCalendar = useMemo(() => CalendarWithDnD, []);

    return (
        <>
            {open && (
                <AddEventDialog
                    open={open}
                    setOpen={setOpen}
                    isNew={isNew}
                    saveEvent={saveEvent}
                    editEvent={editEvent}
                    currentEvent={currentEvent}
                    setCurrentEvent={setCurrentEvent}
                    onDeleteEvent={onDeleteEvent}
                />
            )}
            <DnDCalendar
                defaultDate={defaultDate}
                onNavigate={onCalendarNavigate}
                onEventDrop={onEventDrop}
                onEventResize={resizeEvent}
                localizer={localizer}
                events={events}
                selectable={true}
                view={view}
                onView={setView}
                onSelectEvent={(event) => onEditEvent(event, setCurrentEvent)}
                onSelectSlot={(slotInfo) => onSelectSlot(slotInfo, setCurrentEvent)}
                startAccessor="start"
                endAccessor="end"
                style={{ height: "90vh", padding: 10 }}
            />
        </>
    );
};