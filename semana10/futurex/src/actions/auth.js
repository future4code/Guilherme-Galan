import axios from 'axios'
import { push } from 'connected-react-router'
import { routes } from '../containers/Router'

const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/futureX/guilherme/login"

export const login = (email, password) => async(dispatch) =>{

    const loginData = {
        email,
        password
    }

    try{
    const response = await axios.post(`${baseUrl}`, loginData)

    const token = response.data.token

    window.localStorage.setItem("token", token)

    dispatch(push(routes.createTrip))

    } catch(error){
        console.error(error)
    }
}