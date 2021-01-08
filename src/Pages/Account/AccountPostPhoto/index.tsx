import React from 'react';
import { PHOTO_POST } from '../../../Api';
import useFetch from '../../../hooks/useFetch';
import useForm from '../../../hooks/useForm';

import Button from '../../../Componets/Button';
import Error from '../../../Componets/Helper/Error/Error';
import Input from '../../../Componets/Input';
import Head from '../../../Componets/Helper/Head';

import { Container, PhotoPreview, FileWrapper } from './styles';
import { useHistory } from 'react-router-dom';

const AccountPostPhoto: React.FC = () => {
  const { loading, error, request } = useFetch();
  const history = useHistory();

  const name = useForm('name');
  const weight = useForm('weight');
  const age = useForm('age');

  /* Handle File */
  const [ file, setFile ] = React.useState({ preview: '', img: '' });
  const [ fileError, setFileError ] = React.useState('');

  function handleFileChange(event: any) {
    if (event.target.files[0]) {
      setFile({
        preview: URL.createObjectURL(event.target.files[0]),
        img: event.target.files[0]
      })
    }
  }

  /* Handle Submit */
  async function handleSubmit(event: any) {
    event.preventDefault();

    if (file.img) setFileError('');
    else setFileError('É necessário escolher uma foto.');

    if (name.validate() && weight.validate() && age.validate() && file.img) {
      const token = localStorage.getItem('@dogs:token');
      const formData = new FormData();
      formData.append('nome', name.value);
      formData.append('peso', weight.value);
      formData.append('idade', age.value);
      formData.append('img', file.img);
      
      if (token) {
        const { url, options } = PHOTO_POST(formData, token);
        await request(url, options);

        if (error === null) {
          history.push('/conta');
        }
      };
    }
  }

  return (
    <Container>
      <Head title="Poste sua foto" content="Poste uma foto do seu pet." />

      <div>
        <form onSubmit={ handleSubmit }>
          <Input type="text" label="Nome" id="name" {...name} autoComplete="off" />
          <Input type="number" label="Peso" id="weight" {...weight} autoComplete="off" />
          <Input type="number" label="Idade" id="age" {...age} autoComplete="off" />
          <FileWrapper>
            <input type="file" id="img" name="img" onChange={handleFileChange} />
            <Error>{ fileError }</Error>
          </FileWrapper>

          { loading 
            ? <Button loading={ true }>Enviando...</Button> 
            : <Button>Enviar</Button> 
          } 
          { error && 
            <Error>
              <br />
              Oops! Token expirado ): 
              <br />
              Por favor, reentre em sua conta.
            </Error>
          }
        </form>

        <PhotoPreview style={{ backgroundImage: `url(${ file.preview })` }} className={ file.preview ? 'file' : '' } />
      </div>
    </Container>
  )
}

export default AccountPostPhoto
