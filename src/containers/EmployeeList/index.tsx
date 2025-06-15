import { useDispatch, useSelector } from 'react-redux'
import { ButtonLink, MainContainer } from '../../styles'
import { Infos, SearchContainer } from './styles'
import { RootReducer } from '../../store'
import EmployeeCard from '../../components/EmployeeCard'
import { alteraTermo } from '../../store/reducers/filtro'

const EmployeeList = () => {
  const dispatch = useDispatch()
  const { itens } = useSelector((state: RootReducer) => state.funcionarios)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const filtraNome = () => {
    return itens.filter(
      (item) =>
        item.nome.toLowerCase().search(termo.toLocaleLowerCase() || '') >= 0
    )
  }

  const funcionarios = filtraNome()

  return (
    <>
      <SearchContainer>
        <input
          type="text"
          placeholder="pesquisar"
          onChange={(ev) => dispatch(alteraTermo(ev.target.value))}
        />
        <ButtonLink to="/novo">Cadastrar Funcionário</ButtonLink>
      </SearchContainer>
      {funcionarios.length > 0 && (
        <MainContainer>
          <Infos>
            <h2>Nome: {termo} </h2>
            <h3>Funcionários cadastrados - {itens.length} </h3>
          </Infos>
          <div>
            <ul>
              {funcionarios.map((e) => (
                <li key={e.nome}>
                  <EmployeeCard
                    nome={e.nome}
                    email={e.email}
                    telefone={e.telefone}
                    cidade={e.cidade}
                    id={e.id}
                  />
                </li>
              ))}
            </ul>
          </div>
        </MainContainer>
      )}
    </>
  )
}

export default EmployeeList
