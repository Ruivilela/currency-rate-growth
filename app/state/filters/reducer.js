export default function(state=null, action){
  switch(action.type){
    case "FILTER_UPDATE":
      let result = (state == null) ?
        action.payload : Object.assign({}, state, action.payload);
      return result; 
      break;
  }
  return state;
}
