// rafce
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import striptags from 'striptags'
import { Button } from 'primereact/button'
import { IconField } from 'primereact/iconfield'
import { InputIcon } from 'primereact/inputicon'
import { InputText } from 'primereact/inputtext'
const Busca = () => {
  const [termoDeBusca, setTermoDeBusca] = useState('')
  const [resultados, setResultados] = useState([])

  // useEffect(() => {
  //   console.log('Causando algum efeito colateral...')
  //   return () => {
  //     console.log("Fazendo uma limpeza qualquer, ou seja, desalocando recursos")
  //   }
  // })

  useEffect(() => {
    const buscar = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          format: 'json',
          origin: '*',
          srsearch: termoDeBusca
        }
      })
      setResultados(data.query.search)
    }
    const timeoutID = setTimeout(() => {
      if(termoDeBusca)
        buscar()
    }, 1000)
    return () => {
      clearTimeout(timeoutID)
    }
  }, [termoDeBusca])

  return (
    <div>
      <IconField iconPosition='left'>
        <InputIcon className='pi pi-search'/>
        <InputText 
          placeholder='Buscar...'
          onChange={(e) => {setTermoDeBusca(e.target.value)}}
          value={termoDeBusca}/>
      </IconField>
      {
        resultados.map((resultado) =>(
          <div
            key={resultado.pageid}
            className='my-3 border border-1 border-400'>
              <div
                className='border-bottom border border-1 border-400 p-3 text-center font-bold'>
                {resultado.title}
                <span>
                  <Button 
                    icon="pi pi-send"
                    className='ml-3 p-button-rounded p-button-secondary'
                    onClick={() => window.open(`https://en.wikipedia.org?curid=${resultado.pageid}`)}/>
                </span>
              </div>
              <div
                className='p-2'>
                  {striptags(resultado.snippet)}
              </div>
          </div>
        ))
      }
    </div>
  )
}

export default Busca