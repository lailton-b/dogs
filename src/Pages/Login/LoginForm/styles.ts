import styled from 'styled-components';

export const Container = styled.div`
  > a {
    display: inline-block;
    color: ${(props) => props.theme.colors.bold_grey};

    margin-top: 27px;
    padding: 5px 0;

    &:after {
      content: "";
      display: block;

      width: inherit;
      height: 2px;
      background-color: ${(props) => props.theme.colors.bold_grey};
    }
  }
`;

export const SigninWrapper = styled.div` 
  margin-top: 64px;

  h2 {
    position: relative;
    font-size: 2rem;
  }

  h2:after {
    position: absolute;
    bottom: 0px;

    content: "";
    display: block;

    width: 50px;
    height: 9px;
    background-color: #DDD;
    border-radius: 5px;
  }

  p {
    margin: 32px 0;
  }

  a {
    font-size: 16px;

    min-width: 128px;
    padding: 12.8px 19.2px;
    border: none;
    border-radius: 5px;

    color: ${(props) => props.theme.colors.secondary_text};
    background-color: ${(props) => props.theme.colors.primary};

    transition: .1s box-shadow;

    &:hover, &:focus {
      outline: none;

      box-shadow: 
        0px 0px 0px 3px ${(props) => props.theme.colors.secondary},
        0px 0px 0px 4px ${(props) => props.theme.colors.primary};
    }
  }
`;