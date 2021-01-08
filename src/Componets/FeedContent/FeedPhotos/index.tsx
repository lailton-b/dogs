import React from 'react';
import { PHOTO_GET } from '../../../Api';
import useFetch from '../../../hooks/useFetch';
import { useUserContext } from '../../../UserContext';

import Error from '../../Helper/Error/Error';
import ImageSkeleton from '../../Helper/ImageSkeleton/ImageSkeleton';
import Loading from '../../Helper/Loading';

import { Container, Views } from './styles';

interface IFeedPhotos {
  filter: string;
  setPhotoId: React.Dispatch<React.SetStateAction<number | null>>;
  setInfiniteScroll: React.Dispatch<React.SetStateAction<boolean>>
}

interface IData {
  acessos: string,
  author: string,
  date: string,
  id: number,
  idade: string,
  peso: string,
  src: string,
  title: string,
  total_comments: string,
}

const FeedPhotos: React.FC<IFeedPhotos> = ({ filter, setPhotoId, setInfiniteScroll }) => {
  const { error, loading, request } = useFetch();
  const { user } = useUserContext();
  const [ data, setData ] = React.useState<IData[]>([]);

  React.useEffect(() => {
    /* Fetch Photos */
    async function getPhotos() {
      const { url, options } = PHOTO_GET(filter);
      const { json } = await request(url, options);
      setData(json);
      if (json.length < 6) {
        setInfiniteScroll(false);
      }
    };

    if (user.logged) getPhotos();
  }, [filter, request, setInfiniteScroll, user.logged]);

  /* Return */
  if (loading) return <Loading />
  else if (error) return <Error>{ error }</Error>
  else if (data.length) return (
    <Container>
      { data.map((photo) => (
        <li key={ photo.id } onClick={() => setPhotoId(photo.id)}>
          <Views>
            <span>{ photo.acessos }</span>
          </Views>
          <ImageSkeleton src={ photo.src } alt={ photo.title } />
        </li>
      )) }
    </Container>
  )
  else return null;
}

export default FeedPhotos
