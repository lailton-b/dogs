import styled from 'styled-components';

export const Container = styled.button`
  font-size: 16px;

  min-width: 128px;
  padding: 12.8px 19.2px;
  border: none;
  border-radius: 5px;

  color: ${(props) => props.theme.colors.secondary_text};
  background-color: ${(props) => props.theme.colors.primary};

  transition: .1s box-shadow;

  &.disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:hover, &:focus {
    outline: none;

    box-shadow: 
      0px 0px 0px 3px ${(props) => props.theme.colors.secondary},
      0px 0px 0px 4px ${(props) => props.theme.colors.primary};
  }
`;
