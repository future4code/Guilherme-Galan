import React, { Component } from 'react';
import PokeAPI from './components/PokeAPI';
import Picsum from './components/Picsum';
import styled from 'styled-components';

const Botao = styled.button`
  position:fixed;
  bottom:95%;
  right:2%;
  width:300px;

`

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      selecionaApi: true,
    }
  }

  selecionarApi = () => {
    this.setState({selecionaApi: !this.state.selecionaApi})
  }

  render(){
    const textoDoBotao = this.state.selecionaApi ? 'Picsum' : 'PokéAPI'
    const renderApi = this.state.selecionaApi ? <PokeAPI /> : <Picsum />
    return(
      <div>
        <Botao className="btn btn-danger" onClick={this.selecionarApi}>{textoDoBotao}</Botao>
        {renderApi}
      </div>
    )
  }
  
}

export default App;
