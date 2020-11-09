import React, {SelectHTMLAttributes} from 'react';

import {
    Container
} from './styles';

interface ISelectInputProps extends SelectHTMLAttributes<HTMLSelectElement>{
    initialValue?: {
        value: string | number;
        label: string | number;
    };
    options : Array<{
        label: string | number;
        value: string | number;
    }>;
    

}

const SelectInput : React.FC<ISelectInputProps> = ({options, initialValue, name, ...rest}) => {
    return (
        <Container>
            <select value='' {...rest} >
                <option value=''  hidden>{initialValue?.label}</option>
                {
                    options.map((option, index) => {
                        return (
                            <option key={index} value={option.value}> {option.label} </option>
                        );  
                    })
                }
            </select>
        </Container>
    );
}   

export default SelectInput;