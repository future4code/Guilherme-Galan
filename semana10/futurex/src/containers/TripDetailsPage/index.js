import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { routes } from "../../containers/Router";
import { push } from "connected-react-router";

const DetailsWrapper = styled.div`
    text-align:center; 
    max-width:50vw;
    margin:auto auto;
`

const Title = styled.h3`
    margin:50px 30px;
    
`

const List = styled.div`
    margin-bottom:50px;
`

class TripDetailsPage extends Component{
    constructor(props){
        super(props)
    }

    componentDidMount() {
        const token = localStorage.getItem('token')
        if (token === null) {
            this.props.login()
        }
    }

    backToList = () =>{
        this.props.backToList()
    }

    render(){
        const { details } = this.props
        return(
            <DetailsWrapper>
               <Title>Detalhes da Viagem -> {details.name}</Title>
                <List className="card">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Planeta -> {details.planet}</li>
                        <li className="list-group-item">Descrição -> {details.description}</li>
                        <li className="list-group-item">Data -> {details.date}</li>
                        <li className="list-group-item">Duração -> {details.durationInDays} dias.</li>
                        <li className="list-group-item">Candidatos -> {details.candidates}</li>
                    </ul>
                </List>
                <button class="btn btn-outline-dark" onClick={() => (this.backToList())}>Voltar</button>
            </DetailsWrapper>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        details: state.allTrips.details
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: () => dispatch(push(routes.login)),
        backToList: () => dispatch(push(routes.listTrips))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TripDetailsPage)