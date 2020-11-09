import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.main`
    display: flex;
    justify-content: space-between;
    
    /* essa função faz com que os elementos que nao caibam na mesma linha
    passem a ocupar a linha de baixo */
    flex-wrap: wrap;
`;