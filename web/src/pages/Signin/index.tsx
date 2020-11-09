import React , {useCallback, useState} from 'react';

import Input from '../../components/Input';
import Button from '../../components/Button';
import {useAuth} from '../../hooks/auth';

import {
    Container,
    Logo,
    Form,
    FormTitle
} from './styles';

import logoImg from '../../assets/logo.svg';

const Signin : React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {signin} = useAuth();

    const handleOnSubmit = useCallback(()=>{
        signin(email, password);
    },[email, password, signin])

    return (
       <Container>
           <Logo>
               <img src={logoImg} alt='logo'/>
               <h2>Minha carteira</h2>
           </Logo>
           <Form onSubmit={handleOnSubmit}>
               <FormTitle>
                   Entrar
               </FormTitle>

               <Input 
                required type='email'
                placeholder='E-mail'
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                />

               <Input 
                required 
                type='password' 
                placeholder='Senha'
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                />

               <Button type='submit'>
                Login
               </Button>

           </Form>
       </Container>
    );
};

export default Signin;