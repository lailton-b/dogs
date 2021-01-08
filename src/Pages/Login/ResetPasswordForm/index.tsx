import React from 'react'

import useForm from '../../../hooks/useForm';
import useFetch from '../../../hooks/useFetch';
import { PASSWORD_RESET_POST } from '../../../Api';

import Button from '../../../Componets/Button';
import Input from '../../../Componets/Input';
import Title from '../../../Componets/Title';
import Error from '../../../Componets/Helper/Error/Error';

import { Container, Success, Warning } from '../LostPasswordForm/styles';

const ResetPasswordForm: React.FC = () => {
  const password = useForm('password');
  const [ data, setData ] = React.useState<null | string>(null);
  const [ login, setLogin ] = React.useState<string | null>(null);
  const [ key, setKey ] = React.useState<string | null>(null);

  const { request, error, loading } = useFetch();

  async function handleSubmit(e: any) {
    e.preventDefault();

    if (password.validate() && login && key) {
      const { url, options } = PASSWORD_RESET_POST({ 
        login: login, 
        password: password.value,
        key: key
      });
  
      const { response } = await request(url, options);
      if (response && response.ok) setData('Senha alterada com sucesso.');
    }
  }

  /* useEffect */
  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const login = params.get('login');
    const key = params.get('key');

    if (login) setLogin(login);
    if (key) setKey(key);
  }, []);

  return (
    <Container>
      <Title>Resete a senha</Title>

      <form onSubmit={ handleSubmit }>
        { !data && <Input type="password" id="password" label="Nova senha" {...password} autoComplete="current-password" /> }
        { error && <Warning><Error>{ error }</Error></Warning>}
        { data && <Warning><Success>{ data }</Success></Warning>}
        { !data && loading && <Button loading={ loading }>Carregando...</Button> }
        { !data && !loading && <Button>Enviar Email</Button> }
      </form>
    </Container>
  )
}

export default ResetPasswordForm;
