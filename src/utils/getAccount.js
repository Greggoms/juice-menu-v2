import axios from "axios"

const getAccount = (tempToken, location) => {
  try {
    console.log(`todo: figure out api request`)
    if (!tempToken) {
      console.log(`you seem to be missing your token..`)
    } else {
      console.log(`try to make an api call!`)
      var options = {
        method: "GET",
        url: "https://api.lightspeedapp.com/API/V3/Account.json",
        headers: { Authorization: `Bearer ${tempToken}` },
      }
      axios
        .request(options)
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.error(error)
        })
    }
  } catch (e) {
    console.error(e)
  }
}

export default getAccount
