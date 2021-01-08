import React from 'react'
import { useParams } from 'react-router-dom';
import { PHOTO_GET } from '../../Api';

import Layout from '../../Componets/Layout';
import useFetch from '../../hooks/useFetch';
import PhotoContent from './PhotoContent/PhotoContent';

import { Container } from './styles';

interface IComment {
  comment_ID: string;
  comment_author: string;
  comment_content: string;
  user_id: string;
}

interface IPhoto {
  acessos: number
  author: string
  id: number
  idade: string
  peso: string
  src: string
  title: string
  total_comments: string
}

const Photo: React.FC = () => {
  const { slug } : { slug: string } = useParams();

  const { loading, error, request } = useFetch();
  const [ photo, setPhoto ] = React.useState<IPhoto>({} as IPhoto);
  const [ comments, setComments ] = React.useState<IComment[]>([]);

  /* useEffect - get comments */
  React.useEffect(() => {
    async function photoFetch() {
      if (slug !== null) {
        const { url, options } = PHOTO_GET(`/${slug}`);
        const { json } = await request(url, options);
        if (json !== null) {
          setPhoto(json.photo);
          setComments(json.comments);
        }
      }
    }

    photoFetch();
  }, [request, slug]);

  return (
    <Layout>
      <Container>
        <PhotoContent 
          photoId={ Number(slug) }
          comments={ comments }
          setComments={ setComments }
          error={ error }
          loading={ loading }
          photo={ photo }
        />
      </Container>
    </Layout>
  )
}

export default Photo;
