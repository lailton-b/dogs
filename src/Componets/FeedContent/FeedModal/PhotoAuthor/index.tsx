import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import { PHOTO_DELETE } from '../../../../Api';
import useFetch from '../../../../hooks/useFetch';
import { useUserContext } from '../../../../UserContext';

import Error from '../../../Helper/Error/Error';

import { Container, Modal, ButtonsWrapper } from './styles';

interface IPhotoAuthor {
  author: string;
  photoId: null | number;
  setPhotoId?: React.Dispatch<React.SetStateAction<number | null>>;
}

const PhotoAuthor: React.FC<IPhotoAuthor> = ({ author, photoId, setPhotoId }) => {
  const history = useHistory();
  const { user } = useUserContext();
  const { request, loading, error } = useFetch();
  const [ modal, setModal ] = React.useState(false);
  const [ confirm, setConfirm ] = React.useState(false);

  React.useEffect(() => {
    async function deletePhoto() {
      const token = localStorage.getItem('@dogs:token');
  
      if (token && token.length && photoId && !isNaN(photoId) && confirm) {
        const { url, options } = PHOTO_DELETE(token, photoId);
        const { response } = await request(url, options);
        
        if (response && response.ok) {
          setModal(false);
          setConfirm(false);
          if (setPhotoId) setPhotoId(null);
          history.push('/');
        }
      }
    }

    if (confirm === true) {
      deletePhoto();
    }
  }, [confirm, history, photoId, setPhotoId, request]);

  return (
    <Container>
      <Modal className={ modal ? 'open deleteModal' : '' }>
        { loading ? <span>Deletando...</span> : <span>Você deseja deletar essa foto?</span>}
        <ButtonsWrapper>
          { loading 
            ? <button className="disabled" onClick={ () => setModal(false) }>Cancelar</button> 
            : <button onClick={ () => setModal(false) }>Cancelar</button> 
          }
          
          { loading
            ? <button className="confirm disabled" onClick={ () => setConfirm(true) }>Sim</button>
            : <button className="confirm" onClick={ () => setConfirm(true) }>Sim</button>
          }
        </ButtonsWrapper>
      </Modal>

      { user.username === author && loading && !error && (
        <button className="disabled">Deletando...</button>
      )}

      { user.username === author && !loading && !error && (
        <button onClick={ () => setModal(true) }>Deletar</button>
      )}

      { error && <Error>Oops, foto não existente!</Error> }

      { user.username !== author && <Link to={`/perfil/${ author }`}>@{ author }</Link> }
    </Container>
  )
}

export default PhotoAuthor;
