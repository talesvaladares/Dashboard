import React, {InputHTMLAttributes} from 'react';

import {
    Container
} from './styles';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement>{
   
}
const Input : React.FC<IInputProps> = ({...rest}) => {
    return (
        <Container {...rest}/>        
    );
};

export default Input;