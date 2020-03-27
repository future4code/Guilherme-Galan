import React, { Component } from 'react'
import styled from 'styled-components'

import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { routes } from '../Router'
import {createNewTrip} from "../../actions/handleTrips";


const CreateWrapper = styled.div`
    text-align:center;
    max-width:50%;
    margin: auto auto;
`

const Title = styled.h1`
    margin:100px;
`

const Button = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
`

const createTripForm = [
    { name: "name", type: "text", label: "Nome da Viagem", required: true, pattern: "[a-zA-Z ]{5,}", title: "Mínimo 5 letras, Maiúsculas ou Minúsculas" },
    { name: "date", type: "date", label: "Data da Viagem", required: true },
    { name: "description", type: "text", label: "Descrição da Viagem", required: true, pattern: "[a-zA-Z0-9 ]{30,}", title: "Descreva com pelo menos 30 caractéres(Letras ou Números)." },
    { name: "durationInDays", type: "number", label: "Duração da Viagem em dias", required: true, min: "50" }

]

class CreateTripPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            form: {
                planet:"",
            },
            planets: ["Mercúrio", "Vênus", "Marte", "Júpiter", "Saturno", "Urano", "Netuno"]
        }
    }

    componentDidMount(){
        const token = window.localStorage.getItem("token")

        if(token === null){
            this.props.login()
        }
    }

    handleInputChange = event => {
        const { name, value } = event.target
        this.setState({
            form: {
                ...this.state.form,
                [name]: value
            }
        })
    }

    handleOnSubmit = event => {
        event.preventDefault()
        this.props.createNewTrip(this.state.form)
    }

    planetId = (event) =>{
        this.setState({
            form: {
                planet: event.target.value,
            }
        })
    }

    render() {
        return (
            <CreateWrapper>
                <Title>Criar uma Viagem</Title>
                <div>
                    <form onSubmit={this.handleOnSubmit}>
                        {createTripForm.map(input => (
                            <div class="input-group input-group-sm mb-3" key={input.name}>
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="inputGroup-sizing-sm">{input.label}</span>                                    
                                </div>
                                <input rows="3" cols="30"
                                    name={input.name}
                                    type={input.type}
                                    value={this.state.form[input.name] || ""}
                                    required={input.required}
                                    onChange={this.handleInputChange}
                                    pattern={input.pattern}
                                    min={input.min}
                                    title={input.title}
                                    class="form-control" 
                                    aria-label="Sizing example input" 
                                    aria-describedby="inputGroup-sizing-sm"
                                />
                            </div>
                        ))}
                        
                        <select required onChange={this.planetId}>
                            <option key={"escolha"}>Escolha o Planeta</option>
                            {this.state.planets.map((planet, index) => (
                                <option key={index} value={planet}>{planet}</option>
                            ))}
                        </select>
                        <Button>
                            <button type="submit" class="btn btn-outline-success">Criar Trip</button>
                            <button onClick={() => (this.props.listTrips())} type="submit" class="btn btn-outline-info">Lista de Trips</button>
                        </Button>
                    </form>
                </div>
            </CreateWrapper>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    login: () => dispatch(push(routes.login)),
    listTrips: () => dispatch(push(routes.listTrips)),
    createNewTrip: (trip) => dispatch(createNewTrip(trip))
})

export default connect(null, mapDispatchToProps)(CreateTripPage)