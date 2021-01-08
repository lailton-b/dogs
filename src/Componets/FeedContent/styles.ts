import styled from 'styled-components';

export const Container = styled.div`
  margin: 32px 0;
`;

export const Warning = styled.p` 
  text-align: center;
  margin: 70px 0 60px;
  color: ${(props) => props.theme.colors.bold_grey};
`;