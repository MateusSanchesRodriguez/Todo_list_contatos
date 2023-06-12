import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { BotaoSalvar, MainContainer, Titulo } from '../../styles'
import { Campo, InputMaskStyled } from '../../styles'
import { Form } from './styled'
import Contatos from '../../models/Contatos'
import { cadastrar } from '../../store/reducers/contatos'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [tel, setTel] = useState('')

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        nome,
        email,
        tel
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Titulo>Novo Contato</Titulo>
      <Form onSubmit={cadastrarContato}>
        <Campo
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          type="text"
          placeholder="Nome Completo"
        />
        <Campo
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
          type="email"
          placeholder="Email"
        />
        <InputMaskStyled
          className="campo"
          value={tel}
          onChange={(evento) => setTel(evento.target.value)}
          mask="(99) 99999-9999"
          type="tel"
          placeholder="Telefone"
        />
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </Form>
    </MainContainer>
  )
}

export default Formulario
