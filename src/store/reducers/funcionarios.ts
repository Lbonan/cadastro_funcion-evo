import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import FuncionariosClass from '../../models/FuncionariosClass'

type FuncionarioState = {
  itens: FuncionariosClass[]
}

const initialState: FuncionarioState = {
  itens: []
}

const funcionarioSlice = createSlice({
  name: 'funcionarios',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (funcionario) => funcionario.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<FuncionariosClass>) => {
      const indexDoFunc = state.itens.findIndex(
        (e) => e.id === action.payload.id
      )

      if (indexDoFunc >= 0) {
        state.itens[indexDoFunc] = action.payload
      }
    },
    cadastrar: (
      state,
      action: PayloadAction<Omit<FuncionariosClass, 'id'>>
    ) => {
      const ultimoFuncionario = state.itens[state.itens.length - 1]

      const novoFuncionario = {
        ...action.payload,
        id: ultimoFuncionario ? ultimoFuncionario.id + 1 : 1
      }

      state.itens.push(novoFuncionario)
    }
  }
})

export const { remover, editar, cadastrar } = funcionarioSlice.actions
export default funcionarioSlice.reducer
