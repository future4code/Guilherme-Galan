import axios from 'axios';

export const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/generic/planner-sagan-guilherme";

export const setTasks = (tasks) => {
    return {
        type: 'SET_TASKS',
        payload: {
            tasks
        }
    }
}

export const getTasks = () => async(dispatch) => {
    try{
        const response = await axios.get(`${baseUrl}`)
        dispatch(setTasks(response.data))       

    }catch(error){
        console.error("Erro ->", error.message)
        alert("Ops, Algo deu errado!")
    }
}

export const createTask = (text, day) => async(dispatch) =>{    
    try{
        const newTask = {
            day : day,
            text: text
        }

        await axios.post(`${baseUrl}`, newTask)
        dispatch(getTasks())
        alert("Task criada com Sucesso!!")

    }catch(error){
        console.error("Erro ->", error.message)
        alert("Ops, sua Tarefa não foi criada!!")
    }
}