import React from 'react';

import Interweave from 'interweave';

import useForm from '../../../hooks/useForm';
import { useUserContext } from '../../../UserContext';

import Button from '../../../Componets/Button';
import Error from '../../../Componets/Helper/Error/Error';
import Input from '../../../Componets/Input';
import Title from '../../../Componets/Title';
import Head from '../../../Componets/Helper/Head';

import { Container } from './styles';

const RegisterForm: React.FC = () => {
  const { error, loading, userPost } = useUserContext();

  const username = useForm('username');
  const email = useForm('email');
  const password = useForm('password');

  async function handleSubmit(event: any) {
    event.preventDefault();

    if (username.validate() && email.validate() && password.validate()) {
      await userPost(username.value, email.value, password.value);
    }
  }

  return (
    <Container>
      <Head title="Cadastre-se" content="Crie uma conta Dogs." />

      <Title>Cadastre-se</Title>

      <form onSubmit={ handleSubmit }>
        <Input type="text" id="user" label="Usuário" {...username} autoComplete="off" />
        <Input type="email" id="email" label="Email" {...email} autoComplete="off" />
        <Input type="password" id="password" label="Senha" {...password} autoComplete="current-password" />

        { error && 
          <Error>
            <Interweave content={ error } />
          </Error>
        }

        { loading ? <Button loading={true}>Cadastrando...</Button> : <Button>Cadastrar</Button>}
      </form>
    </Container>
  )
}

export default RegisterForm;
