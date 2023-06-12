import styled from 'styled-components'

import { Props } from '.'

type PropsAtivo = Omit<Props, 'contador' | 'legenda'>

export const Card = styled.div<PropsAtivo>`
  padding: 8px;
  border: 2px solid ${(props) => (props.ativo ? '#a51eff' : '#a1a1a18e')};
  background-color: ${(props) => (props.ativo ? '#fff' : '#fcfcfc')};
  color: ${(props) => (props.ativo ? '#a51eff' : '#5e5e5e')};
  border-radius: 8px;
`
export const Contador = styled.span`
  font-weight: bold;
  font-size: 24px;
  display: block;
`
export const Label = styled.span`
  font-size: 14px;
`
