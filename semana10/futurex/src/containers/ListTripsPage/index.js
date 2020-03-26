import React, { Component } from 'react'
import styled from 'styled-components'

import { connect } from 'react-redux'
import { fetchList } from '../../actions/handleTrips'
import { routes } from "../../containers/Router";
import { push } from "connected-react-router";

const CardWrapper = styled.div`
    display:grid;
    grid-template-columns:1fr 1fr;
    grid-gap:30px;
    margin-left:10%;
    margin-top:8%;
`

const Card = styled.div`
    max-width: 40vw;
    border: 1px solid black;
    text-align:center;
    padding:5px;
`

const ListWrapper = styled.div`
    text-align:center;
`

const Bold = styled.span`
    font-weight:bold;
`


class ListTripsPage extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchList()

    }

    render() {
        console.log("state", this.props.tripList)
        return (
            <ListWrapper>
                <h2>Lista de Viagens</h2>
                <CardWrapper>
                    {this.props.tripList.map(trips => {
                        return (
                            <Card>
                                <p><Bold>Nome:</Bold> {trips.name}</p>
                                <p><Bold>Descrição: </Bold>{trips.description}</p>
                                <p><Bold>Planeta: </Bold>{trips.planet}</p>
                                <p><Bold>Duração: </Bold>{trips.durationInDays} dias</p>
                                <p><Bold>Data:</Bold> {trips.date}</p>
                                <button onClick={this.props.details}>Ver Detalhes</button>
                            </Card>
                        )
                    })}
                </CardWrapper>
            </ListWrapper>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        tripList: state.allTrips.trips
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchList: () => dispatch(fetchList()),
        details: () => dispatch(push(routes.tripDetails))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListTripsPage)