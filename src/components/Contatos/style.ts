import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import { Botao } from '../../styles'

export const Contatos = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
`

export const Container = styled.div`
  display: block;
  margin-bottom: 10px;
`
export const Nome = styled.input`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
  width: 40vh;
  border: none;
  color: black;
`

export const Email = styled.input`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
  width: 40vh;
  border: none;
  color: black;
`

export const Tel = styled.input`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
  width: 40vh;
  border: none;
  color: black;
`
export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 6px;
  margin-top: 10px;
`
export const BotaoRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
