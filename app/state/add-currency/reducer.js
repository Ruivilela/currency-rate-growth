export default function(state=null, action){
  switch(action.type){
    case "ADD_CURRENCY":
      return state.number_of_children++;
      break;
  }
  return state;
}
