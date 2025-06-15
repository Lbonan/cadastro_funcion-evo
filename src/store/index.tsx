import { configureStore } from '@reduxjs/toolkit'
import funcionariosReducers from './reducers/funcionarios'
import filroReducers from './reducers/filtro'

const store = configureStore({
  reducer: {
    funcionarios: funcionariosReducers,
    filtro: filroReducers
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
