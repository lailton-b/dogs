import React from 'react';
import { Container } from './styles';

const Layout: React.FC = ({ children }) =>  (
  <Container className="container">
    { children }
  </Container>
)

export default Layout
