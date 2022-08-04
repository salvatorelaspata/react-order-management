import React from "react";
import { FormControl, InputLabel, Select, useTheme, MenuItem } from "@mui/material";

import clsx from "clsx";
import { useStyles } from "../../hook/useStyles";
interface Option {
    key: string;
    value: string;
}
interface SelectOtlinedProp {
    id: string;
    label: string;
    value: string;
    name: string;
    handleChange: (e: any) => void;
    options: Option[];
    visible?: boolean;
    fullWidth?: boolean;
    disabled: boolean;
}

const SelectOutlined: React.FC<SelectOtlinedProp> = ({
    id,
    label,
    value,
    name,
    handleChange,
    options,
    visible = true,
    fullWidth = true,
    disabled,
}) => {
    const theme = useTheme();
    const classes = useStyles(theme);
    return (
        <FormControl
            fullWidth={fullWidth}
            variant="outlined"
            className={clsx(!visible && classes.none, classes.formControl)}
        >
            <InputLabel htmlFor={id}>{label}</InputLabel>
            <Select
                id={id}
                disabled={disabled}
                value={value || ''}
                onChange={handleChange}
                label={label}
                name={name}
            >
                <MenuItem aria-label="None" value="" />
                {options &&
                    options.map((o) => {
                        return (
                            <MenuItem
                                aria-label={o.value}
                                value={o.key}
                                key={o.key}
                            >
                                {o.value}
                            </MenuItem>
                        );
                    })}
            </Select>
        </FormControl>
    );
};

export default SelectOutlined;
