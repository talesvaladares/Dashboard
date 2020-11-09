import React from 'react';

import logoImage from '../../assets/logo.svg';
import {useAuth} from '../../hooks/auth';

import {
    MdDashboard,
    MdArrowDownward,
    MdArrowUpward,
    MdExitToApp
} from 'react-icons/md';

import {
    Container,
    Header,
    Logo,
    Title,
    MenuContainer,
    MenuItemLink
} from './styles';

const MainHeader: React.FC = () => {
    const {signout} = useAuth();

    return (
        <Container>
            <Header>
                <Logo src={logoImage} alt='logo minha carteira'/>
                <Title>Minha carteira</Title>
            </Header>
            <MenuContainer>
                <MenuItemLink to='/'>
                    <MdDashboard/>
                    Dashboard
                </MenuItemLink>
                
                <MenuItemLink to='/list/entry-balance'>
                    <MdArrowUpward/>
                    Entradas
                </MenuItemLink>

                <MenuItemLink to='/list/exit-balance'>
                    <MdArrowDownward/>
                    Saídas
                </MenuItemLink>

                <MenuItemLink  onClick={signout} to='#'>
                    <MdExitToApp/>
                    Logout
                </MenuItemLink>
            </MenuContainer>
        </Container>
    );
}

export default MainHeader;