export default function(state=null, action){
  switch(action.type){
    case "INITIAL_STATE":
      return initialStateValue;
      break;
  }
  return state;
}

const initialStateValue = {
  convert_to:"USD",
  base_currency:"EUR",
  last_x_days: 7,
  number_of_children: 1
}
