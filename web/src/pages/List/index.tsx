import React, { useCallback, useEffect, useMemo, useState } from 'react';

import ContentHeader from '../../components/ContentHeader';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';
import SelectInput from '../../components/SelectInput';
import formatCurrency from '../../utils/formatCurrency';
import formatDate from '../../utils/formatDate';
import {months} from '../../repositories/months';

import {
    Container,
    Content,
    Filters,
    ButtonFilters
} from './styles';


import {gains} from '../../repositories/gains';
import {expenses} from '../../repositories/expenses';

interface IRouteParamsProps {
    match: {
        params : {
            type: string;
        }
    }
}
interface ITransactions {
    description: string;
    amount: string;
    frequency: string;
    type: string;
    date: string;
    
}

interface IYear{
    value: number ;
    label: number ;
}

interface IMonthSelected {
    value: number;
    label: string;
}

const List : React.FC<IRouteParamsProps> = ({match}) => {

    const [transactions, setTransactions] = useState<ITransactions[]>([]);
    const [renderTransactions, setRenderTransactions] = useState<ITransactions[]>([]);
    const [yearSelected, setYearSelected] = useState<IYear>();
    const [monthSelected, setMonthSelected] = useState<IMonthSelected>()

    const {type} = match.params;

    const pageProps = useMemo(()=> {
       
        return type === 'entry-balance' ? {title: 'Entrada', move: 'entry-balance', lineColor: '#F7931b'} : {title: 'Saída' , lineColor: '#E44C4E'};
    },[type]);


    useEffect(()=> {
        if(pageProps.move === 'entry-balance'){
            const transactionsFormatted  = gains.map(item => {
                return {
                    ...item,
                    amount: formatCurrency(Number(item.amount)),
                    date: formatDate(item.date)
                }
            });

            setTransactions(transactionsFormatted);
            setRenderTransactions(transactionsFormatted);
          
            const yearCurrent = {
                value: Number(new Date().getFullYear()),
                label: Number(new Date().getFullYear())
            };

            setYearSelected(yearCurrent);

            const index = Number(new Date().getMonth());
           
            const  monthCurrent = {
                value : Number(new Date().getMonth()),
                label: months[index].label
            };
            

            setMonthSelected(monthCurrent);

        }
        else{
             
            const transactionsFormatted  = expenses.map(item => {
                return {
                    ...item,
                    amount: formatCurrency(Number(item.amount)),
                    date: formatDate(item.date)
                }
            });

            setTransactions(transactionsFormatted);
            setRenderTransactions(transactionsFormatted);

            const yearCurrent = {
                value: Number(new Date().getFullYear()),
                label: Number(new Date().getFullYear())
            };

            setYearSelected(yearCurrent);

            const index = Number(new Date().getMonth());
           
            const  monthCurrent = {
                value : Number(new Date().getMonth()),
                label: months[index].label
            };
            

            setMonthSelected(monthCurrent);

       
        }
    },[pageProps.move]);

    const years = useMemo(()=> {
        let uniqueYears : number [ ] = [];

        transactions.forEach(transaction => {

            const year = transaction.date.split('/');

            if(!uniqueYears.includes(Number(year[2]))){
                uniqueYears.push(Number(year[2]))
            }
        });

        return uniqueYears.map(year => {
            return {
                value: Number(year),
                label: Number(year)
            }
        })
    },[transactions]);

    const handleFilterYears = useCallback((yearSelected: string) => {

        const transactionsFilters = transactions.filter(transaction => {
            const year = transaction.date.split('/');
            
            return String(year[2]) === yearSelected;
        });

        setRenderTransactions(transactionsFilters);
        setYearSelected({value: Number(yearSelected), label: Number(yearSelected)})
    

    },[transactions]);

    const handleFilterMonth = useCallback((monthSelected : string)=> {
        
        const transactionsFilters = transactions.filter(transaction => {
            let month = transaction.date.split('/');
            
            return (Number(month[1])  === Number(monthSelected));
               
        });

        console.log('monthselected' + monthSelected)
        setRenderTransactions(transactionsFilters);
        setMonthSelected({value: Number(monthSelected) -1, label: months[Number(monthSelected) -1].label});
    
    },[transactions]);

    const handleFilterOccasion = useCallback((occasion: string) => {

        const transactionsFilters = transactions.filter(transaction => {

            return (transaction.frequency === occasion)
              
        });

        setRenderTransactions(transactionsFilters);

    },[transactions]);

    const handleRenderAll = useCallback(() => {
        setRenderTransactions(transactions)
    },[transactions]);

    return (
        <Container>
            <ContentHeader 
                title={pageProps.title}
                lineColor={pageProps.lineColor}
                
            >
                <SelectInput
                    initialValue={monthSelected}
                    options={months}
                    onChange={(e) => handleFilterMonth(e.target.value)}
                   
                />

                <SelectInput
                    initialValue={yearSelected}
                    options={years}
                    onChange={(e)=> handleFilterYears(e.target.value)}
                />
            </ContentHeader>
            <Filters>
                <ButtonFilters type='button' recurrent onClick={() => handleFilterOccasion('recorrente')}>
                    Recorrente
                </ButtonFilters>
                <ButtonFilters type='button'onClick={() => handleFilterOccasion('eventual')}>
                    Eventual
                </ButtonFilters>
                <ButtonFilters type='button' recurrent onClick={handleRenderAll}>
                    Todos
                </ButtonFilters>
            </Filters>
            <Content>
                {
                    renderTransactions.map((transaction, index) => {
                        return (
                            <HistoryFinanceCard
                                key={index}
                                title={transaction.description}
                                date={String(transaction.date)}
                                amount={transaction.amount}
                                tagColor={transaction.frequency === 'recorrente'? '#E44C4E' : '#4E41F0'}
                            />
                        )
                    })
                }
                

                
            </Content>
        </Container>
    );
}

export default List;