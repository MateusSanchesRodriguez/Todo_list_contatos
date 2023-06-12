import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contatos from '../../models/Contatos'

type ContatoState = {
  itens: Contatos[]
}

const initialState: ContatoState = {
  itens: [
    {
      nome: 'Mateus Sanches Rodriguez',
      email: 'mateus@gmail.com',
      tel: '11984362735',
      id: 1
    },
    {
      nome: 'Kaio Sanches Rodriguez',
      email: 'Kaio@gmail.com',
      tel: '11884362735',
      id: 2
    },
    {
      nome: 'Osvaldo Sanches Rodriguez',
      email: 'Osvaldo@gmail.com',
      tel: '11784362735',
      id: 3
    }
  ]
}

const contatoSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((contato) => contato.id !== action.payload)
      ]
    },
    editar: (state, action: PayloadAction<Contatos>) => {
      const indexDoContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )
      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contatos, 'id'>>) => {
      const contatoJaExiste = state.itens.find(
        (contato) =>
          contato.nome.toLowerCase() === action.payload.nome.toLowerCase() &&
          contato.tel === action.payload.tel
      )

      if (contatoJaExiste) {
        alert('Já existe um Contato com esse nome e Telefone')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]
        const contatoNovo = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }
        state.itens.push(contatoNovo)
      }
    }
  }
})

export const { remover, editar, cadastrar } = contatoSlice.actions
export default contatoSlice.reducer
