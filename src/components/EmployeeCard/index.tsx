import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import FuncionariosClass from '../../models/FuncionariosClass'

import { editar, remover } from '../../store/reducers/funcionarios'

import * as S from './styles'
import { Button, ButtonRemove, ButtonSave } from '../../styles'

type Props = FuncionariosClass

const EmployeeCard = ({
  nome: nomeOriginal,
  email: emailOriginal,
  telefone: telefoneOriginal,
  cidade: cidadeOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [cidade, setCidade] = useState('')

  useEffect(() => {
    if (nomeOriginal.length > 0) {
      setNome(nomeOriginal)
    }
  }, [nomeOriginal])

  useEffect(() => {
    if (emailOriginal.length > 0) {
      setEmail(emailOriginal)
    }
  }, [emailOriginal])

  useEffect(() => {
    if (telefoneOriginal.length > 0) {
      setTelefone(telefoneOriginal)
    }
  }, [telefoneOriginal])

  useEffect(() => {
    if (cidadeOriginal.length > 0) {
      setCidade(cidadeOriginal)
    }
  }, [cidadeOriginal])

  function cancelarEdicao() {
    setIsEditing(false)
    setNome(nomeOriginal)
    setEmail(emailOriginal)
    setTelefone(telefoneOriginal)
  }

  return (
    <S.Card>
      {isEditing && (
        <small>
          <b>Editando...</b>{' '}
        </small>
      )}

      <S.Titulo
        disabled={!isEditing}
        value={nome}
        onChange={(ev) => setNome(ev.target.value)}
      ></S.Titulo>
      <S.Email
        disabled={!isEditing}
        value={email}
        onChange={(ev) => setEmail(ev.target.value)}
      ></S.Email>
      <S.Cidade
        disabled={!isEditing}
        value={cidade}
        onChange={(ev) => setCidade(ev.target.value)}
      ></S.Cidade>
      <S.Telefone
        disabled={!isEditing}
        value={telefone}
        onChange={(ev) => setTelefone(ev.target.value)}
      ></S.Telefone>

      <S.ActionBar>
        {isEditing ? (
          <>
            <ButtonSave
              onClick={() => {
                dispatch(
                  editar({
                    nome,
                    email,
                    telefone,
                    cidade,
                    id
                  })
                )
                setIsEditing(false)
              }}
            >
              Salvar
            </ButtonSave>

            <ButtonRemove onClick={cancelarEdicao}>Cancelar</ButtonRemove>
          </>
        ) : (
          <>
            <Button onClick={() => setIsEditing(true)}>Editar</Button>
            <ButtonRemove onClick={() => dispatch(remover(id))}>
              Remover
            </ButtonRemove>
          </>
        )}
      </S.ActionBar>
    </S.Card>
  )
}

export default EmployeeCard
