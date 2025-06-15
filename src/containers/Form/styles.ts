import styled from 'styled-components'
import { colors } from '../../styles'
import { Link } from 'react-router-dom'

export const FormContainer = styled.div`
  color: #fff;
  max-width: 360px;

  h2 {
    margin-top: 40px;
    margin-bottom: 40px;
  }
`

export const Campo = styled.div`
  label {
    font-size: 14px;
    margin-bottom: 8px;
    margin-top: 12px;
    display: block;

    font-weight: bold;
  }

  input,
  select {
    background-color: #fff;
    border: none;
    border-radius: 8px;
    height: 32px;
    padding: 0 8px;
    width: 100%;

    &.error {
      border: 1px solid red;
      background-color: rgba(253, 108, 108, 0.8);
    }
  }
`

export const ButtonContainer = styled.div`
  margin-top: 18px;
`

export const BackButton = styled(Link)`
  font-size: 12px;
  font-weight: bold;

  padding: 8px 12px;
  background-color: ${colors.vermelho};
  color: #fff;
  border: none;
  cursor: pointer;
  text-decoration: none;
  border-radius: 8px;
  margin-left: 8px;
  transition: 0.3s ease, 0.3s ease, 0.2s ease;

  &:hover {
    background-color: transparent;
    border: 1px solid ${colors.vermelho};
    color: ${colors.vermelho};
    transform: scale(1);
  }
`
