import styled from 'styled-components';

interface IButtonFiltersProps{
    recurrent?: boolean;
}

export const  Container = styled.div`
   
`;

export const Content = styled.main`
    
`;

export const Filters = styled.div`
    width: 100%;
    display: flex;

    justify-content: center;

    margin-bottom: 30px;

    
`;

export const ButtonFilters = styled.button<IButtonFiltersProps>`
   
    font-size: 18px;
    font-weight: 500;
    background: none;
    color: ${props => props.theme.colors.white};
    margin: 0 10px;
    transition: opacity 0.3s;

    &:hover{
        opacity: 0.7;
    }

    &::after{
        content: '';
        display: block;
        width: 55px;
        margin: 0 auto;
        border-bottom: 10px solid ${props => props.recurrent ? props.theme.colors.warning : props.theme.colors.success};
        

        
    }


`