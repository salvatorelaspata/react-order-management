import { useTheme } from '@mui/material/styles';
import moment from 'moment';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer, CartesianGrid, Tooltip } from 'recharts';
import { TitlePanel } from '../Title/TitlePanel';

interface DataChart {
    day: string,
    amount: number | undefined
}

// Generate Sales Data
const createData = (day: string, amount: number | undefined) => {
    return Object.assign({}, { day, amount });
}

let data: DataChart[] = [];

let monday = moment()
    .startOf('month')
    .day("Monday");
if (monday.date() > 7) monday.add(7, 'd');
const month = monday.month();
while (month === monday.month()) {
    const strMonday = moment(monday).format('DD/MM/YYYY');
    data.push(createData(strMonday, Math.random() * 3000));
    monday.add(7, 'd');
}

// const data = [
//     createData('00:00', 0),
//     createData('03:00', 300),
//     createData('06:00', 600),
//     createData('09:00', 800),
//     createData('12:00', 1500),
//     createData('15:00', 2000),
//     createData('18:00', 2400),
//     createData('21:00', 2400),
//     createData('24:00', undefined),
// ];

export const DashboardChart = () => {
    const theme = useTheme();

    return (
        <>
            <TitlePanel>Andamento mensile</TitlePanel>
            <ResponsiveContainer>
                <LineChart
                    data={data}
                    margin={{
                        top: 16,
                        right: 16,
                        bottom: 0,
                        left: 24,
                    }}
                >
                    <XAxis dataKey="day" stroke={theme.palette.text.secondary} />
                    <CartesianGrid stroke="lightgray" strokeDasharray="5 5" />
                    <Tooltip contentStyle={{ color: `${theme.palette.text.secondary}` }} />
                    <YAxis stroke={theme.palette.text.secondary}>
                        <Label
                            angle={270}
                            position="left"
                            style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
                        >
                            Vendite ($)
                        </Label>
                    </YAxis>
                    <Line type="monotone" dataKey="amount" stroke={theme.palette.primary.main} />
                </LineChart>
            </ResponsiveContainer>
        </>
    );
}