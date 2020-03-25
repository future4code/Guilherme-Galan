import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchList } from '../../actions/tripList'


class ListTripsPage extends Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchList()
        console.log(this.props.tripList)
        
    }
    

    render(){
        return(
            <div>
                {this.props.tripList.map(trips =>(
                    <div>
                        <p>trips.name</p>
                    </div>
                ))}
            </div>
        )
    }
}


const mapStateToProps= (state) =>{
   return {    
    tripList: state.tripList
    
   }   
    
}

const mapDispatchToProps = (dispatch) => {
    return{
        fetchList: () => dispatch(fetchList())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ListTripsPage)