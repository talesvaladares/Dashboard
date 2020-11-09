import React, { useMemo } from 'react';
import CountUp from 'react-countup';

import {Container} from './styles';

import arrowDown from '../../assets/arrow-down.svg';
import arrowUp from '../../assets/arrow-up.svg';
import dolar from '../../assets/dollar.svg';

interface IWalletBox {
    label: string;
    value: number;
    description: string;
    icon: 'arrowDown' | 'arrowUp' | 'dolar';
    color: string;
}

const WalletBox : React.FC<IWalletBox> = ({label, value, description , icon, color}) => {

    const iconSelected = useMemo(()=> {

        if(icon ==='dolar'){
            return dolar;
        }
        if(icon ==='arrowDown'){
            return arrowDown;
        }
        if(icon ==='arrowUp'){
            return arrowUp
        }
    },[icon]);

    return (
        <Container color={color}>
            <span>{label}</span>
            <h1>
                <strong>R$ </strong>
                <CountUp
                    end={value}
                    // prefix={'R$'}
                    separator='.'
                    decimal=','
                    decimals={2}

                />
                  
            </h1>
            <small>{description}</small>
            <img src={iconSelected} alt={label} />
        </Container>
    );
}

export default WalletBox;