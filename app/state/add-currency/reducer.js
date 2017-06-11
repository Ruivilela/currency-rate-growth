export default function(state=null, action){
  switch(action.type){
    case "ADD_CURRENCY":
      const result = (state == null) ? 2 : state + 1;
      return result;
      break;
  }
  return state;
}
