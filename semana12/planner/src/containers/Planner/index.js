import React from "react";
import styled from 'styled-components';
import { connect } from "react-redux";
import { getTasks, createTask } from "../../actions/tasks";

const CardGrid = styled.div`  
  display:grid;
  max-width:400px;
  grid-template-columns: 1fr;
  grid-template-rows:1fr 1fr;
  border:solid black 0.5px;
`

const PlannerWrapper = styled.div`
  text-align:center;
`

export class Planner extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: "",
      day: ""
      ,
      days: ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"]

    }
  }

  componentDidMount() {
    this.props.getTasks()
  }

  handleInputChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleCreateTask = () => {
    const { text, day } = this.state
    this.props.createTask(text, day)
  }

  handleTaskDay = (event) => {
    this.setState({
      day: event.target.value
    })
  }


  render() {
    return (
      <PlannerWrapper>
        <input type="text" onChange={this.handleInputChange}></input>
        <select onChange={this.handleTaskDay}>
          <option key={"escolha"}>Escolha um Dia ...</option>
          {this.state.days.map((day, index) => (
            <option key={index} value={day}>{day}</option>
          ))}
        </select>
        <button onClick={this.handleCreateTask}>Criar Tarefa</button>
        <div>
          {this.state.days.map(day => {
            return (
              <CardGrid key={day}>
                <div>{day}</div>
                <div>
                  {this.props.taskList.filter(task => task.day === day).map(task=>(
                    <div>
                      {task.text}
                    </div>
                  ))}
                </div>
              </CardGrid>              
            )
          })}
        </div>
      </PlannerWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    taskList: state.allTasks.tasks
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getTasks: () => dispatch(getTasks()),
    createTask: (text, day) => dispatch(createTask(text, day))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Planner);