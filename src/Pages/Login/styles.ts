import styled from 'styled-components';
import LoginImage from '../../Assets/login.jpg';

export const Container = styled.div`
  display: flex;
  min-height: calc(100% - 160px);
  padding-top: 64px;

  @media screen and (max-width: 750px) {
    flex-direction: column;
  }
`;

export const LeftSide = styled.div` 
  flex: 1;
  height: calc(100vh - 64px);

  background-color: #e6e6e6;
  background-image: url(${LoginImage});
  background-position: center;
  background-size: cover;

  @media screen and (max-width: 750px) {
    display: none;
  }

  @media screen and (max-width: 540px) {
    display: block;
    height: auto;
    padding-bottom: 400px;
    background-position: right;
    background-repeat: repeat;
  }
`;

export const RightSide = styled.div` 
  position: relative;
  flex: 1;
  padding: 0 15px 0 50px;

  @media screen and (max-width: 820px) {
    h1 {
      font-size: 2.8rem;
    }

    padding: 0 15px 0 30px;
  }

  @media screen and (max-width: 750px) {
    min-height: calc(100vh - 314px);
    padding: 0 15px 0 15px;
    margin: 30px 0 60px 0;
  }

  > div {
    position: relative;
    top: 50%;

    max-width: 448px;

    animation: entrie .4s ease-in-out forwards;
    transform: translateX(-50px, -50%);
    opacity: 0;

    @media screen and (max-width: 750px) {
      position: initial;
      max-width: 100%;
      transform: translateX(0px, 0px);
      opacity: 1;
      animation: none;
    }

    @keyframes entrie {
      from {
        transform: translate(-50px, -50%);
        opacity: 0;
      }
      to {
        transform: translate(0px, -50%);
        opacity: 1;
      }
    }
  }
`;