import React from 'react';
import { Container } from './styles';

const Error: React.FC = ({ children }) => {
  return (
    <Container>{ children }</Container>
  )
}

export default Error
