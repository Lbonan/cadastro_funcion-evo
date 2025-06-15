import { HeaderContainer } from './style'
import logo from '../../assets/images/Logotipo_EvoSolar.png'

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <h1>
          <img src={logo} alt="Evo Solar" />
        </h1>
        <p>Teste Prático</p>
      </HeaderContainer>
    </>
  )
}

export default Header
