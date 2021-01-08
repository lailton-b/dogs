import React from 'react'
import { Link } from 'react-router-dom';

import { useUserContext } from '../../UserContext';

import Logo from '../../Assets/dogs.svg';
import { ReactComponent as User } from '../../Assets/usuario.svg';

import { Container, HeaderWrapper } from './styles';

const Header: React.FC = () => {
  const { user, loading } = useUserContext();

  return (
    <Container>
      <HeaderWrapper className="container">
        { user.logged 
          ? <Link to="/"><img src={ Logo } alt="Dogs" /></Link> 
          : <Link to="/login"><img src={ Logo } alt="Dogs" /></Link>
        }
        
        { user.logged && (
          <Link to="/conta" className="user">
            {user.nome}
            <User />
          </Link>
        )}
        { loading &&  (
          null
        )}
        { !user.logged && !loading && (
          <Link to="/login" className="user">
            Login / Criar
            <User />
          </Link>
        )}
      </HeaderWrapper>
    </Container>
  )
}

export default Header
