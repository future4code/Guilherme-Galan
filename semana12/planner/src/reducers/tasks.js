const initialState = {
    tasks:[],
}

export const allTasks = (state = initialState, action) => {
    switch(action.type){        
        case "SET_TASKS":
            return{
                ...state,
                tasks: action.payload.tasks              
            }            

            default:
                return state;
    }

}

export default allTasks;