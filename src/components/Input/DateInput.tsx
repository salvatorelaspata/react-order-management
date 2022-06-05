import React from "react";
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
interface InputOtlinedProp {
    id: string;
    label: string;
    value: string | Date;
    type?: 'date-inline' | 'date-dialog' | 'time'; // da implementare
    name: string;
    handleChange: (e: any, name: string) => void;
    fullWidth?: boolean;
    disabled: boolean;
}

const DateInput: React.FC<InputOtlinedProp> = ({
    id,
    label,
    value,
    name,
    handleChange,
    disabled,
    fullWidth = true
}) => {
    const onChangeDatePicker = (e: any) => {
        debugger;
        handleChange(e, name);
    };
    return (
        <MuiPickersUtilsProvider utils={MomentUtils}>
            <KeyboardDatePicker
                disableToolbar
                autoOk={true}
                variant="inline"
                format="DD/MM/YYYY"
                margin="normal"
                id={id}
                fullWidth={fullWidth}
                name={name}
                label={label}
                value={value}
                onChange={onChangeDatePicker}
                disabled={disabled}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
            />
        </MuiPickersUtilsProvider>
    );
};

export default DateInput;
