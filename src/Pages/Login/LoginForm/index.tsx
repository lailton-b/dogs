import React from 'react';
import { Link } from 'react-router-dom';
import Interweave from 'interweave';

import useForm from '../../../hooks/useForm';
import { useUserContext } from '../../../UserContext';

import Button from '../../../Componets/Button';
import Error from '../../../Componets/Helper/Error/Error';
import Input from '../../../Componets/Input';
import Title from '../../../Componets/Title';
import Head from '../../../Componets/Helper/Head';


import { Container, SigninWrapper } from './styles';

const Login: React.FC = () => {
  const username = useForm('username');
  const password = useForm('password');
  const { userToken, loading, error } = useUserContext();

  async function handleSubmit(event: any) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      await userToken(username.value, password.value);
    }
  }

  return (
    <Container>
      <Head title="Login" content="Logue na sua conta Dogs." />

      <Title>Login</Title>
      <form onSubmit={handleSubmit} >
        <Input 
          type="text" 
          id="user" 
          label="Usuário"
          autoComplete="off"
          {...username}
        />

        <Input 
          type="password" 
          id="password" 
          label="Senha"
          autoComplete="current-password"
          {...password}
        />

        { error && 
          <Error>
            <Interweave content={ error } />
          </Error>
        }
        
        { loading ? <Button loading={true}>Entrando...</Button> : <Button>Entrar</Button>}
      </form>

      <Link to="/perdeu">Perdeu a senha?</Link>

      <SigninWrapper>
        <h2>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link to="/criar">Cadastro</Link>
      </SigninWrapper>
    </Container>
  )
}

export default Login;
