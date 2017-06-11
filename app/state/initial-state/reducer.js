export default function(state=null, action){
  switch(action.type){
    case "INITIAL_STATE":
      return action.payload;
      break;
  }
  return state;
}
