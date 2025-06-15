import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 40px 18px;
  margin-bottom: 16px;
  margin-top: 18px;
  border-radius: 8px;
  white-space: nowrap;

  @media (max-width: 764px) {
    flex-direction: column;
    white-space: normal;
  }
`
export const Titulo = styled.textarea`
  resize: none;
  border: none;
  background-color: transparent;
  margin-left: 6px;

  @media (max-width: 764px) {
    display: block;
    margin-left: 0;
    margin-top: 12px;
  }
`

export const Cidade = styled.textarea`
  resize: none;
  border: none;

  background-color: transparent;
  margin-left: 18px;

  @media (max-width: 764px) {
    margin-left: 0;
  }
`

export const Email = styled.textarea`
  resize: none;
  border: none;
  background-color: transparent;

  @media (max-width: 764px) {
    margin-left: 0;
    white-space: nowrap;
  }
`
export const Telefone = styled.textarea`
  resize: none;
  border: none;
  background-color: transparent;
`
export const ActionBar = styled.div`
  background-color: #fcfcfc;
  border-left: 1px solid rgba(0, 0, 0, 0.1);

  @media (max-width: 764px) {
    display: block;
    margin-top: 6px;
    width: 100%;
    border: none;
  }
`
