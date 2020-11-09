import styled, {keyframes} from 'styled-components';

const animate = keyframes`
    0%{
        transform: translateX(-100px);
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

interface IContainerProps {
    color: string;
}

export const  Container = styled.div<IContainerProps>`
    width: 32%;
    height: 150px;
    margin: 10px 0;

    background: ${props => props.color};
    color: ${props => props.theme.colors.white};

    border-radius: 10px;
    padding: 10px 20px;

    position: relative;
    overflow: hidden;

    animation: ${animate} 0.5s;

    > img {
        position: absolute;
        height: 110%;

        top: -10px;
        right: -30px;

        opacity: 0.3;
    }

    > span {
        font-size: 20px;
        font-weight: bold;
    }

    > small{ 
        font-size: 12px;

        position: absolute;
        bottom: 10px;
    }


    @media(max-width: 770px){

        > span {
            font-size: 14px;
        }

        > h1 {
            word-wrap: break-word;
            font-size: 20px;

            > strong {
                display: inline-block;
                width: 100%;
            }
        }
    }

    @media(max-width: 420px){
        width: 100%;

        >h1 {
            display: flex;

            strong {
                position: initial;
                width: auto;
                font-size: 22px;
            }

            strong::after{
                display: inline-block;
                content: '';
                width: 1px;
            }
        }
    }

`;




