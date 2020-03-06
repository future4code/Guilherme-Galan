import React, { Component } from 'react';
import styled from 'styled-components';
import CriarPlayList from './components/CriarPlayList';
import ListaDePlaylists from './components/ListaDePlaylists';

const MainWrapper = styled.div`
  text-align:center;
`

const Header = styled.header`
    display:flex;
    justify-content:space-around;
    height:50px;
    background:#98FB98;
    align-items:center;    
`

const Botao = styled.button`
    position:fixed;
    top:10%;
    left:80%;
    width: 300px;
    padding: 15px 20px;
    font-size:20px;
    font-weight:bold;
`

const Titulo = styled.h3`
  margin:80px 80px;
`

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mostraLista: false,
    }
  }

  mostraLista = () => {
    this.setState({ mostraLista: !this.state.mostraLista })
  }

  render() {
    const textoBotao = this.state.mostraLista ? 'Criar Playlist' : 'Lista de Playslists'
    const renderTela = this.state.mostraLista ? <ListaDePlaylists /> : <CriarPlayList />
    const textoH3 = this.state.mostraLista ? 'Suas Playlists' : 'Crie uma Playlist'
    return (
      <MainWrapper>
        <Header>
          <h2>Spotif4 - Projeto Guilherme Galan</h2>
        </Header>
        <Titulo>{textoH3}</Titulo>
        <Botao className="btn btn-outline-dark" onClick={this.mostraLista}>{textoBotao}</Botao>
        {renderTela}
      </MainWrapper>
    )
  }
}

export default App;