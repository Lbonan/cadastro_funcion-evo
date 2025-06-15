import styled from 'styled-components'
import { colors } from '../../styles'

export const SearchContainer = styled.div`
  margin-top: 60px;
  display: flex;
  align-items: center;
  margin-bottom: 40px;

  input {
    padding: 12px;
    border-radius: 12px;
    border: none;
    margin-right: 20px;
    outline-color: ${colors.corPrimaria};
  }
`

export const Infos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
  margin-bottom: 24px;
  color: ${colors.corPrimaria};

  @media (max-width: 764px) {
    flex-direction: column;

    font-size: 14px;
  }
`
