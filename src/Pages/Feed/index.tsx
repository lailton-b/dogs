import React from 'react';
import { useUserContext } from '../../UserContext';

import FeedContent from '../../Componets/FeedContent';
import Head from '../../Componets/Helper/Head';
import Layout from '../../Componets/Layout';


const Feed: React.FC = () => {
  const { user } = useUserContext();

  if (user.logged) {
    return (
      <Layout>
        <Head title="Fotos" content="Fotos Dogs" />
        <FeedContent user={0} />
      </Layout>
    )
  } else return <Layout></Layout>
}

export default Feed;
