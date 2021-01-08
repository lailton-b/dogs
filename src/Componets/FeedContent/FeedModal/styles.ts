import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);

  opacity: 0;
  pointer-events: none;
  transition: opacity .2s;
  z-index: 20;

  &.open {
    opacity: 1;
    pointer-events: all;
  }
`;

export const LoadingWrapper = styled.div` 
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  z-index: 20;
`;

export const Modal = styled.div`
  display: flex;
  margin: 0 15px;
  opacity: 0;

  @media screen and (max-width: 930px) {
    flex-direction: column;
    justify-content: center;
    height: 94%;
    overflow-y: auto;
  }

  &.open {
    transform: scale(1);
    animation: modal .2s .1s ease-in-out forwards;
  }

  @keyframes modal {
    from { transform: scale(0); opacity: 0; };
    to { transform: scale(1); opacity: 1; };
  }
`;

export const Image = styled.div` 
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  max-width: 576px;
  width: 576px;

  background-color: #141414;

  @media screen and (max-width: 650px) {
    width: auto;
  }

  img {
    display: block;
    width: 100%;
    max-height: 576px;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
`;

export const Infos = styled.div` 
  width: 320px;
  height: 576px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  background-color: ${(props) => props.theme.colors.secondary};

  .MxJgA {
    margin: 0 !important;
  }

  @media screen and (max-width: 930px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 100%;
  }
`;

export const TopInfo = styled.div` 
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    color: ${(props) => props.theme.colors.bold_grey};
  }
`;

export const InfoWrapper = styled.div` 
  padding: 32px 32px 0;

  @media screen and (max-width: 414px) {
    padding: 25px 25px 0;
  }
`;

export const BottomInfo = styled.div` 
  margin: 16px 0 32px;

  span {
    position: relative;
    font-weight: bold;
    font-size: 1.125rem;

    + span {
      margin-left: 32px;
    }

    &:before {
      content: "";
      position: relative;
      bottom: -2px;
      display: inline-block;

      width: 2px;
      height: 20px;
      margin-right:  8px;
      background-color: ${(props) => props.theme.colors.primary_text};
    }
  }
`;

export const CommentsWrapper = styled.ul` 
  padding: 0 32px;
  max-height: 290px;
  height: 100%;
  overflow-y: auto;

  @media screen and (max-width: 930px) {
    height: auto;
    max-height: 92px;
  }

  @media screen and (max-width: 414px) {
    padding: 0 25px;
  }


  li + li {
    margin-top: 7px;
  }

  span {
    margin-left: 5px;
    word-break: break-all;
  }
`;

export const NoComments = styled.p` 
  svg {
    margin-left: 5px;
    opacity: 0.8;
  }
`;

export const Warning = styled.div` 
  background: rgb(255, 255, 255);
  padding: 30px;
  border-radius: 5px;
  position: relative;
  top: -80px;
`;