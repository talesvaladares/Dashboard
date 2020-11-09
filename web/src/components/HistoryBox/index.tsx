import React from 'react';
import { 
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip
} from 'recharts';

import formatCurrency from '../../utils/formatCurrency';

import {
    Container,
    Content,
    Header,
    LegendContainer,
    Legend
} from './styles';

interface IHistoryBoxProps {
    data: {
        month: string;
        amountEntry: number;
        amountOutput: number;

    }[];
    lineColorAmountEntry: string;
    lineColorAmountOut: string;

}

const HistoryBox : React.FC<IHistoryBoxProps> = ({data, lineColorAmountEntry , lineColorAmountOut}) => {
    return (
        <Container>
            <Content>
                <Header>
                    <h2>Histórico de saldo</h2>
                    <LegendContainer>
                        <Legend color={lineColorAmountEntry}>
                            <div></div>
                            <span>Entradas</span>
                        </Legend>
                        <Legend color={lineColorAmountOut}>
                            <div></div>
                            <span>Saídas</span>
                        </Legend>
                    </LegendContainer>
                </Header>
                <ResponsiveContainer>
                    <LineChart data={data} margin={{top: 5 , right: 20, left: 20 , bottom: 5}}>
                        <CartesianGrid 
                            strokeDasharray='3 3'
                            stroke='#cecece'
                        
                        />
                        <XAxis
                            dataKey='month'
                            stroke='#cecece'
                        />
                        <Tooltip
                            formatter={(value) => formatCurrency(Number(value))}
                        />

                        <Line
                            type='monotone'
                            dataKey='amountEntry'
                            name='Saídas'
                            stroke={lineColorAmountEntry}
                            strokeWidth={5}
                            dot={{r: 5}}
                            activeDot={{r: 5}}
                        />

                        <Line
                            type='monotone'
                            dataKey='amountOutput'
                            name='Saídas'
                            stroke={lineColorAmountOut}
                            strokeWidth={5}
                            dot={{r: 5}}
                            activeDot={{r: 5}}
                        />                  


                    </LineChart>
                </ResponsiveContainer>
            </Content>
        </Container>
    )
};

export default HistoryBox;