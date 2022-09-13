import axios from "axios"

const getAccount = () => {
  try {
    console.log(`trying to make an api call...`)
    var options = {
      method: "GET",
      url: "https://api.lightspeedapp.com/API/V3/Account.json",
      headers: {
        // Authorization: `Bearer {access_token_here...}`,
      },
    }
    axios
      .request(options)
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.error(error)
      })
  } catch (e) {
    console.error(e)
  }
}

export default getAccount
