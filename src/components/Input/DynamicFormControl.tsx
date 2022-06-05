import DateInput from './DateInput';
import InputOutlined from './InputOutlined';
import SelectOutlined from './SelectOutlined';

export const DynamicFormControl = (rest: any) => {
    const { id, label, property, type, value, options, handleChange, handleChangeDate, isDisable, fullWidth } = rest
    let element;
    if (type === 'date')
        element = <DateInput
            key={id}
            id={id}
            label={label}
            name={property}
            value={value}
            handleChange={handleChangeDate}
            disabled={isDisable}
            fullWidth={fullWidth}
        />
    else if (type === 'select')
        element = <SelectOutlined
            key={id}
            id={id}
            value={value}
            label={label}
            name={property}
            handleChange={handleChange}
            options={options}
            fullWidth={fullWidth}
            disabled={isDisable}
        />
    else if (type === 'text' || type === 'number')
        element = <InputOutlined
            key={id}
            handleChange={handleChange}
            label={label}
            name={property}
            type={type}
            value={value}
            fullWidth={fullWidth}
            disabled={isDisable}
        />
    else
        element = <p>{`${JSON.parse(rest)}`}</p>

    return element
}
export default DynamicFormControl