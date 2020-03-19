import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTask } from '../actions'

class TaskForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      inputText: ''
    }
  }

  onChangeInput = (event) =>{
    this.setState({ inputText:event.target.value })    
  }

  onClickAdicionar = () =>{
    this.props.addTask(this.state.inputText)
  }

  render() {
    return (
      <form>
        <input value={ this.state.inputText } onChange={this.onChangeInput} placeholder="O que tem que ser feito?" />
        <button type="button" onClick={ this.onClickAdicionar }>Adicionar</button>
      </form>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (text) => dispatch(addTask(text))
  }
}

export default connect(null, mapDispatchToProps)(TaskForm)