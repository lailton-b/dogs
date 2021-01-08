import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 32px;

  .warning {
    top: 0;
    text-align: center;
  }

  .image {
    max-width: 100%;
    width: 100%;
    border-radius: 5px;

    img {
      max-height: 768px;
    }
  }

  .infos {
    width: 100%;
    height: auto;
    margin-bottom: 30px;

    ul {
      height: auto;
      min-height: 50px;
    }
  }

  .loadingWrapper {
    background-color: #fff;
  }

  textarea {
    width: 100%;
  }
`;
