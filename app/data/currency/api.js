export const getCurrencyValue = (currency, date="latest", base="EUR") => {
  fetch(`http://api.fixer.io/${date}?=${base}`)
    .then((result) => result.json())
    .then((resultJson) => resultJson.rates[currency])
}
