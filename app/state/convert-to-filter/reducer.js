export default function(state=null, action){
  switch(action.type){
    case "CONVERT_TO_UPDATE":
      return action.payload;
      break;
  }
  return state;
}
