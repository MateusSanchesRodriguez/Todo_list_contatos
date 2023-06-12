import { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './style'

import { remover, editar } from '../../store/reducers/contatos'
import Contatos from '../../models/Contatos'
import { Botao, BotaoSalvar } from '../../styles'

type Props = Contatos

const Contato = ({
  nome: nomeOriginal,
  email: emailOriginal,
  tel: telOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [tel, setTel] = useState('')

  const inputNomeRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (nomeOriginal.length > 0) {
      setNome(nomeOriginal)
    }
    if (emailOriginal.length > 0) {
      setEmail(emailOriginal)
    }
    if (telOriginal.length > 0) {
      setTel(telOriginal)
    }
  }, [nomeOriginal, emailOriginal, telOriginal])

  useEffect(() => {
    if (estaEditando) {
      inputNomeRef.current?.focus()
    } else {
      inputNomeRef.current?.blur()
    }
  }, [estaEditando])

  function cancelarEdicao() {
    setNome(nomeOriginal)
    setEmail(emailOriginal)
    setTel(telOriginal)
    setEstaEditando(false)
  }

  return (
    <S.Contatos>
      <S.Container>
        <S.Nome
          ref={inputNomeRef}
          disabled={!estaEditando}
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
        />
      </S.Container>
      <S.Container>
        <S.Email
          disabled={!estaEditando}
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
        />
      </S.Container>
      <S.Container>
        <S.Tel
          disabled={!estaEditando}
          value={tel}
          onChange={(evento) => setTel(evento.target.value)}
        />
      </S.Container>
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    nome,
                    email,
                    tel,
                    id
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </BotaoSalvar>
            <S.BotaoRemover onClick={cancelarEdicao}>Cancelar</S.BotaoRemover>
          </>
        ) : (
          <>
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
            <S.BotaoRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Contatos>
  )
}
export default Contato
