import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import AdicionarMusica from './AdicionarMusica';

const ListaWrapper = styled.div`

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
            <div>
                <p>Detalhes da Playlist: {this.state.nomePlaylist}</p><hr />
                <p>Músicas</p> <hr />
                {this.state.todasAsMusicas.map((musica) =>
                    <div>
                        <p>Artista: {musica.artist}</p>
                        <p>Música: {musica.name}</p>
                    </div>
                )}
            </div> : ""
        return (
            <ListaWrapper>
                {this.state.listaDePlaylists.length === 0 && <p>Carregando Playlists...</p>}
                <ul>
                    {this.state.listaDePlaylists.map((playlist) =>
                        <li key={playlist.id}>
                            {playlist.name}
                            <button onClick={() => this.deletarPlaylist(playlist.id)}>Deletar</button>
                            <button onClick={() => this.detalhesPlaylist(playlist.id, playlist.name)}>Detalhes</button>                            
                        </li>
                    )}
                </ul>
                {detalhesPlaylist}
                <button onClick={this.adicionarMusica}>Adiconar Músicas</button>
                {adicionarMusica}                
            </ListaWrapper>
        )
    }
}

export default ListaDePlaylists;