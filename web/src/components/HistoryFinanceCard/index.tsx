import React from 'react';

import {
    Container,
    Tag
} from './styles';

interface IHistoryFinanceCardProps {
    tagColor: string;
    title: string;
    date: string;
    amount: string;
}

const HistoryFinanceCard : React.FC<IHistoryFinanceCardProps> = ({ tagColor, title, date, amount}) => {
    return (
        <Container>
            <Tag tagColor={tagColor}/>
            <div>
                <span>{title}</span>
                <small>{date}</small>
            </div>
            <h3>{amount}</h3>
        </Container>
    );
};

export default HistoryFinanceCard;