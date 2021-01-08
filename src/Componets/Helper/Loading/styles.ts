import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: calc(50% - 80px);
  left: 45%;
  
  display: flex;
  align-items: center;

  min-height: calc(100% - 160px);
  padding-top: 64px;

  transform: translate(-50%, -50%);

  @media screen and (max-width: 1024px) {
    transform: translate(-30%, -50%);
  }

  @media screen and (max-width: 750px) {
    left: 40%;  
  }

  @media screen and (max-width: 414px) {
    left: 39%;  
  }

  @media screen and (max-width: 375px) {
    left: 37%;  
  }

  @media screen and (max-width: 320px) {
    left: 35%;  
  }
`;

export const LoadingWrapper = styled.div`
  position: fixed; 
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: rgb(238, 238, 238, 0.5);
`;