import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    text-align:center;
    
`

const Titulo = styled.h2`
    border-bottom: 1px solid black;
    
`

const Input = styled.input`
    margin-right:1rem;
`

const List = styled.ul` 
    
    
`

class AdicionarTarefas extends Component {
    constructor(props){
        super(props)

        this.state = {
            valorFiltro:"",
            tarefa: "",
            tarefas:[]                       
        }        
    }

    componentDidUpdate(){
        const tarefas = this.state.tarefas
        localStorage.setItem("tarefa", JSON.stringify(tarefas))
    }

    mudancaTarefa = event =>{
        const novaTarefa = event.target.value
        this.setState({ tarefa: novaTarefa })
    }

    novaTarefa = () =>{        
        const novaTarefa = {
            id:Date.now(),
            texto: this.state.tarefa,
            completa:false
        }
        this.setState({
            tarefa: "",
            tarefas : [].concat(this.state.tarefas, novaTarefa)           

        })
    }
        
        mudancaFiltro = (event)=>{
            this.setState({
                valorFiltro : event.target.value
            })
        }   
        
        riscaTarefa = () =>{


        }
    
     
    render(){
        
        return(
            <Container>
                <Titulo>Lista de Tarefas</Titulo>
                <Input type="text" placeholder="Digite uma tarefa" value={this.state.tarefa} onChange={this.mudancaTarefa} />
                <button onClick={this.novaTarefa}>Adicionar Tarefa</button>
                <p>Filtro</p>
                <select value={this.state.valorFiltro} onChange={this.mudancaFiltro}>
                    <option value="semfiltro">Escolha uma opção</option>
                    <option value="completas">Completas</option>
                    <option value="pendentes">Pendentes</option>
                </select>
                <List>
                    {this.state.tarefas.map(tarefa => <li key={tarefa.id} onClick={this.riscaTarefa}>{ tarefa.texto }</li>)}
                </List>
            </Container>
        )
    }

}

export default AdicionarTarefas