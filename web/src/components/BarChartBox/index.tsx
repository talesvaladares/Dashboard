import React from 'react';

import {ResponsiveContainer, BarChart, Bar, Cell, Tooltip} from 'recharts';
import formatCurrency from '../../utils/formatCurrency';

import {
    Container,
    SideLeft,
    SideRight,
    LegendContainer,
    Legend

} from './styles';

interface IBarChartBoxProps {
    title: string;
    data : {
        name: string;
        amount: number;
        percent: number;
        color: string;
    }[];
}

const BarChartBox : React.FC<IBarChartBoxProps> = ({title , data}) => {
    return (
        <Container>
            <SideLeft>
                <h2>
                    {title}
                </h2>
                <LegendContainer>
            
                    {
                    
                        data.map((item, index)=> {
                            return (
                                <Legend  key={index} color={item.color}>
                                    <div>{!item.percent ? 0 : item.percent }%</div>
                                    <span>{item.name}</span>
                                </Legend>
                            )
                        })
                    
                    }
                </LegendContainer>
            </SideLeft>
           
            <SideRight>
                <ResponsiveContainer>
                    <BarChart
                        data={data}
                    >
                        <Bar dataKey="amount" name='Valor' >
                            {
                                data.map((item, index) => {
                                    return (
                                        <Cell
                                            key={index}
                                            fill={item.color}
                                        />

                                        
                                    )
                                })
                            }
                        </Bar>
                        <Tooltip
                            formatter={(value) => formatCurrency(Number(value))}
                            cursor={{fill: 'none'}}
                            
                        />
                    </BarChart>
                </ResponsiveContainer>

            </SideRight>
        </Container>
    );
};

export default BarChartBox;