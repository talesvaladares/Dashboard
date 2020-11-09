import styled from 'styled-components';

interface ILegendProps {
    color: string;
}

export const Container = styled.div`
    width: 48%;
    height: 260px;

    margin: 10px 0;

    background: ${props => props.theme.colors.tertiary};

    color: ${props => props.theme.colors.white};

    border-radius: 10px;

    display: flex;

    @media(max-width: 1200px){
        display: flex;
        flex-direction: column;

        width:100%;
        height: auto;
    }

`;

export const SideLeft = styled.aside`
    padding: 30px 20px;

    h2 {
        margin-bottom: 10px;
        padding-left: 20px;

    }
`;

export const SideRight = styled.main`
    flex: 1;
    min-height: 150px;
    display: flex;
    justify-content: center;

    padding-bottom: 20px;
    
`;

export const LegendContainer = styled.ul`

    padding: 30px 20px;

    @media(max-width: 1200px){
        display: flex;
        height: auto;
    }
   
`;

export const Legend = styled.li<ILegendProps>`
    
    list-style: none;
    
    display: flex;
    align-items: center;

    margin-bottom: 7px;
    font-size: 18px;
 

    div {

        padding: 5px;

        background: ${props => props.color};
        width: 45px;
        height: 45px;

        border-radius: 10px;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    span {
        margin-left: 7px;
    }

`;