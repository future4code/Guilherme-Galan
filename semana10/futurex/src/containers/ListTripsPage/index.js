import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchList } from '../../actions/tripList'





class ListTripsPage extends Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchList()
    }

    render(){
        return(
            <div>

            </div>
        )
    }
}

const mapStateToProps= (state) =>({
    listTrips: state.tripList
})

const mapDispatchToProps = (dispatch) => {
    return{
        fetchList: () => dispatch(fetchList())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ListTripsPage)