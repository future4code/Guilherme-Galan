import axios from 'axios'

const baseURL = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/guilherme/person"

export const clearSwipes = () => async (dispatch) => {
	await axios.put(``)
}

export const setProfiles = profile => ({
	type: "SET_PROFILES",
	payload: {
		profiles: profile
	}
})

export const fetchProfiles = () => async (dispatch, getState) => {
	const response = await axios.get(`${baseURL}`);
	dispatch(setProfiles(response.data.profile))	
}