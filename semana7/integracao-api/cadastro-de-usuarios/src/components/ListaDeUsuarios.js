import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const ContainerLista = styled.div`
    
`
const Header = styled.header`
    background-color: grey;
    height:50px;
    color:#FCC302;
    padding-top:20px;
    font-size:20px;
    margin-bottom:5rem;
    text-align:center;
`

const Lista = styled.ul `
    display:flex;
    flex-direction:column;
    align-items:center;    
`

const Deletar = styled.button `
    margin-left:10px;
`

const baseUrl = "https://us-central1-future4-users.cloudfunctions.net/api"

class ListaDeUsuarios extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            listaDeUsuarios: []
        }
    }

    componentDidMount() {
        this.buscarTodosUsuarios()
    }

    buscarTodosUsuarios = () => {
        const todosUsuariosPromessa = axios.get(`${baseUrl}/users/getAllUsers`, {
            headers: {
                'api-token': "guilherme-galan",
            }
        })

        todosUsuariosPromessa.then(response => {
            this.setState({ listaDeUsuarios: response.data.result})
        }).catch(error => {
            console.log(error.response.data.message)
            this.setState({listaDeUsuarios: []})
        })
    }

    deletarUsuario = (idUsuario) => {
        const deletarUsuarioPromessa = axios.delete(`${baseUrl}/users/deleteUser?id=${idUsuario}`, {
            headers:{
                'api-token': "guilherme-galan",
            }
        })

        deletarUsuarioPromessa.then(response =>{
            alert("Usuário Deletado!")
            this.buscarTodosUsuarios()
        }).catch(error =>{
            alert("Erro ao apagar usuário.")
            console.log(error.response.data.message)
        })


    }

    render(){
        return(
            <ContainerLista>
                <Header>Lista de Usuários</Header>
                {this.state.listaDeUsuarios.length === 0 && <p>Carregando Lista...</p>}
                    <Lista>
                        {this.state.listaDeUsuarios.map((usuario) =>
                            <li
                                key={usuario.id}                            
                            >
                                {usuario.name}
                                <Deletar onClick={() => this.deletarUsuario(usuario.id)}>Deletar</Deletar>
                            </li>
                        )}
                    </Lista>             
            </ContainerLista>
        )
    }
}

export default ListaDeUsuarios