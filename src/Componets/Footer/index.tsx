import React from 'react'
import Logo from '../../Assets/dogs-footer.svg';

import { Container } from './styles';

const Footer: React.FC = () => (
  <Container>
    <img src={ Logo } alt="Dogs" />
    <p>Dogs. Alguns direitos reservados.</p>
  </Container>
)

export default Footer;
