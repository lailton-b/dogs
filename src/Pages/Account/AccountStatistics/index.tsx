import React from 'react';
import useFetch from '../../../hooks/useFetch';
import { STATS_GET } from '../../../Api';
import { VictoryAxis, VictoryBar, VictoryChart, VictoryPie } from 'victory';

import Head from '../../../Componets/Helper/Head';
import Loading from '../../../Componets/Helper/Loading';
import Layout from '../../../Componets/Layout';

import { Container, NoStatistics } from './styles';

interface IData {
  id: number,
  title: string, 
  acessos: string
}

const AccountStatistics: React.FC = () => {
  const token = localStorage.getItem('@dogs:token');
  const { request, loading } = useFetch();

  const [data, setData] = React.useState<IData[]>({} as IData[]);
  const access = React.useMemo(() => {
    let total = 0;
    if (data.length) data.forEach(({ acessos }) => total += Number(acessos));
    return total;
  }, [data]);

  /* Use Effect */
  React.useEffect(() => {
    async function getStats() {
      if (token) {
        const { url, options } = STATS_GET(token);
        const { response, json } = await request(url, options);
        if (response && response.ok) setData(json);
      }
    }

    getStats();

    return () => {
      setData({} as IData[]);
    }
  }, [request, token]);

  if (loading) return <Layout><Loading /></Layout>
  else if (data.length) {
    return (
      <Container>
        <Head title="Estatísticas" content="Estatísticas da sua conta Dogs." />

        <p>Acessos: { access }</p>
  
        <div className="pieContainer">
          <VictoryPie data={ data } padAngle={ 1 } innerRadius={ 60 } x="title" y="acessos" />
        </div>
  
        <div>
          <VictoryChart domainPadding={ 30 }>
            <VictoryAxis />
            <VictoryAxis dependentAxis={ true } />
            <VictoryBar data={ data } x="title" y="acessos" />
          </VictoryChart>
        </div>
      </Container>
    )
  } else if (!data.length) {
    return <NoStatistics><p>Nenhuma estatística a exibir ):</p></NoStatistics>;
  } else return null;
}

export default AccountStatistics;
