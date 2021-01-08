import styled from 'styled-components';

export const Container = styled.div`
  display: grid !important;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 100px minmax(auto, 372px);
  grid-gap: 30px;

  p {
    font-size: 2rem;
    display: flex;
    align-items: center;
    grid-column: span 2;

    padding: 32px;
    box-shadow: 0 10px 20px rgba(0,0,0,.1);
  }

  > div {
    box-shadow: 0 10px 20px rgba(0,0,0,.1);
  }

  .pieContainer {
    padding: 32px;
  }

  @media screen and (max-width: 650px) {
    grid-template-columns: 1fr;
    grid-template-rows: 100px repeat(2, minmax(auto, 372px));

    p {
      grid-column: initial;
    }
  }
`;

export const NoStatistics = styled.div` 
  display: flex;
  justify-content: flex-end !important;
  align-items: center;
  height: 100%;

  p {
    margin: 70px 0 60px;
    color: ${(props) => props.theme.colors.bold_grey};
  }
`;