import React, {useEffect, useMemo, useState, useCallback} from 'react';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import WalletBox from '../../components/WalletBox';
import MessageBox from '../../components/MessageBox';
import GraphicPizza from '../../components/GraphicPizza';
import HistoryBox from '../../components/HistoryBox';
import BarChartBox from '../../components/BarChartBox';

import {gains} from '../../repositories/gains';
import {expenses} from '../../repositories/expenses';
import { months } from '../../repositories/months';
import formatDate from '../../utils/formatDate';

import {
    Container,
    Content,
} from './styles';

import happyImg from '../../assets/happy.svg';
import sadImg from '../../assets/sad.svg';


interface ITransactions {
    description: string;
    amount: number;
    frequency: string;
    type: string;
    date: string;  
}

interface IYear{
    value: number ;
    label: number ;
}

interface IMonthSelected{
    value: number;
    label: string;
}

const Dashboard : React.FC = () => {
    const [transactions, setTransactions] = useState<ITransactions[]>([]);
    const [yearSelected, setYearSelected] = useState<IYear>({value: new Date().getFullYear(), label: new Date().getFullYear()});
    const [monthSelected, setMonthSelected] = useState<IMonthSelected>();

    useEffect(()=> {
        const transactionsFormatted = [...expenses, ...gains].map(item => {
            return {
                ...item,
                amount: Number(item.amount),
                date:  formatDate(item.date)
            }
        });

        setTransactions(transactionsFormatted);

        const index = Number(new Date().getMonth());
           
            const  monthCurrent = {
                value : Number(new Date().getMonth()),
                label: months[index].label
            };

        setMonthSelected(monthCurrent);
       

        const yearCurrent = {
            value: Number(new Date().getFullYear()),
            label: Number(new Date().getFullYear())
        };

        setYearSelected(yearCurrent);

    },[]);

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

        
        setYearSelected({value: Number(yearSelected), label: Number(yearSelected)})
        
        return transactionsFilters;

    },[transactions]);

    const handleFilterMonth = useCallback((monthSelected : string)=> {
        
        const transactionsFilters = transactions.filter(transaction => {
            let month = transaction.date.split('/');
            
            return (Number(month[1])  === Number(monthSelected));
               
        });

        setMonthSelected({value: Number(monthSelected) -1, label: months[Number(monthSelected)- 1].label});

        return transactionsFilters;
    
    },[transactions]);

    const totalExpenses = useMemo(()=> {
        let total : number = 0;
        
        expenses.forEach(item => {
           const date = new Date(item.date);
           const year = date.getFullYear();
           const month = date.getMonth();

           if( month === monthSelected?.value && year === yearSelected?.value){
                total = Number(item.amount) + total;
            
           }
       })

       return total;
    },[monthSelected, yearSelected]);

    const totalGains = useMemo(()=> {
        let total : number = 0;
        
        gains.forEach(item => {
           const date = new Date(item.date);
           const year = date.getFullYear();
           const month = date.getMonth();

           if( month === monthSelected?.value && year === yearSelected?.value){
                total = Number(item.amount) + total;
            
           }
       })

       return total;
    },[monthSelected, yearSelected]);
    
    const saldo = useMemo(()=> {
        return totalGains - totalExpenses;
    },[totalExpenses, totalGains]);

    

    const message = useMemo(() => {
        if(saldo < 0){
            return {
                title: 'Que triste!',
                description: 'Neste mês, você gastou mais do que podia.',
                footerText: 'Verifique seus gastos e tente cortar o que não é necessário.',
                icon: sadImg

            }
        }
        else if(saldo === 0){
            return {
                title: 'Ufa!',
                description: 'Neste mês, você ficou na tábua da beirada.',
                footerText: 'Você teve equilibrio, mas cuidado para os próximos meses.',
                icon: sadImg

            }
        }
        else {
            return {
                title: 'Muito bem!',
                description: 'Sua carteira está positiva.',
                footerText: 'Continue assim, considere investir o seu saldo.',
                icon: happyImg

            }

        }

    },[saldo]);

    const relationExpensesVersusGains = useMemo(()=> {
        const total = totalGains + totalExpenses;
        const percentExpenses = ((totalExpenses / total) * 100);
        const percentGains = ((totalGains / total) * 100);

        const  data = [
           {
               name: 'Entradas',
               percent: Number(percentGains.toFixed(1)),
               color: '#F7931B'
           },
           {
                name: 'Saída',
                percent: Number(percentExpenses.toFixed(1)),
                color: '#E44C4E'
           }
       ];

       return data;

    }, [totalExpenses, totalGains]); 
    
    const historyData = useMemo(()=> {
        return months.map((_, index)=> {

            let amountEntry = 0;

            gains.forEach(gain => {
                const date = new Date(gain.date);
                const month = date.getMonth();
                const year = date.getFullYear();

                if(month === index && year === yearSelected?.value){
                    amountEntry += Number(gain.amount);
                }
            });

            let amountOutput = 0;

            expenses.forEach(expense => {
                const date = new Date(expense.date);
                const month = date.getMonth();
                const year = date.getFullYear();

                if(month === index && year === yearSelected?.value){
                    amountOutput += Number(expense.amount);
                }
            });

            return {
                monthNumber: index,
                month: months[index].label.substr(0,3),
                amountEntry,
                amountOutput

            }
        }).filter(item => {
            const yearCurrent = new Date().getFullYear();
            const monthCurrent = new Date().getMonth();
            return (yearSelected.value === yearCurrent && item.monthNumber <= monthCurrent ) || (yearSelected.value < yearCurrent)
        })
    },[yearSelected]);

    const relationsExpensesRecurrentVersusEventual = useMemo(() => {
        let amountRecurrent = 0;
        let amountEventual = 0;

        expenses.filter(item => {
            const  date = new Date(item.date);
            const month = date.getMonth();
            const year = date.getFullYear();

            return month === monthSelected?.value && year === yearSelected.value;
        }).forEach(item =>  {
            if(item.frequency === 'recorrente'){
                return amountRecurrent += Number(item.amount);
            }
            else{
                return amountEventual += Number(item.amount);
            }
        });

        const total = amountEventual + amountRecurrent;

        return [
            {
                name: "Recorrente",
                amount: amountRecurrent,
                percent: Number(((amountRecurrent / total) * 100).toFixed(1)),
                color: '#f7931b'
            },
            {
                name: "Eventual",
                amount: amountEventual,
                percent: Number(((amountEventual / total) * 100).toFixed(1)),
                color: '#E44C4E'
            }
        ]

    },[yearSelected.value, monthSelected?.value]);

    const relationsExpensesGainsVersusEventual = useMemo(() => {
        let amountRecurrent = 0;
        let amountEventual = 0;

        gains.filter(item => {
            const  date = new Date(item.date);
            const month = date.getMonth();
            const year = date.getFullYear();

            return month === monthSelected?.value && year === yearSelected.value;
        }).forEach(item =>  {
            if(item.frequency === 'recorrente'){
                return amountRecurrent += Number(item.amount);
            }
            else{
                return amountEventual += Number(item.amount);
            }
        });

        const total = amountEventual + amountRecurrent;

        return [
            {
                name: "Recorrente",
                amount: amountRecurrent,
                percent: Number(((amountRecurrent / total) * 100).toFixed(1)),
                color: '#f7931b'
            },
            {
                name: "Eventual",
                amount: amountEventual,
                percent: Number(((amountEventual / total) * 100).toFixed(1)),
                color: '#E44C4E'
            }
        ]

    },[yearSelected.value, monthSelected?.value]);
    
    return (
        <Container>
            <ContentHeader 
                title='Dashboard'
                lineColor='#f7931b'
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
            <Content>
                <WalletBox
                    label='saldo'
                    value={saldo}
                    description='atualizado com base nas entradas e saídas'
                    color='#4E41F0'
                    icon='dolar'

                />
                <WalletBox
                    label='entradas'
                    value={totalGains}
                    description='atualizado com base nas entradas e saídas'
                    color='#F7931B'
                    icon='arrowUp'

                />
            
                <WalletBox
                    label='saídas'
                    value={totalExpenses}
                    
                    description='atualizado com base nas entradas e saídas'
                    color='#E44C4E'
                    icon='arrowDown'

                />

                <MessageBox
                    title={message.title}
                    description={message.description}
                    footerText={message.footerText}
                    icon={message.icon}
                />
                <GraphicPizza
                    data={relationExpensesVersusGains}
                />
                <HistoryBox
                    data={historyData}
                    lineColorAmountEntry='#F7931B'
                    lineColorAmountOut='#E44C4E'
                />

                <BarChartBox
                    title="Saídas"
                    data={relationsExpensesRecurrentVersusEventual}
                />

                <BarChartBox
                    title="Entradas"
                    data={relationsExpensesGainsVersusEventual}
                />
            </Content>
        </Container>
    );
}

export default Dashboard;