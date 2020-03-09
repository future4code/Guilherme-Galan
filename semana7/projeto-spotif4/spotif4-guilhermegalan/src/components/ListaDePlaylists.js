import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import AdicionarMusica from './AdicionarMusica';

const ListaWrapper = styled.div`

`
const Lista = styled.ul`
    width:450px; 
    margin-left:40%;
`
const ItemLista = styled.li`
    display:flex;
    justify-content:space-between;
    font-size:20px;
`
const Button = styled.button``

const ButtonMusic = styled.button`
    position:fixed;
    top:12%;
    left:10%;
    width: 300px;
    padding: 15px 20px;
    font-size:20px;
    font-weight:bold;
`

const DetalhesWrapper = styled.div`
    margin-top:10px;
`

const Detalhes = styled.div`
    display:grid;
    grid-template-columns:1fr 1fr 1fr;
    position: relative;
    
`

const baseURL = "https://us-central1-spotif4.cloudfunctions.net/api";
const authToken = "guilherme-galan";

class ListaDePlaylists extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listaDePlaylists: [],
            todasAsMusicas: [],
            mostraDetalhes: false,
            nomePlaylist: '',
            adicionarMusica: false
        }
    }

    componentDidMount() {
        this.buscarTodasPlaylists()
    }

    buscarTodasPlaylists = () => {
        const todasAsPlaylistsPromessa = axios.get(`${baseURL}/playlists/getAllPlaylists`, {
            headers: {
                auth: authToken,
            }
        })

        todasAsPlaylistsPromessa.then(response => {
            this.setState({ listaDePlaylists: response.data.result.list })
        }).catch(error => {
            alert("Ops, Algo deu errado!")
            console.log(error.response.data.message)
            this.setState({ listaDePlaylists: [] })

        })
    }

    deletarPlaylist = (idPlaylist) => {
        const confirmar = window.confirm("Você quer mesmo deletar essa Playlist ?")
        if (confirmar) {
            const deletarPlaylistPromessa = axios.delete(`${baseURL}/playlists/deletePlaylist?playlistId=${idPlaylist}`, {
                headers: {
                    auth: authToken,
                }
            })

            deletarPlaylistPromessa.then(response => {
                alert("Playlist Deletada")
                this.buscarTodasPlaylists()
            }).catch(error => {
                alert("Algo não saiu como planejado!")
                console.log(error.response.data.message)
            })
        }
    }

    detalhesPlaylist = (playlistId, playlistName) => {
        const detalhesPlaylistPromessa = axios.get(`${baseURL}/playlists/getPlaylistMusics/${playlistId}`, {
            headers: {
                auth: authToken,
            }
        })

        detalhesPlaylistPromessa.then(response => {
            this.setState({
                todasAsMusicas: response.data.result.musics,
                mostraDetalhes: !this.state.mostraDetalhes,
                nomePlaylist: playlistName
            })
        }).catch(error => {
            alert("Erro ao obter detalhes da Playlist")
            console.log(error.response.data.message)
        })
    }
    
    adicionarMusica = () =>{
        this.setState({adicionarMusica: !this.state.adicionarMusica})

    }

    render() {
        const adicionarMusica = this.state.adicionarMusica ?  <AdicionarMusica /> : ""
        const detalhesPlaylist = this.state.mostraDetalhes ?
            <DetalhesWrapper>
                <p>Detalhes da Playlist: {this.state.nomePlaylist}</p><hr />
                <p>Músicas</p> <hr />
                {this.state.todasAsMusicas.map((musica) =>
                    <Detalhes>
                        <p>Artista: {musica.artist}</p>
                        <p>Música: {musica.name}</p>                        
                        <audio controls>
                        <source src={musica.url} />
                        </audio>
                    </Detalhes>
                )}
            </DetalhesWrapper> : ""
        return (
            <ListaWrapper>
                {this.state.listaDePlaylists.length === 0 && <p>Carregando Playlists...</p>}
                <Lista className="list-group">
                    {this.state.listaDePlaylists.map((playlist) =>
                        <ItemLista className="list-group-item list-group-item-action" key={playlist.id}>
                            {playlist.name}
                            <Button className="btn btn-outline-danger" onClick={() => this.deletarPlaylist(playlist.id)}>Deletar</Button>
                            <Button className="btn btn-outline-warning" onClick={() => this.detalhesPlaylist(playlist.id, playlist.name)}>Detalhes</Button>                            
                        </ItemLista>
                    )}
                </Lista>
                {detalhesPlaylist}
                <div>
                <ButtonMusic className="btn btn-outline-success" onClick={this.adicionarMusica}>Adiconar Músicas</ButtonMusic>
                {adicionarMusica}
                </div>                
            </ListaWrapper>
        )
    }
}

export default ListaDePlaylists;