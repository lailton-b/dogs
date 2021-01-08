import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useUserContext } from '../../UserContext';


import LoginForm from './LoginForm';
import LostPasswordForm from './LostPasswordForm';
import RegisterForm from './RegisterForm';
import ResetPasswordForm from './ResetPasswordForm';
import Head from '../../Componets/Helper/Head';

import { Container, LeftSide, RightSide } from './styles';

const Login: React.FC = () => {
  const { user } = useUserContext();
  const { slug }: { slug: string } = useParams();
  
  if (user.logged) return <Redirect to="/" />
  else return (
    <Container>
      <Head title="Resetar senha" content="Resete a senha da sua conta Dogs." />

      <LeftSide></LeftSide>
      <RightSide>
        { slug === 'perdeu' && <LostPasswordForm /> }
        { slug === 'criar' && <RegisterForm /> }
        { slug === 'login' && <LoginForm /> }
        { slug === 'dogs' && <LoginForm /> }
        { slug === 'resetar' && <ResetPasswordForm /> }
      </RightSide>
    </Container>
  )
}

export default Login;
