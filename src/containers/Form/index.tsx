import { useFormik } from 'formik'
import { toast } from 'react-toastify'
import * as Yup from 'yup'
import { cadastrar } from '../../store/reducers/funcionarios'

import { useDispatch, useSelector } from 'react-redux'
import { BackButton, ButtonContainer, Campo, FormContainer } from './styles'
import { ButtonSave } from '../../styles'
import { RootReducer } from '../../store'

const Formulario = () => {
  const dispatch = useDispatch()
  const funcionarios = useSelector(
    (state: RootReducer) => state.funcionarios.itens
  )

  const form = useFormik({
    initialValues: {
      nome: '',
      email: '',
      cidade: '',
      telefone: ''
    },
    validationSchema: Yup.object({
      nome: Yup.string()
        .min(3, 'O nome deve ter no mínimo 3 caracteres')
        .required('O campo é obrigatório'),
      email: Yup.string()
        .email('E-mail inválido')
        .required('O campo é obrigatório'),
      telefone: Yup.string()
        .min(11, 'Telefone inválido')
        .required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      const funcionarioExiste = funcionarios.some(
        (f) => f.nome.toLowerCase() === values.nome.toLowerCase()
      )

      if (funcionarioExiste) {
        toast.error('Funcionário já cadastrado!')
        return
      }

      dispatch(cadastrar(values))
      toast.success(`${values.nome} cadastrado com sucesso!`, {
        className: 'custom-toast'
      })

      form.resetForm()
    }
  })

  const checkInputError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  return (
    <FormContainer>
      <div>
        <h2>Novo funcionário</h2>
      </div>
      <form onSubmit={form.handleSubmit}>
        <Campo>
          <label htmlFor="nome" id="nome">
            Nome:
          </label>
          <input
            type="text"
            id="nome"
            value={form.values.nome}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            className={checkInputError('nome') ? 'error' : ''}
          />
        </Campo>
        <Campo>
          <label htmlFor="email" id="email">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={form.values.email}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            className={checkInputError('nome') ? 'error' : ''}
          />
        </Campo>
        <Campo>
          <label htmlFor="cidade" id="cidade">
            Cidade:
          </label>
          <input
            type="text"
            id="cidade"
            value={form.values.cidade}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
        </Campo>
        <Campo>
          <label htmlFor="telefone" id="telefone">
            telefone:
          </label>
          <input
            type="tel"
            id="telefone"
            value={form.values.telefone}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
        </Campo>
        <ButtonContainer>
          <ButtonSave type="submit" title="Clique aqui para salvar">
            Salvar
          </ButtonSave>
          <BackButton to="/">Voltar</BackButton>
        </ButtonContainer>
      </form>
    </FormContainer>
  )
}

export default Formulario
