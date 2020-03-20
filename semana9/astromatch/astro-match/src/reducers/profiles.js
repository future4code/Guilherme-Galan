const initialState = {
  profiles: [],
}

const profiles = (state = initialState, action) => {
  switch(action.type) {
    case "SET_PROFILES":
      const newProfile = action.payload.profiles;
      const newState = {...state, profiles:newProfile}             

      return newState        
      

      default:
        return state;
  }
}

export default profiles