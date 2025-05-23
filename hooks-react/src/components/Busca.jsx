// rafce
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { IconField } from 'primereact/iconfield'
import { InputIcon } from 'primereact/inputicon'
import { InputText } from 'primereact/inputtext'
const Busca = () => {
  const [termoDeBusca, setTermoDeBusca] = useState('')
  const [resultados, setResultados] = useState([])

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
      setResultados(data)
    }
    buscar()
  }, [termoDeBusca])

  return (
    <IconField iconPosition='left'>
      <InputIcon className='pi pi-search'/>
      <InputText 
        placeholder='Buscar...'
        onChange={(e) => {setTermoDeBusca(e.target.value)}}
        value={termoDeBusca}/>
    </IconField>
  )
}

export default Busca