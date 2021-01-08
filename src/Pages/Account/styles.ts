import styled from 'styled-components';

export const Container = styled.div`
  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: calc(100vh - 365px);
  }

  @media screen and (max-width: 1024px) {
    > div {
      margin: 32px 0;
      min-height: calc(100vh - 273px);
    }
  }

  @media screen and (max-width: 500px) {
    .loading {
      transform: translate(-50%, -30%);
    }
  }

  @media screen and (min-width: 1050px) {
    .loading {
      left: 46.5%;
    }
  }
`;

export const AccountHeader = styled.nav` 
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 80px;
  margin: 16px 0 32px 0;

  @media screen and (max-width: 750px) {
    flex-direction: column;
    align-items: flex-start;
    height: auto;
  }

  ul {
    display: flex;
  }

  li + li {
    margin-left: 16px;
  }

  a {
    display: flex;
    padding: 6px;
    border-radius: 3px;
    background-color: ${(props) => props.theme.colors.grey};
    transition: .2s;

    &.disabled {
      cursor: not-allowed;
    }

    &.activedPage {
      background-color: ${(props) => props.theme.colors.secondary};
      box-shadow: 0 0 0 1px ${(props) => props.theme.colors.primary}, 0 0 0 4px ${(props) => props.theme.colors.tertiary};

      path, rect {
        fill: ${(props) => props.theme.colors.primary};
      }

      &:hover, &:focus {
        outline: none;
        background-color: ${(props) => props.theme.colors.secondary};
        box-shadow: 0 0 0 1px ${(props) => props.theme.colors.primary}, 0 0 0 4px ${(props) => props.theme.colors.tertiary};
      }
    }

    &:hover, &:focus {
      outline: none;
      background-color: ${(props) => props.theme.colors.secondary};
      box-shadow: 0 0 0 1px ${(props) => props.theme.colors.primary_text}, 0 0 0 4px ${(props) => props.theme.colors.grey};
    }
  }
`;