// rafce
import './Accordion.css'
import React, { useState } from 'react'
import { Card } from 'primereact/card'

const Accordion = ({itens}) => {

  const [indiceAtivo, setIndiceAtivo] = useState(null)

  const itemClicado = (indice) => {
    //atualizar o indiceAtivo atribuindo-lhe o valor de indice
    setIndiceAtivo(indice)
  }

  const expressaoJSX = itens.map((item, indice) => (
    <Card id="accordion" key={indice} className='border-1 border-400'>
      <div onClick={() => itemClicado(indice)}>
        <i className='pi pi-angle-down'></i>
        <h5 className='inline ml-3'>{item.titulo}</h5>
      </div>
      <p>
        {item.conteudo}
      </p>  
    </Card>
  ))
  return (
    <div>
      <p>{indiceAtivo}</p>
      {
        expressaoJSX
      }
    </div>
  )
}

export default Accordion