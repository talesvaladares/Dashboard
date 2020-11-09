import styled from 'styled-components';
import Toggle , {ReactSwitchProps} from 'react-switch';

export const Container = styled.div`
    display: flex;
    justify-items: center;

`;

export const ToggleLabel = styled.span`
    color: ${props => props.theme.colors.white};
    display: flex;
    align-items: center;
`;

export const ToggleButton = styled(Toggle).attrs<ReactSwitchProps>(
    ({theme}) => ({
        onColor: theme.colors.info,
        offColor: theme.colors.warning
    }))<ReactSwitchProps>`
        margin: 0 7px;
    `;