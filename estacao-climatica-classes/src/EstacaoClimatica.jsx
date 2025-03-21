// rcc
import React, { Component } from 'react'

export class EstacaoClimatica extends Component {

    timer = null

    state = {
        data: null
    }

    componentDidMount(){
        this.timer = setInterval(() => {
            console.log('timer executou...')
            this.setState({
                data: new Date().toLocaleTimeString()
            })
        }, 1000)
        console.log(this.timer)
    }

    componentWillUnmount(){
        clearInterval(this.timer)
    }
    render() {
        return (
            <div className="card">
                <div className="card-body">

                    <div
                        className="d-flex align-items-center border rounded mb-2"
                        style={{ height: '6rem' }}>
                        <i className={`fas fa-5x fa-${this.props.icone}`}></i>
                        {/* p.w-75.ms-3.text-center.fs-1 */}
                        <p className="w-75 ms-3 text-center fs-1">{this.props.estacao}</p>

                    </div>

                    <div>
                        <p className='text-center'>
                            {/* renderização condicional */}
                            {
                                this.props.latitude ?
                                    `Coordenadas: ${this.props.latitude},${this.props.longitude}. Data: ${this.state.data}.`
                                    :
                                    `Clique no botão para saber a sua estação climática`
                            }
                        </p>
                    </div>

                    <button
                        onClick={this.props.obterLocalizacao}
                        className='btn btn-outline-primary w-100 mt-2'>
                        Qual a minha estação?
                    </button>

                    <button
                        onClick={() => {
                            const node = document.querySelector('#app')
                            const root = createRoot(node)
                            root.unmount()
                        }}
                        className='btn btn-outline-danger w-100 mt-2'>
                        Desmontar
                    </button>

                </div>
            </div>
        )
    }
}
