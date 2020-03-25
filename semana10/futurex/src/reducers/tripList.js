const initialState = {
    tripList:[]
}

const tripList = (state = initialState, action) => {
    switch(action.type){
        case "SET_LIST":
            const newList = action.payload  
            console.log("payload", action.payload)          
            const newState = {...state, tripList:newList}
            console.log("nS",newState)
            return newState
            


            default:
                return state;
    }
}


export default tripList;