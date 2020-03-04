import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const ContainerLista = styled.div`
    text-align:center;
    
`
const Header = styled.header`
    background-color: #CDCDCD;
    height:50px;
    color:black;
    font-weight:bold;
    padding-top:5px;
    font-size:28px;
    margin-bottom:5rem;
    text-align:center;
`

const Lista = styled.ol `
    width:350px; 
    margin-left:43%;
`

const ItemLista = styled.li `
    display:flex;
    justify-content:space-around;
    font-size:20px;
`

const Button = styled.button `
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
        const confirmacao = window.confirm("Tem certeza que deseja deletar esse usuário?")
        if(confirmacao){          
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

    }

    render(){
        return(
            <ContainerLista>
                <Header>Lista de Usuários</Header>
                {this.state.listaDeUsuarios.length === 0 && <p>Carregando Lista...</p>}
                    <Lista className="list-group">
                        {this.state.listaDeUsuarios.map((usuario) =>
                            <ItemLista className="list-group-item list-group-item-action"
                                key={usuario.id}                            
                            >
                                {usuario.name}
                                <Button className="btn btn-outline-danger" onClick={() => this.deletarUsuario(usuario.id)}>Deletar</Button>
                                <Button className="btn btn-outline-warning">Detalhes</Button>
                            </ItemLista>
                        )}
                    </Lista>             
            </ContainerLista>
        )
    }
}

export default ListaDeUsuarios