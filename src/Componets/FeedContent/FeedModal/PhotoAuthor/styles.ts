import styled from 'styled-components';

export const Container = styled.div`
  button {
    font-size: .875rem;

    background-color: #ddd;
    padding: 4px 8px;
    border: 1px solid transparent;
    border-radius: 2px;

    opacity: 0.5;
    transition: .1s;

    &.disabled {
      cursor: not-allowed;
    }

    &:hover, &:focus {
      outline: none;
      box-shadow: 
        0px 0px 0px 3px ${(props) => props.theme.colors.secondary},
        0px 0px 0px 4px ${(props) => props.theme.colors.primary};
    }
  }

  a {
    color: ${(props) => props.theme.colors.bold_grey};
  }
`;

export const Modal = styled.div` 
  position: absolute;
  top: -6px;
  left: -20px;

  width: 299px;
  border-radius: 3px;
  padding: 20px 40px;
  box-shadow: rgba(0,0,0,0.16) 0px 1px 4px;
  background-color: #fff;
  opacity: 0;
  pointer-events: none;
  z-index: 9;

  transition: opacity .4s;

  &.open {
    opacity: 1;
    pointer-events: all;
  }

  @media screen and (max-width: 930px) {
    text-align: center;
    left: 50%;
    transform: translateX(-50%);

    width: 256px;
  }
`;

export const ButtonsWrapper = styled.div` 
  display: flex;
  justify-content: space-between;
  margin-top: 10px;

  button {
    padding: 8px 16px;
  }

  button.confirm {
    background-color: ${(props) => props.theme.colors.primary};
    opacity: 0.7;
  }

  button.disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;