import React, { Component } from 'react'
import styled from 'styled-components'

const FormWrapper = styled.div`
    text-align:center;
    max-width:50%;
    margin: auto auto;
`

const Title = styled.h3`
    margin:100px 50px;
`

const applicationForm = [
    { name: "name", type: "text", label: "Nome", required: true, pattern: "[a-zA-Z ]{3,}", title:"Digite pelo menos 3 letras" },
    { name: "age", type: "number", label: "Idade", required: true, min: "18" },
    { name: "applicationText", type: "textarea", label: "Motivos para ser escolhido", required: true, pattern:"[a-zA-Z0-9 ]{30,}", title:"Pelo menos 30 caracteres" },
    { name: "profession", type: "text", label: "Profissão", required: true, pattern:"[a-zA-Z0-9 ]{10,}", title:"Pelo menos 10 caracteres"}
]

class FormPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            application: {},
        }
    }

    handleInputChange = event => {
        const { name, value } = event.target
        this.setState({
            application: {
                ...this.state.application,
                [name]: value
            }
        })
    }

    handleOnSubmit = event => {
        event.preventDefault()

    }

    render() {
        return (
            <FormWrapper>
                <Title>Se candidate para a melhor viagem da sua vida!!</Title>                
                <div>
                    <form onSubmit={this.handleOnSubmit}>
                        {applicationForm.map(input => (
                            <div class="input-group input-group-sm mb-3" key={input.name}>
                                <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroup-sizing-sm">{input.label}</span>                                    
                                </div>
                                <input rows="3" cols="30"
                                    name={input.name}
                                    type={input.type}
                                    value={this.state.application[input.name] || ""}
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
                        <button class="btn btn-outline-success" type="submit">Estou Pronto !!</button>
                    </form>
                </div>
            </FormWrapper>
        )
    }
}

export default FormPage