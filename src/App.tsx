import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import EstiloGlobal, { Container, TituloHome } from './styles'
import store from './store'
import Cadastro from './pages/Cadastro'
import Home from './pages/Home'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <TituloHome>Lista de Contatos</TituloHome>
        <Home />
      </>
    )
  },
  {
    path: '/novo',
    element: (
      <Container>
        <Cadastro />
      </Container>
    )
  }
])

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <RouterProvider router={rotas} />
    </Provider>
  )
}

export default App
