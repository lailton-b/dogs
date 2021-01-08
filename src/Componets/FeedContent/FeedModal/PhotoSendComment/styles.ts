import styled from 'styled-components';

export const Container = styled.form` 
  display: flex;
  align-items: center;
  padding: 0 15px;
  margin-top: 20px;

  textarea {
    font-size: 1rem;

    height: 54px;
    padding: 8px;

    background-color: ${(props) => props.theme.colors.grey};
    border: none;

    resize: none;
    transition: .3s;

    @media screen and (max-width: 930px) {
      width: 100%;
      margin-bottom: 10px;
    }

    &:hover, &:focus {
      outline: none;

      background-color: ${(props) => props.theme.colors.secondary};
      box-shadow: 
        0px 0px 0px 1px ${(props) => props.theme.colors.primary},
        0px 0px 0px 4px ${(props) => props.theme.colors.tertiary};
    }
  }

  button {
    height: 54px;
    padding: 0 15px;

    border: none;
    background-color: transparent;
    outline: none;

    &.disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &:hover, &:focus {
      path {
        fill: ${(props) => props.theme.colors.tertiary};
        stroke: ${(props) => props.theme.colors.primary};
      }

      g {
        animation: bark 0.6s linear infinite;
      }
    }

    @keyframes bark {
      0%, 100% { opacity: 1 }
      50% { opacity: 0}
    }
  }
`;