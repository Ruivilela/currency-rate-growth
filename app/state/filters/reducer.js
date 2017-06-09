export default function(state=null, action){
  switch(action.type){
    case "FILTER_UPDATE":
      return action.payload;
      break;
  }
  return state;
}
