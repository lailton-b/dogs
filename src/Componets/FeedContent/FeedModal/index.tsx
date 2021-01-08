import React from 'react';
import { PHOTO_GET } from '../../../Api';
import useFetch from '../../../hooks/useFetch';

import Title from '../../Title';
import PhotoSendComment from './PhotoSendComment';
import PhotoAuthor from './PhotoAuthor';
import Loading from '../../Helper/Loading';
import { ReactComponent as Views } from '../../../Assets/visualizacao-black.svg';
import { ReactComponent as Dogs } from '../../../Assets/dogs.svg';

import { 
  Container,
  Modal,
  Image,
  Infos,
  TopInfo,
  InfoWrapper,
  BottomInfo,
  CommentsWrapper,
  NoComments,
  Warning,
  LoadingWrapper
} from './styles';
import { Link } from 'react-router-dom';


interface IFeedModal {
  photoId: null | number;
  setPhotoId: React.Dispatch<React.SetStateAction<number | null>>;
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

const FeedModal:React.FC<IFeedModal> = ({ photoId, setPhotoId }) => {
  const { loading, error, request } = useFetch();
  const [ photo, setPhoto ] = React.useState<IPhoto>({} as IPhoto);
  const [ comments, setComments ] = React.useState<IComment[]>([]);
  const commentsEl = React.useRef<HTMLUListElement>(null);

  /* Comments auto croll */
  React.useLayoutEffect(() => {
    if (commentsEl.current !== null) {
      const height = commentsEl.current.scrollHeight;
      commentsEl.current.scroll(0, height);
    }
  })

  /* Close Modal */
  function closeModal(event: any) {
    if (event.currentTarget === event.target) {
      setPhotoId(null);
    }
  }

  /* useEffect - get comments */
  React.useEffect(() => {
    async function photoFetch() {
      if (photoId !== null) {
        const { url, options } = PHOTO_GET(`/${photoId}`);
        const { json } = await request(url, options);
        if (json !== null) {
          setPhoto(json.photo);
          setComments(json.comments);
        }
      }
    }

    photoFetch();
  }, [photoId, request]);

  if (loading) return <LoadingWrapper><Loading /></LoadingWrapper>;
  if (error) return (
    <Container onClick={ closeModal } className={ photoId === null ? '' : 'open' }>
      <Warning>
        <h3>Oops, foto não encontrada ):</h3>
      </Warning>
    </Container>
  )
  if (photo.title && photo.title.length) return (
    <Container onClick={ closeModal } className={ photoId === null ? '' : 'open' }>
      <Modal className={ photoId === null ? '' : 'open' }>
        <Image>
          <img src={ photo.src } alt={ photo.title } />
        </Image>

        <Infos>
          <InfoWrapper>
            <TopInfo>
              <PhotoAuthor author={ photo.author } photoId={ photoId } setPhotoId={ setPhotoId } />
              <span><Views /> { photo.acessos }</span>
            </TopInfo>
            
            <Title>
              <Link to={`/foto/${photoId}`}>{ photo.title }</Link>
            </Title>

            <BottomInfo>
              <span>{ photo.peso } kg</span>
              <span>{ photo.idade } anos</span>
            </BottomInfo>
          </InfoWrapper>

          <CommentsWrapper ref={ commentsEl }>
            { comments.length ? (
              comments.map((comment) => (
                <li key={ comment.comment_ID }>
                  <Link to={`perfil/${comment.comment_author}`}><b>{ comment.comment_author }:</b></Link>
                  <span>{ comment.comment_content }</span>
                </li>
              )) 
            ) : <NoComments>Seja o primeiro a comentar <Dogs /></NoComments>
            }
          </CommentsWrapper>

          <PhotoSendComment photoId={ photoId } comments={ comments } setComments={ setComments } />
        </Infos>
      </Modal>
    </Container>
  )
  else return null;
}

export default FeedModal
