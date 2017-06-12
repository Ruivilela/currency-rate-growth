const getCurrency = (payload) => {
  return {
    type:"GET_CURRENCY",
    payload: payload
  }
};

export default getCurrency
