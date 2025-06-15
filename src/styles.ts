import { Link } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
  corPrimaria: ' #0A62A9',
  corSecundaria: '#053155',
  verdeClaro: '#53D900',
  amarelo: '#ffd32a',
  vermelho: '#ff3838'
}

export const GlobalCss = createGlobalStyle`
 *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
  list-style: none;


  body{
    background-color: ${colors.corPrimaria};
  }
}

.container {
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  margin-top: 30px;

   @media (max-width: 764px) {
   max-width: 80%;
  }
}

/* styles/toast.css */
.custom-toast {
  padding: 30px;
  background-color: ${colors.corSecundaria};
  color: ${colors.verdeClaro};
  font-weight: bold;
  border-left: 5px solid ${colors.verdeClaro};
}


`

export const MainContainer = styled.main`
  height: 80vh;
  overflow-y: scroll;
  padding: 20px 40px;
  border-radius: 8px;
  background-color: #fff;
`

export const Button = styled.button`
  font-size: 12px;
  font-weight: bold;
  padding: 8px 12px;
  background-color: ${colors.amarelo};
  color: #fff;
  box-shadow: 0px 0px 8px #c1c1c1;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  margin-left: 16px;
  transition: 0.3s ease, 0.3s ease, 0.2s ease;

  &:hover {
    background-color: transparent;
    border: 1px solid ${colors.amarelo};
    color: ${colors.amarelo};
    transform: scale(1);
  }

  @media (max-width: 764px) {
    margin-left: 0px;
  }
`

export const ButtonSave = styled(Button)`
  background-color: ${colors.verdeClaro};

  margin-left: 8px;

  &:hover {
    border: 1px solid ${colors.verdeClaro};
    color: ${colors.verdeClaro};
    background: #fff;
  }
`

export const ButtonRemove = styled(Button)`
  background-color: ${colors.vermelho};
  margin-left: 8px;

  &:hover {
    border: 1px solid ${colors.vermelho};
    color: ${colors.vermelho};
  }
`
export const ButtonLink = styled(Link)`
  font-size: 12px;
  font-weight: bold;
  padding: 8px 12px;
  background-color: ${colors.verdeClaro};
  color: #fff;
  border: none;
  cursor: pointer;
  text-decoration: none;
  border-radius: 8px;
  margin-left: 8px;
  transition: 0.3s ease, 0.3s ease, 0.2s ease;

  &:hover {
    background-color: transparent;
    border: 1px solid ${colors.verdeClaro};
    color: ${colors.verdeClaro};
    transform: scale(1);
  }

  @media (max-width: 374px) {
    display: block;
    padding: 4px 8px;
    margin-left: 0;
    width: 60%;
    margin-bottom: 16px;
  }
`
