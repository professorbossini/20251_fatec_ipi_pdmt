// rafce
import React from 'react'
import Busca from './Busca'

class App extends React.Component {

  onBuscaRealizada = (termo) => {
    console.log(termo)
  }

  render(){
    return (
      <div className='grid justify-content-center'>
          <div className="col-12">
            <h1 className='text-center'>Exibir uma lista de...</h1>
          </div>
          <div className="col-12">
            <Busca 
              dica="Digite algo que deseja ver..."
              onBuscaRealizada={this.onBuscaRealizada}/>
          </div>
      </div>
    )
  }
}

export default App