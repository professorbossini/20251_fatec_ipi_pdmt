// rafce
import React from 'react'
import Accordion from './components/Accordion'


const itens = [
  {
    titulo: 'Java',
    conteudo: 'Linguagem compilada e interpretada.'
  },
  {
    titulo: 'Python',
    conteudo: 'Linguagem interpretada e dinamicamente tipada.'
  },
  {
    titulo: 'Javascript',
    conteudo: 'Interpretada. Executa do lado do cliente e do lado do servidor.'
  }
]

const App = () => {
  return (
    <div>
      {/* passar o vetor de itens via props. nome do props: itens */}
      <Accordion itens={itens} />
    </div>
  )
}

export default App