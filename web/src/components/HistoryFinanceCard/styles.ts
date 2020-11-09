import styled from 'styled-components';

interface ITagProps{
    tagColor: string;
}

export const Container = styled.li`
    list-style: none;    
    background: ${props => props.theme.colors.tertiary};
    border-radius: 5px;
    margin: 10px 0;
    padding: 12px 10px;

    display: flex;
    justify-content: space-between;

    cursor: pointer;
    transition: all 0.3s;


    &:hover{
        opacity: 0.7;
        transform: translateX(10px);
    }


    > div {
        display: flex;
        flex-direction: column;
        padding-left: 10px;

        span{
            font-size: 18px;
            font-weight: bold;
        }
        small{
            margin-top: 8px;
            font-size: 14px;
        }
       
    }

    position: relative;
`;

export const Tag = styled.div<ITagProps>`
    position: absolute;

    width: 10px;
    height: 60%;
    background: ${props => props.tagColor};
    left: 0;


`;