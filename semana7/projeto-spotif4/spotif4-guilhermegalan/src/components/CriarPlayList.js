import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components'

const CriarPlayListWrapper = styled.div`  
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;

`

const Botao = styled.button`
    margin-top:30px;
`

const baseURL = "https://us-central1-spotif4.cloudfunctions.net/api";
const authToken = "guilherme-galan";

class CriarPlayList extends Component{
    constructor(props){
        super(props)
        this.state = {
            nomePlaylist: "",

        }
    }

    novoNomePlaylist = (event) =>{
        this.setState({nomePlaylist : event.target.value})
    }

    criarPlayList = () => {
        const novaPlaylist = {name: this.state.nomePlaylist}

        const novaPlaylistPromessa = axios.post(`${baseURL}/playlists/createPlaylist`, novaPlaylist, {
            headers: {
                auth: authToken,
            }
        })

        novaPlaylistPromessa.then(response =>{
            alert("Playlist criada com Sucesso!!!!!")
            this.setState({nomePlaylist:"",})

        }).catch(error =>{
            alert("Algo deu errado!!")
            console.log(error.response.data.message)
        })
    }

    render(){
        return(
            <CriarPlayListWrapper>
                <input type="text" value={this.state.nomePlaylist} placeholder="Nome da Playlist" onChange={this.novoNomePlaylist}/>
                <Botao className="btn btn-success" onClick={this.criarPlayList}>Criar Playlist</Botao>
            </CriarPlayListWrapper>
        )
    }
}

export default CriarPlayList;