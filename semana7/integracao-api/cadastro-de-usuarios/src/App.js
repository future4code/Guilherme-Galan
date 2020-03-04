import React from 'react';
import './App.css';
import styled from 'styled-components'
import CadastroUsuario from './components/CadastroUsuario';
import ListaDeUsuarios from './components/ListaDeUsuarios';

const Container = styled.div`
  text-align:center;
  

`

const BotaoMostrarOuVoltar = styled.button `
        position:fixed;
        bottom:50%;
        left:45%;
        width: 300px;
        padding: 15px 20px;
        border: 1px solid #eee;
        border-radius: 6px;
        background-color: #FCC302;
        font-size: 18px;    

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
      const textoDoBotao = this.state.mostraLista ? 'Voltar' : 'Mostrar Lista de Usuários'
      const renderTela = this.state.mostraLista ? <ListaDeUsuarios /> : <CadastroUsuario />

      return(
        <Container>
          <BotaoMostrarOuVoltar onClick={this.mostrarLista}>
            {textoDoBotao}
          </BotaoMostrarOuVoltar>
            {renderTela}
        </Container>
      )
    }
}

export default App;
