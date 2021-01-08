import React from 'react';
import { useUserContext } from '../../../UserContext';

import { ReactComponent as Views } from '../../../Assets/visualizacao-black.svg';
import { ReactComponent as Dogs } from '../../../Assets/dogs.svg';
import Title from '../../../Componets/Title';
import Loading from '../../../Componets/Helper/Loading';
import PhotoAuthor from '../../../Componets/FeedContent/FeedModal/PhotoAuthor';
import PhotoSendComment from '../../../Componets/FeedContent/FeedModal/PhotoSendComment';
import Head from '../../../Componets/Helper/Head';

import { 
  BottomInfo, 
  CommentsWrapper, 
  Image,
  Infos, 
  InfoWrapper, 
  LoadingWrapper, 
  NoComments, 
  TopInfo, 
  Warning 
} from '../../../Componets/FeedContent/FeedModal/styles';

interface IPhotoProps {
  photo: IPhoto;
  comments: IComment[];
  loading: boolean;
  error: string | null;
  photoId: number;
  setComments: React.Dispatch<React.SetStateAction<IComment[]>>;
}

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

const PhotoContent: React.FC<IPhotoProps> = ({ photoId, photo, comments, error, loading, setComments }) => {
  const commentsEl = React.useRef<HTMLUListElement>(null);
  const { user } = useUserContext();

  /* Comments auto croll */
  React.useLayoutEffect(() => {
    if (commentsEl.current !== null) {
      const height = commentsEl.current.scrollHeight;
      commentsEl.current.scroll(0, height);
    }
  })

  if (loading) return <LoadingWrapper className="loadingWrapper"><Loading /></LoadingWrapper>;
  if (error) return (
    <Warning className="warning">
      <Head title="Foto" content="Foto dogs." />
      <h3>Oops, foto não encontrada ):</h3>
    </Warning>
  )
  if (photo.title && photo.title.length) return (
    <>
      <Head title={ photo.title } content="Foto dogs." />

      <Image className="image">
        <img src={ photo.src } alt={ photo.title } />
      </Image>

      <Infos className="infos">
        <InfoWrapper>
          <TopInfo>
            <PhotoAuthor author={ photo.author } photoId={ photoId } />
            <span><Views /> { photo.acessos }</span>
          </TopInfo>
          
          <Title>{ photo.title }</Title>

          <BottomInfo>
            <span>{ photo.peso } kg</span>
            <span>{ photo.idade } anos</span>
          </BottomInfo>
        </InfoWrapper>

        <CommentsWrapper ref={ commentsEl }>
          { comments.length ? (
            comments.map((comment) => (
              <li key={ comment.comment_ID }>
                <b>{ comment.comment_author }:</b>
                <span>{ comment.comment_content }</span>
              </li>
            )) 
          ) : <NoComments>Seja o primeiro a comentar <Dogs /></NoComments>
          }
        </CommentsWrapper>

        { user.logged && <PhotoSendComment photoId={ photoId } comments={ comments } setComments={ setComments } /> }
      </Infos>
    </>
  )
  else return null;
}

export default PhotoContent;
