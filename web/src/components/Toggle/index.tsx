import React from 'react';


import {
    Container,
    ToggleLabel,
    ToggleButton
} from './styled';

interface IToggleProps {
    labelLeft: string;
    labelRight : string;
    checked: boolean;
    onChange(): void;

}

const Toggle : React.FC<IToggleProps> = ({checked, labelLeft , labelRight ,onChange }) => {
    return (
        <Container>
            <ToggleLabel>{labelLeft}</ToggleLabel>
            
            <ToggleButton
                checked={checked}
                uncheckedIcon={false}
                checkedIcon={false}
                onChange={onChange}
            />
            
            <ToggleLabel>{labelRight}</ToggleLabel>
        </Container>
    );
}

export default Toggle;