const initialState = {
    trips:[]
}

export const allTrips = (state = initialState, action) => {
    switch(action.type){
        case "SET_LIST":
            return{
                ...state,
                trips: action.payload.listTrip
            }            


            default:
                return state;
    }
}


export default allTrips;