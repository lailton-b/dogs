import React from 'react';

interface ITypes {
  [ index: string ]: {
    regex: RegExp,
    message: string
  }
}

const types: ITypes = {
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'E-mail inválido'
  }
}

const useForm = (type : string) => {
  const [ value, setValue ] = React.useState<string>('');
  const [ error, setError ] = React.useState<string | null>(null);

  function validate() {
    if (!types[type] && value.length) {
      setError(null);
      return true;
    } else if (!value.length) {
      setError('Por favor, preencha o campo.')
      return false;
    } else if (types[type] && types[type].regex.test(value)) {
      setError(null);
      return true;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    }
  }

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
    if (error) validate();
  }

  function onBlur() {
    validate();
  }

  return { value, setValue, error, validate, onChange, onBlur }
}

export default useForm;
