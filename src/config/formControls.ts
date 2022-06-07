import moment from 'moment';

// Generate a random alfanumeric string
export const _makeCharacters = (length: number) => {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
// Generate a random data set
export const _mockData = (type: string) => {
    if (type === 'text')
        return _makeCharacters(10)
    else if (type === 'number')
        return parseFloat((Math.random() * 1000).toFixed(2))
    else if (type === 'date')
        return moment().subtract(Math.random() * 10, 'days')
    else if (type === 'select')
        return `opt${(Math.random() * 2).toFixed(0)}`
}
// Generate a mock data object from a controls object
export const _mockFormControls = (aControls: any) =>
    aControls.reduce((o: any, obj: any) => Object.assign(o, { [obj.property]: _mockData(obj.type) }), {});
