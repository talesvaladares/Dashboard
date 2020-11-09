import styled from 'styled-components';

interface ITitleContainerProps {
    lineColor: string;
}

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    /* padding: 20px; */
    margin-bottom: 25px;
`;

export const TitleContainer = styled.div<ITitleContainerProps>`
    
    > h1 {
        color: ${props => props.theme.colors.white};

        &::after{
            content: '';
            display: block;
            width: 55px;
            border-bottom: 10px solid ${props => props.lineColor}
        }
    }
`;

export const ControllersContainer = styled.div`
    display: flex;
    
`;