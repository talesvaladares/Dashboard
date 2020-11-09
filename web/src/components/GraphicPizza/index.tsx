import React from 'react';
import {
    Pie,
    PieChart,
    Cell,
    ResponsiveContainer
} from 'recharts';

import {
    Container,
    SideLeft,
    LegendContainer,
    Legend,
    SideRight

} from './styles';

interface IGraficProps {
    
    data : 
        {
            name: string;
            percent: number;
            color: string;
        }[];
    
}

const GraphicPizza : React.FC<IGraficProps> = ({data}) => (
    
    <Container>
        <SideLeft>
            <LegendContainer>
                <h2>Relação</h2>
            
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
                <PieChart>
                    <Pie
                        data={data}
                        dataKey="percent"
                    
                    >
                        {
                            data.map((item, index)=> {
                                return (
                                    <Cell
                                        key={index}
                                        fill={item.color}
                                    />
                                )
                            })
                        }

                    </Pie>
                </PieChart>

            </ResponsiveContainer>
        </SideRight>

    </Container>
);

export default GraphicPizza;