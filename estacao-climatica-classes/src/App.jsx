import React from 'react'
import { EstacaoClimatica } from './EstacaoClimatica'

class App extends React.Component{
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     latitude: null,
  //     longitude: null,
  //     estacao: null,
  //     data: null,
  //     icone: null,
  //     mensagemDeErro: null
  //   }
  //   console.log('constructor')
  // }
  state = {
    latitude: null,
    longitude: null,
    estacao: null,
    data: null,
    icone: null,
    mensagemDeErro: null
  }

  componentDidMount(){
    console.log('componentDidMount')
    this.obterLocalizacao()
  }

  componentDidUpdate(){
    console.log('componenteDidUpdate')
  }

  componentWillUnmount(){
    console.log('componentWillUnmount')
  }

  obterEstacao = (data, latitude) => {
    const anoAtual = data.getFullYear()
    //21/06
    const d1 = new Date(anoAtual, 5, 21)
    //24/09
    const d2 = new Date(anoAtual, 8, 24)
    //22/12
    const d3 = new Date(anoAtual, 11, 22)
    //21/03
    const d4 = new Date(anoAtual, 2, 21)
    const estaNoSul = latitude < 0
    if(data >= d1 && data < d2)
      return estaNoSul ? 'Inverno' : 'Verão'
    if(data >= d2 && data < d3)
      return estaNoSul ? 'Primavera' : 'Outono'
    if (data >= d3 || data < d4)
      return estaNoSul ? 'Verão' : 'Inverno'
    return estaNoSul ? 'Outono' : 'Primavera'
  }

  icones = {
    'Primavera': 'seedling',
    'Verão': 'sun',
    'Outono': 'tree',
    'Inverno': 'snowflake'
  }

  obterLocalizacao = () => {
    navigator.geolocation.getCurrentPosition(
      (posicao) => {
        const dataAtual = new Date()
        const estacao = this.obterEstacao(dataAtual, posicao.coords.latitude)
        const icone = this.icones[estacao]
        // não faça assim, não atualiza a tela, embora atualize a variável
        // this.state.latitude = posicao.coords.latitude
        //faça assim :)
        this.setState({
          latitude: posicao.coords.latitude,
          longitude: posicao.coords.longitude,
          estacao: estacao,
          data: dataAtual.toLocaleTimeString(),
          icone: icone
        })
      },
      (erro) => {
        console.log(erro)
        this.setState({
          mensagemDeErro: 'Tente novamente mais tarde'
        })
        
      }
    )
  }
  render(){
    console.log('render')
    return(
      <div id="app" className='container mt-2'>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <EstacaoClimatica 
              icone={this.state.icone}
              estacao={this.state.estacao}
              latitude={this.state.latitude}
              longitude={this.state.longitude}
              data={this.state.data}
              mensagemDeErro={this.state.mensagemDeErro}
              obterLocalizacao={this.obterLocalizacao}/>
          </div>          
        </div>
      </div>
    )
  }
}

export default App
