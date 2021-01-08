import styled from 'styled-components';
import ViewsIcon from '../../../Assets/visualizacao.svg';

export const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px;
  margin-top: 15px;

  @media screen and (max-width: 540px) {
    grid-gap: 5px;
    margin-top: 5px;
  }

  &:nth-child(odd) li:nth-child(2) {
    grid-column: 2 / 4;
    grid-row: 1 / 3;
  }

  &:nth-child(even) li:nth-child(1) {
    grid-column: 1 / 3;
    grid-row: 1 / 3;
  }

  li {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    background-color: #171717;
    border-radius: 3px;

    div:last-child {
      display: flex;
    }
  }

  li img {
    display: block;
    width: 100%;
    border-radius: 3px;
  }
`;

export const Views = styled.div` 
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.3);

  opacity: 0;
  transition: opacity .2s;

  &:hover {
    opacity: 1;
  }

  span {
    color: ${(props) => props.theme.colors.secondary};
  }

  span:before {
    content: "";
    display: inline-block;

    width: 16px;
    height: 10px;
    margin-right: 5px;

    background-image: url(${ ViewsIcon });
    background-repeat: no-repeat;
  }
`;