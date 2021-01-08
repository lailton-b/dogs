import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  margin-left: 4px;

  h1 {
    position: relative;
    z-index: 2;
    font-size: 3rem;

    a {
      font-family: 'Spectral';
    }

    @media screen and (max-width: 365px) {
      font-size: 2.75rem;
    }
  }

  div {
    position: absolute;
    bottom: 17px;
    left: -4px;

    width: 24px;
    height: 25px;
    border-radius: 5px;

    background-color: ${(props) => props.theme.colors.primary};
  }
`;
