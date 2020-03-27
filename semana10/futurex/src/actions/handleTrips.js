import axios from 'axios'
import { push } from 'connected-react-router';

const baseURL = "https://us-central1-missao-newton.cloudfunctions.net/futureX/guilherme"

const setListTrips = trips => ({
    type: 'SET_LIST',
    payload: {        
        listTrip : trips
    }
})

export const fetchList = () => async (dispatch, getState) => {
    const response = await axios.get(`${baseURL}/trips`)
    dispatch(setListTrips(response.data.trips))    
}

export const createNewTrip = trip => async (dispatch) =>{
    try{
        const newTrip = {
            name: trip.name,
            planet: trip.planet,
            date: trip.date,
            description: trip.description,
            durationInDays: Number(trip.durationInDays)
        }
        const token = localStorage.getItem('token');
        const response = await axios.post(`${baseURL}/trips`, newTrip, {
            headers:{auth: token}
        })
        alert("Viagem criada com sucesso!!")
        dispatch(push("/trips/list"))
    }catch(error){
        alert("Ops, algo deu errado no Espaço Sideral ! ")
        console.error("Erro ->",error.message)
    }
}

const setDetail = (detail) =>({
    type: 'SET_DETAIL',
    payload:{
        details:detail
    }
})

export const getDetail = id => async(dispatch) => {
    try{
        const token = localStorage.getItem('token')
        const response = await axios.get(`${baseURL}/trip/${id}`,{
            headers:{auth:token}
        })
        dispatch(setDetail(response.data.trip))
        console.log("Response", response.data.trip)
    }catch(error){
        alert("Ops, Viagem Perdida no Espaço!!")
        console.error(error.message)
    }
}