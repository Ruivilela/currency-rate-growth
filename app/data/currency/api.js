export const getCurrencyValue = (currency, date="latest", base="AUD") => {
  // put condition for when currency is the same
  return fetch(`https://api.fixer.io/${date}?base=${base}`)
    .then((result) => result.json())
    .then((resultJson) => {
      return resultJson.rates[currency]
    })
}

export const getLastXDays = (number_of_days, currency, base="AUD") => {
  let data_sample = []

  return new Promise((resolve, reject) => {
    for(let i = 0; i < number_of_days; i++){
      let date = new Date();
      date = date.setDate(date.getDate()- i);
      date = new Date(date).toLocaleString().split(" ");

      date = formatDateApi(date[0])

      getCurrencyValue(currency, date, base)
        .then((date) => {
          data_sample.push(date);

          if(i === number_of_days - 1) {
            resolve(data_sample);
          }
        })
    };
  })
};

function formatDateApi(date){
  let date_array = date.split("-");

  if(date_array[1].length == 1 ){
    date_array[1] = "0" + date_array[1]
  }
  if(date_array[2].length == 1 ){
    date_array[2] = "0" + date_array[2]
  }
  return date_array.join("-")
}
