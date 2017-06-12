export default function(state=null, action){
  switch(action.type){
    case "GET_CURRENCY":
      return action.payload; 
      break;
  }
  return state;
}
