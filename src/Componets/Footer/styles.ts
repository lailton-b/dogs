import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 160px;

  color: ${(props) => props.theme.colors.secondary_text};
  background-color: ${(props) => props.theme.colors.primary};

  p {
    margin-top: 16px;
    color: ${(props) => props.theme.colors.secondary_text};
  }
`;
