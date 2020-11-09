import styled from 'styled-components';
import {Link} from 'react-router-dom';


export const Container = styled.div`
    grid-area: AS;
    background: ${props => props.theme.colors.secondary};
    padding-left: 20px;
    border-right: 1px solid ${props => props.theme.colors.gray};

`; 

export const Header = styled.header`
    height: 70px;
    display: flex;
    align-items: center;
    
`;

export const Title = styled.h3`
    color: ${props => props.theme.colors.white};
    margin-left: 10px;
`;

export const Logo = styled.img`
    width: 40px;
    height: 40px;
`;

export const MenuContainer = styled.nav`
    margin-top: 50px;
    display: flex;
    flex-direction: column;

    a + a {
        margin-top: 20px;
    }
`;

export const MenuItemLink = styled(Link)`
    color: ${props => props.theme.colors.info};
    text-decoration: none;

    display: flex;
    align-items: center;
    
    transition: opacity 0.3s;

    svg{
        margin-right: 8px;
    }

    &:hover{
        opacity: 0.7;
    }
`;