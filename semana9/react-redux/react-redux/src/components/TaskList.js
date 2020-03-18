import React, { Component } from 'react'
import { connect } from 'react-redux';
import { toggleTask, deleteTask } from '../actions';

class TaskList extends Component {
  render(){
    console.log(this.props.taskList)
    return(
        <ul>
          {this.props.taskList.filter((task)=>{
            const filter = this.props.filter
            if(filter === 'todas') return true
            if(filter === 'pendentes') return task.completed === false
            if(filter === 'completas') return task.completed === true
            return true
          }).map(task =>(
            <li key={task.id} onClick={()=> this.props.toggleTask(task.id)}>
              {task.text} - Completa: {String(task.completed)}
              <button onClick={() => this.props.deleteTask(task.id)}>Deletar</button>
            </li>
          ))}           
        </ul>
    )
  }
}

const mapStatetoProps = (state) => {
  return{
    taskList: state.tasks.taskList,
    filter: state.tasks.filter
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    toggleTask: (id) => dispatch(toggleTask(id)),
    deleteTask: (id) => dispatch(deleteTask(id))
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(TaskList);