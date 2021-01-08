import React from 'react'
import { useParams } from 'react-router-dom';

import FeedContent from '../../Componets/FeedContent';
import Head from '../../Componets/Helper/Head';
import Layout from '../../Componets/Layout';
import Title from '../../Componets/Title';

import { Container } from './styles';

const Profile: React.FC = () => {
  const { slug } : { slug : string } = useParams();

  return (
    <Container>
      <Head title={ slug } content="Perfil dogs." />

      <Layout>
        <Title>{ slug }</Title>
        <FeedContent user={ slug } />
      </Layout>
    </Container>
  )
}

export default Profile;
