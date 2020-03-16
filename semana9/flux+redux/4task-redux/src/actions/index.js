export const addTask = (task) => {
    return{
        type: "ADD_TASK",
        payload:{
            task: task
        }
    }
}

export const checkTask = (idTask) =>{
    return{
        type: "CHECK_TASK",
        payload:{
            idTask : idTask
        }
    }
}

export const checkAllTasks = (allIdTasks) => {
    return{
        type: "CHECK_ALL_TASKS",
        paylod:{
            allIdTasks : allIdTasks
        }
    }
}

export const filterTasks = (valueFilter) => {
    return{
        type: "FILTER_TASKS",
        payload:{
            valueFilter : valueFilter
        }
    }
}

export const removeTaskChecked = (idTaskChecked) => {
    return{
        type: "REMOVE_TASK",
        payload:{
            idTaskChecked : idTaskChecked
        }
    }
}

export const removeAllTasksChecked = (allTaksChecked) => {
    return{
        type: "REMOVE_ALL_TASKS_CHECKED",
        paylod:{
            allTaksChecked : allTaksChecked
        }
    }
}