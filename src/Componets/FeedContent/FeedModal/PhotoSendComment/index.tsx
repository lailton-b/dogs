import React from 'react';
import { COMMENT_POST } from '../../../../Api';
import useFetch from '../../../../hooks/useFetch';

import { ReactComponent as Send } from '../../../../Assets/enviar.svg';

import { Container } from './styles';

interface IComment {
  comment_ID: string;
  comment_author: string;
  comment_content: string;
  user_id: string;
}

interface IPhotoComments {
  photoId: null | number;
  comments: IComment[];
  setComments: React.Dispatch<React.SetStateAction<IComment[]>>;
}

const PhotoSendComment: React.FC<IPhotoComments> = ({ photoId, comments, setComments }) => {
  const { request, loading } = useFetch();
  const [ comment, setComment ] = React.useState('');

  async function handleSubmit(event: any) {
    event.preventDefault();
    const token = localStorage.getItem('@dogs:token');

    if (token && token.length && photoId && !isNaN(photoId)) {
      const { url, options } = COMMENT_POST(token, { comment }, photoId);
      const { response, json } = await request(url, options);
      
      if (response && response.ok) {
        setComments([...comments, json]);
        setComment('');
      }
    }
  }

  return (
    <Container onSubmit={ handleSubmit }>
      <textarea placeholder="Comente..." value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
      <button aria-label="Enviar" className={ loading ? 'disabled' : '' }>
        <Send />
      </button>
    </Container>
  )
}

export default PhotoSendComment
