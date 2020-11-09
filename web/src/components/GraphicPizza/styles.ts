import styled , {keyframes} from 'styled-components';

const animate = keyframes`
    0%{
        transform: translateX(100px);
        opacity: 0;
    }
    50%{
        opacity: 0.3;
    }
    100%{
        transform: translateX(0px);
        opacity: 1;
    }
`;

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

    /* animation: ${animate} 0.5s; */

    @media(max-width: 770px){
        display: flex;
        width: 100%;
    }
`;

export const SideLeft = styled.aside`
    padding: 30px 20px;

    > h2 {
        margin-bottom: 20px;
    }

    @media(max-width: 1345px){
        padding: 0 15px 5px;
        margin-bottom: 7px;

        > h2 {
            margin-top: 15px;
            margin-bottom: 7px;
        }
    }

    @media(max-width: 420px) {
        padding: 15px;
        margin-bottom: 7px;
    }
`;

export const LegendContainer = styled.ul`
   
    > h2{
        margin-bottom: 20px;
    }

    @media(max-width: 1345px) {
        display: flex;
        flex-direction: column;
    }
`;

export const Legend = styled.li<ILegendProps>`
    
    list-style: none;
    
    display: flex;
    align-items: center;

    margin-bottom: 7px;
    font-size: 18px;
 

    > div {

        padding: 5px;

        background: ${props => props.color};
        width: 45px;
        height: 45px;

        border-radius: 10px;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    > span {
        margin-left: 7px;
    }

    @media(max-width: 1345px){
        font-size: 14px;
        margin:3px 0;

        > div {
            width: 35px;
            height: 35px;
            line-height: 35px;
        }

        > span {
            margin-left: 7px;
        }

    }

`;

export const SideRight = styled.main`
    display: flex;
    flex: 1;
    justify-content: center;

    @media(max-width: 1345px ){
        height: 100%;
    }
`;



