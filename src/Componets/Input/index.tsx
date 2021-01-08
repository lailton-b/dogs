import React from 'react';
import Error from '../Helper/Error/Error';
import { Container } from './styles';

interface IInputProps {
  autoComplete: string,
  label: string;
  id: string;
  type: string;
  value: string;
  error: string | null;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  onBlur(): void;
}

const Input: React.FC<IInputProps> = ({ 
  autoComplete,
  label, 
  id, 
  type,
  value,
  error,
  onChange,
  onBlur
}) =>  (
  <Container>
    <label htmlFor={ id }>{ label }</label>
    <input 
      type={ type }
      id={ id }
      value={ value }
      onChange={ onChange }
      onBlur={ onBlur }
      autoComplete={ autoComplete }
    />

    { error && <Error>{ error }</Error> }
  </Container>
)

export default Input
