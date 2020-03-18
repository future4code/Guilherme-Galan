import React from 'react'
import { connect } from 'react-redux'
import { completeAllTasks, deleteAllComplete, setFilter } from '../actions'

const Toolbar = (props) => {
    return (
        <div>
            <button onClick={props.completeAllTasks}>Marcar todas como completas</button>
            <p>Filtros: </p>
            <button onClick={() => props.setFilter('todas')}>Todas</button>
            <button onClick={() => props.setFilter('pendentes')}>Pendentes</button>
            <button onClick={() => props.setFilter('completas')}>Completas</button>
            <div>
                <button onClick={props.deleteAllComplete}>Remover Completas</button>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return{
        completeAllTasks: () => dispatch(completeAllTasks()),
        deleteAllComplete: () => dispatch(deleteAllComplete()),
        setFilter: (filter) => dispatch(setFilter(filter))
    }
}

export default connect(null, mapDispatchToProps)(Toolbar)