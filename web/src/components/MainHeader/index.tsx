import React, { useCallback, useMemo, useState } from 'react';

import Toggle from '../Toggle';
import {useTheme} from '../../hooks/theme';

import {emojis} from '../../utils/emojis';
import {
    Container,
    Profile,
    Welcome,
    UserName
} from './styles';

const MainHeader: React.FC = () => {
    const emoji = useMemo(() => {
        const indice = Math.floor(Math.random() * emojis.length);
        return emojis[indice];
    },[]);

    const {toggleTheme, theme} = useTheme();
    const [darkTheme, setDarkTheme] = useState(() => theme.title ===' dark' ? true : false);

    const handleChangeTheeme = useCallback(()=> {
        setDarkTheme(!darkTheme);
        toggleTheme();
    },[darkTheme, toggleTheme]);

    return (
        <Container>
            <Toggle
                labelLeft='Light'
                labelRight='Right'
                checked={darkTheme}
                onChange={handleChangeTheeme}
            
            />

            <Profile>
                <Welcome>Olá, {emoji}</Welcome>
                <UserName>Tales Eduardo</UserName>
            </Profile>
        </Container>
    );
}

export default MainHeader;