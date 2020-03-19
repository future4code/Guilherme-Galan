const initialState = {
    taskList: [{
        id: 1,
        text: 'Tarefa 1 do Redux',
        completed: false

    },
    {
        id: 2,
        text: 'Tarefa 2 do Redux',
        completed: true
    }],
    filter: "todas"
}


export const tasks = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TASK":
            const newTask = {
                id: Date.now(),
                text: action.payload.text,
                completed: false
            }
            return {
                ...state,
                taskList: [newTask, ...state.taskList]
            };

        case "TOGGLE_TASK":
            {
                const newTaskList = state.taskList.map(task => {
                    if (task.id === action.payload.id) {
                        return {
                            ...task,
                            completed: !task.completed
                        }
                    }
                    return task
                })
                return {
                    ...state,
                    taskList: newTaskList
                }
            };

        case "DELETE_TASK":
            {
                const newTaskList = state.taskList.filter(task => {
                    if (task.id === action.payload.id) {
                        return false
                    } else {
                        return true
                    }
                })
                return {
                    ...state,
                    taskList: newTaskList
                }
            };

        case "COMPLETE_ALL_TASKS": {
            const newTaskList = state.taskList.map(task => {
                return {
                    ...task,
                    completed: true

                }
            })

            return {
                ...state,
                taskList: newTaskList
            }
        };

        case "DELETE_ALL_COMPLETE":{
            const newTaskList = state.taskList.filter(task => {
                if (task.completed) {
                    return false
                } else {
                    return true
                }
            })
            return {
                ...state,
                taskList: newTaskList
            }

        };

        case "SET_FILTER":{
            return{
                ...state,
                filter: action.payload.filter
            }
        }

        default:
            return state
    }
}