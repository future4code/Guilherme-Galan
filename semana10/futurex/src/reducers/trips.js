const initialState = {
    trips:[],
    details:[]
}

export const allTrips = (state = initialState, action) => {
    switch(action.type){
        case "SET_LIST":
            return{
                ...state,
                trips: action.payload.listTrip
            }
            
        case "SET_DETAIL":
            console.log("Action",action.payload.details)
            return{
                ...state,
                details: action.payload.details
            }

            default:
                return state;
    }
}


export default allTrips;