import styled from 'styled-components';
import fileUpload from '../../../Assets/file-upload.svg';

export const Container = styled.div`
  div {
    display: flex;
  }

  form {
    flex: 1;
    margin-right: 32px;
  }

  @media screen and (max-width: 750px) {
    div {
      flex-direction: column;
    }

    form {
      margin-right: 0;
    }
  }

  input[type="file"] {
    display: block;
    color: #fff;
    outline: none;

    cursor: pointer;

    &::-webkit-file-upload-button {
      display: none;
    }

    &::before {
      content: 'Escolher foto';
      display: inline-block;

      text-shadow: 1px 1px #fff;
      font-weight: 700;
      font-size: 0.875rem;
      color: ${(props) => props.theme.colors.primary_text};

      background-color: ${(props) => props.theme.colors.grey};
      background-image: url(${ fileUpload });
      background-position-y: center;
      background-position-x: 7px;
      background-repeat: no-repeat;

      border: 1px solid transparent;
      border-radius: 3px;
      padding: 14px 16px 14px 36px;
      margin-right: 10px;

      outline: none;
      white-space: nowrap;
      -webkit-user-select: none;
      cursor: pointer;

      transition: border .1s, background-color .1s;
    }

    &:hover::before, &:focus::before {
      outline: none;

      border: 1px solid ${(props) => props.theme.colors.primary};
      background-color: ${(props) => props.theme.colors.secondary};
    }
  }

  #file-upload-button {
    background-color: #000 !important;
  }
`;

export const PhotoPreview = styled.div` 
  flex: 1;
  max-height: 383px;

  border-radius: 20px;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;

  @media screen and (max-width: 750px) {
    margin: 34px 0;
    
    &.file {
      padding-bottom: 373px;
    }
  }
`;

export const FileWrapper = styled.div` 
  margin-bottom: 20px;
`;