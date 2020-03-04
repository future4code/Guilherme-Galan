import React from 'react';
import styled from 'styled-components'
import CadastroUsuario from './components/CadastroUsuario';
import ListaDeUsuarios from './components/ListaDeUsuarios';
import DetalhesUsuario from './components/DetalhesUsuario';

const Container = styled.div`
  text-align:center;
`

const BotaoMostrarOuVoltar = styled.button `
        position:fixed;
        bottom:50%;
        left:43%;
        width: 300px;
        padding: 15px 20px;
        font-size:20px;
        font-weight:bold;
`

class App extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        mostraLista:false
      }
    }

    mostrarLista = () =>{
      this.setState({mostraLista : !this.state.mostraLista})
    }

    render(){
      const textoDoBotao = this.state.mostraLista ? 'Voltar' : 'Lista de Usuários'
      const renderTela = this.state.mostraLista ? <ListaDeUsuarios /> : <CadastroUsuario />

      return(
        <Container>
          <BotaoMostrarOuVoltar className="btn btn-outline-dark" onClick={this.mostrarLista}>
            {textoDoBotao}
          </BotaoMostrarOuVoltar>
            {renderTela}          
        </Container>
      )
    }
}

export default App;