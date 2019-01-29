export default function locationReducer(state = "Seattle, WA", action) {
  if (action.type === "SET_LOCATION") {
    return action.payload;
  } else {
    return state;
  }
  //return Object.assign({}, state, { location: action.payload });
}

/* Reference Reducer definition */
/* 
  state = {location:"Seattle,WA"}
  action = {type:"SET_LOCATION",payload: "San Francisco, CA"}


  const rootReducer = function(state, action) {
    switch (action.type) {
      case "SET_LOCATION":
        return location(state, action);
    }
  };

*/
