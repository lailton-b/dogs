import React from 'react';
import useForm from '../../../hooks/useForm';
import useFetch from '../../../hooks/useFetch';
import { PASSWORD_LOST_POST } from '../../../Api';

import Button from '../../../Componets/Button';
import Input from '../../../Componets/Input';
import Title from '../../../Componets/Title';
import Error from '../../../Componets/Helper/Error/Error';
import Head from '../../../Componets/Helper/Head';

import { Container, Success, Warning } from './styles';

const LostPasswordForm: React.FC = () => {
  const username = useForm('username');
  const [ data, setData ] = React.useState<null | string>(null);

  const { request, error, loading } = useFetch();

  async function handleSubmit(e: any) {
    e.preventDefault();

    if (username.validate()) {
      const { url, options } = PASSWORD_LOST_POST({ 
        login: username.value, 
        url: window.location.href.replace('perdeu', 'resetar') 
      });
  
      const { json } = await request(url, options);
      setData(json);
    }
  }

  return (
    <Container>
      <Head title="Perdeu a senha" content="Perdeu a senha da sua conta Dogs?" />

      <Title>Perdeu a senha?</Title>

      <form onSubmit={ handleSubmit }>
        { !data && <Input type="text" id="email" label="E-mail / Usuário" {...username} autoComplete="off" /> }
        { error && <Warning><Error>{ error }</Error></Warning>}
        { data && <Warning><Success>Um e-mail será enviado em instantes.</Success></Warning>}
        { !data && loading && <Button loading={ loading }>Carregando...</Button> }
        { !data && !loading && <Button>Enviar Email</Button> }
      </form>
    </Container>
  )
}

export default LostPasswordForm
