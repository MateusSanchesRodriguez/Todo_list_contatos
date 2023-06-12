import styled, { createGlobalStyle } from 'styled-components'
import InputMask from 'react-input-mask'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  list-style:none;
}
`

export const TituloHome = styled.h1`
  text-align: center;
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export const MainContainer = styled.main`
  padding: 0 40px;
  height: 95vh;
  overflow-y: scroll;
`
export const Titulo = styled.h2`
  display: block;
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 18px;
  font-weight: bold;
`

export const Campo = styled.input`
  padding: 8px;
  background-color: #fff;
  border-radius: 8px;
  font-weight: bold;
  color: #666666;
  border-color: #666666;
  width: 100%;
  margin-bottom: 10px;
  text-align: center;
`

export const InputMaskStyled = styled(InputMask)`
  padding: 8px;
  background-color: #fff;
  border-radius: 8px;
  font-weight: bold;
  color: #666666;
  border-color: #666666;
  width: 100%;
  text-align: center;
`

export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: #a51eff;
  border-radius: 8px;
  margin-right: 8px;
`

export const BotaoSalvar = styled(Botao)`
  margin-top: 10px;
  font-size: 14px;
  background-color: ${variaveis.verde};
`

export const BotaoVoltar = styled(Botao)`
  margin-top: 20px;
  margin-left: 20px;
  font-size: 15px;
`

export default EstiloGlobal
