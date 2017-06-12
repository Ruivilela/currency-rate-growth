const convertToFilterUpdate = (payload) => {
  return {
    type:"CONVERT_TO_UPDATE",
    payload: payload
  }
}

export default convertToFilterUpdate
