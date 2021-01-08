import React from 'react';
import { Container, Skeleton, Image } from './ImageSkeletonStyle';


const ImageSkeleton: React.FC<{ src: string, alt: string }> = ({ src, alt }) => {
  const [skeleton, setSkeleton] = React.useState(true);

  function handleLoad(e: any) {
    setSkeleton(false);
    e.target.style.opacity = 1;
  }

  return (
    <Container className={skeleton ? 'skeleton' : ''}>
      { skeleton && <Skeleton /> }
      <Image onLoad={ handleLoad } src={ src } alt={ alt } />
    </Container>
  );
};

export default ImageSkeleton;
