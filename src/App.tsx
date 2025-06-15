import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import store from './store'
import Header from './components/Header'

import { GlobalCss } from './styles'
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'
import { ToastContainer } from 'react-toastify'

const rotes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/novo',
    element: <Cadastro />
  }
])

function App() {
  return (
    <Provider store={store}>
      <Header />
      <div className="container">
        <GlobalCss />
        <ToastContainer position="top-right" autoClose={4000} />

        <RouterProvider router={rotes} />
      </div>
    </Provider>
  )
}

export default App
