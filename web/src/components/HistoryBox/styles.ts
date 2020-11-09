import styled from 'styled-components';

interface ILegendProps {
    color: string;
}

export const Container = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;

    background: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};

    margin: 10px 0;
    padding: 30px 20px;

    border-radius: 10px;

    
`;

export const Content = styled.div`
    flex: 1;
    height: 260px;

   padding-bottom: 20px;
`;

export const Header = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;

    h2{
        margin-bottom: 20px;
        padding-left: 20px;
    }

    @media(max-width: 1200px){
        flex-direction: column;
    }
`;

export const LegendContainer = styled.ul`
    display: flex;
   

`;

export const Legend = styled.li<ILegendProps>`
    list-style: none;
    display: flex;
    align-items: center;

    margin-bottom: 7px;
    margin-left: 7px;

    padding-right: 20px;

    div {

        width: 40px;
        height: 40px;
        background: white;

        border-radius: 10px;

        background: ${props => props.color}
    }

    span{
        margin-left: 5px;
    }

    @media(max-width: 1280px) {

        > div {
            width: 30px;
            height: 30px;
        }
    }
`;
