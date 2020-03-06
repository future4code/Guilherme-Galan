import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const baseURL = "https://us-central1-spotif4.cloudfunctions.net/api";
const authToken = "guilherme-galan";

class AdicionarMusica extends Component {
    constructor(props) {
        super(props)
        this.state = {
            idPlaylist: "",
            artista: "",
            nomeMusica: "",
            urlMusica: "",
            todasAsPlaylists: [],
        }
    }

    componentDidMount(){
        this.buscarTodasPlaylists()
    }

    mudarNomeArtista = (event) => {
        this.setState({ artista: event.target.value })
    }

    mudarNomeMusica = (event) => {
        this.setState({ nomeMusica: event.target.value })
    }

    mudarUrlMusica = (event) => {
        this.setState({ urlMusica: event.target.value })
    }

    buscarTodasPlaylists = () => {
        const todasAsPlaylistsPromessa = axios.get(`${baseURL}/playlists/getAllPlaylists`, {
            headers: {
                auth: authToken,
            }
        })

        todasAsPlaylistsPromessa.then(response => {
            this.setState({ todasAsPlaylists: response.data.result.list })
        }).catch(error => {
            alert("Ops, Algo deu errado!")
            console.log(error.response.data.message)
            this.setState({ listaDePlaylists: [] })

        })
    } 
    
    mudaId = (event) =>{
        this.setState({idPlaylist : event.target.value})
    }

    adicionarMusica = () => {
        const dadosMusica = {
            playlistId: this.state.idPlaylist,
            music: {
                name: this.state.nomeMusica,
                artist: this.state.artista,
                url: this.state.urlMusica       
        }  
    }
    console.log(dadosMusica) 

    const adicionarMusicaPromessa = axios.put(`${baseURL}/playlists/addMusicToPlaylist`, dadosMusica,{
        headers: {
            auth: authToken,
        }
    })

    adicionarMusicaPromessa.then(response =>{
        alert("Música Adicionada com Sucesso!")
    }).catch(error => {
        console.log(error.response.data.message)
        
    })
}
    render() {
        
        return (
            <div>
                <input type="text" placeholder="Artista" value={this.state.artista} onChange={this.mudarNomeArtista} />
                <input type="text" placeholder="Nome da Música" value={this.state.nomeMusica} onChange={this.mudarNomeMusica} />
                <input type="text" placeholder="Url da Música" value={this.state.urlMusica} onChange={this.mudarUrlMusica} />
                <select onChange={this.mudaId}>
                    <option>Selecione uma Playlist</option>
                    {this.state.todasAsPlaylists.map((playlist) => (<option key={playlist.id} value={playlist.id}>{playlist.name}</option>))}
                </select>
                <button onClick={this.adicionarMusica}>Adicionar</button>
            </div>
        )
    }
}

export default AdicionarMusica