import Contato from '../../components/Contatos'

import { MainContainer } from '../../styles'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const AgendaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)

  return (
    <MainContainer>
      <ul>
        {itens.map((c) => (
          <li key={c.nome}>
            <Contato nome={c.nome} email={c.email} tel={c.tel} id={c.id} />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default AgendaDeContatos
