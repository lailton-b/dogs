import React from 'react'
import { Link, NavLink, useParams } from 'react-router-dom';
import { useUserContext } from '../../UserContext';

import FeedContent from '../../Componets/FeedContent';
import Layout from '../../Componets/Layout';
import Title from '../../Componets/Title';
import AccountPostPhoto from './AccountPostPhoto';
import Loading from '../../Componets/Helper/Loading';
import Head from '../../Componets/Helper/Head';
import { ReactComponent as Feed } from '../../Assets/feed.svg';
import { ReactComponent as Statistics } from '../../Assets/estatisticas.svg';
import { ReactComponent as Add } from '../../Assets/adicionar.svg';
import { ReactComponent as Exit } from '../../Assets/sair.svg';

import { Container, AccountHeader } from './styles';
const AccountStatistics = React.lazy(() => import('./AccountStatistics'));

const Account: React.FC = () => {

  const { user, loading, userLogout } = useUserContext();
  const { slug }: { slug: string } = useParams();

  const title = React.useMemo(() => {
    switch(slug) {
      case 'estatisticas':
        return 'Estatísticas';
      case 'postar':
        return 'Poste sua foto';
      default: 
        return 'Minha conta';
    }
  }, [slug]);

  if (loading) return <Layout><Loading /></Layout>;
  if (user.logged) return (
    <Layout>
      <Container>
        <AccountHeader>
          <Title>{ title }</Title>

          <ul>
            <li>
              <NavLink 
                to="/conta" 
                exact 
                aria-label="Meu perfil" 
                activeClassName="activedPage" 
              >
                <Feed />
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/conta/estatisticas" 
                exact 
                aria-label="Estatísticas da conta" 
                activeClassName="activedPage" 
              >
                <Statistics />
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/conta/postar" 
                exact 
                aria-label="Adicionar nova foto" 
                activeClassName="activedPage" 
              >
                <Add />
              </NavLink>
            </li>
            <li>
              <Link 
                to="/login" 
                aria-label="Deslogar" 
                onClick={ userLogout } 
              >
                <Exit />
              </Link>
            </li>
          </ul>
        </AccountHeader>

        { slug === 'postar' && <AccountPostPhoto />}

        { slug === 'estatisticas' && (
          <React.Suspense 
            fallback={(
              <Layout>
                <Head title="Estatísticas" content="Estatísticas da sua conta Dogs." />
                <Loading />
              </Layout>   
            )}
          >
            <AccountStatistics />
          </React.Suspense>
        )}

        { slug === undefined && user.id && (
          <>
            <Head title="Minha conta" content="Minha conta Dogs." />
            <FeedContent user={user.id} />
          </>
        )}
      </Container>
    </Layout>
  )
  else return null;
}

export default Account;