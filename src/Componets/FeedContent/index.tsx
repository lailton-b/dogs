import React from 'react'
import FeedModal from './FeedModal'
import FeedPhotos from './FeedPhotos'

import { Container, Warning } from './styles';

interface IFeedContent {
  user: number | string;
}

const FeedContent:React.FC<IFeedContent> = ({ user }) => {
  const [ photoId, setPhotoId ] = React.useState<null | number>(null);
  const [ pages, setPages ] = React.useState([1, 2]);
  const [ wait, setWait ] = React.useState(true);
  const [ infiniteScroll, setInfiniteScroll ] = React.useState(true);

  React.useEffect(() => {
    function handleScroll() {
      const scroll = window.scrollY;
      const height = (document.body.offsetHeight - window.innerHeight) * 0.88;

      if (scroll > height) {
        setPages([ ...pages,  pages.length + 1]);
        setWait(true);
      }
    }

    if (wait === true) {
      window.removeEventListener('scroll', handleScroll);

      if (infiniteScroll) {
        setTimeout(() => {
          setWait(false);
        }, 1000);
      } else {
        setWait(false);
      }
    } else if (wait === false && infiniteScroll) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [pages, wait, infiniteScroll]);

  return (
    <Container>
      <div>
        { pages.map((page, index) => (  
          <FeedPhotos 
            key={ index } 
            filter={`/?_page=${page}&_user=${user}`} 
            setPhotoId={ setPhotoId } 
            setInfiniteScroll={ setInfiniteScroll }
          />
        )) }
      </div>

      { !infiniteScroll && <Warning>Não existem mais postagens ):</Warning> }

      <FeedModal photoId={ photoId } setPhotoId={ setPhotoId } />
    </Container>
  )
}

export default FeedContent
