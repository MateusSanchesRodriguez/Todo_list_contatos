import { useNavigate } from 'react-router-dom'

import { BotaoVoltar } from '../../styles'
import * as S from './style'

const BarraLateral = () => {
  const navigate = useNavigate()

  return (
    <S.Aside>
      <BotaoVoltar onClick={() => navigate('/')}>
        Voltar a lista de Contatos
      </BotaoVoltar>
    </S.Aside>
  )
}

export default BarraLateral
