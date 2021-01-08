import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  height: 100%;

  &.skeleton {
    padding-bottom: 100%;
  }
`;

export const Skeleton = styled.div`
  grid-area: 1/1;
  padding-bottom: 100%;

  background-size: 200%;
  background-color: #eee;
  background-image: linear-gradient(90deg, #eee 0px, #fff 50%, #eee 100%);

  animation: skeleton 2s infinite linear;

  @keyframes skeleton {
    0% {
      background-position: 0px;
    }
    100% {
      background-position: 200%;
    }
  }
`;

export const Image = styled.img`
  grid-area: 1/1;
  display: block;

  max-width: 100%;
  opacity: 0;
`;
