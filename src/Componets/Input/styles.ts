import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;

  label {
    padding-bottom: 8px;
  }

  input {
    height: 46px;

    border: none;
    border-radius: 5px;
    padding: 12.8px;

    background-color: ${(props) => props.theme.colors.grey};

    transition: .1s box-shadow, .1s background-color;
  }

  input:hover, input:focus {
    outline: none;

    background-color: ${(props) => props.theme.colors.secondary};
    box-shadow: 
      0px 0px 0px 1px ${(props) => props.theme.colors.primary},
      0px 0px 0px 4px ${(props) => props.theme.colors.tertiary};
  }
`;