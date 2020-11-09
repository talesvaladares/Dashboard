import styled from 'styled-components';

export const Container = styled.div`
    grid-area: CT;
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
    padding: 25px;

    /* Faz o container do content ter 100% da altura da tela
        menos a altura do header do cabeçalho
        caso o conteúdo do content ultrapasse o limite da tela
        será adicionando uma barra de scroll
     */
    height: calc(100vh - 70px);
    overflow-y: scroll;

    ::-webkit-scrollbar{
        width: 10px;
    }

    ::-webkit-scrollbar-thumb{
        background: ${props => props.theme.colors.secondary};
        border-radius: 10px;
    }
    
    ::-webkit-scrollbar-track{
        background: ${props => props.theme.colors.tertiary};
        
    }
`;