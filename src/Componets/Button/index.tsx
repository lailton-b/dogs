import React from 'react';
import { Container } from './styles';

interface IButtonProps {
  loading?: boolean;
}

const Button: React.FC<IButtonProps> = ({ children, loading }) => (
  <>
    { loading ? (
      <Container disabled className="disabled">
        { children }
      </Container> 
    ) : (
      <Container>
        { children }
      </Container> 
    )}
  </>
)


export default Button
