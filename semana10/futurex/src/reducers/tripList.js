const initialState = {
    tripList:[]
}

const tripList = (state = initialState, action) => {
    switch(action.type){
        case "SET_LIST":
            const newList = action.payload.trips
            const newState = {...state, tripList:newList}

            return newState


            default:
                return state;
    }
}


export default tripList;