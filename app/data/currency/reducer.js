export default function(state=null, action){
  switch(action.type){
    case "GET_CURRENCY":
      return Object.assign([], action.payload);
      break;
  }
  return state;
}
