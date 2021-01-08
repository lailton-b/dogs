import styled from 'styled-components';

export const Container = styled.header`
  position: fixed;
  width: 100%;

  background-color: #FFF;
  box-shadow: 0 1px 1px rgba(0,0,0,.1);
  z-index: 10;

  @media screen and (max-width: 414px) {
    padding: 0 10px;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;

  .user {
    display: flex;
    align-items: center;
  }

  svg {
    position: relative;
    top: -2px;

    margin-left: 7px;
  }
`;