import axios from "axios"

// https://stackoverflow.com/questions/53800162/getting-url-parameters-on-gatsbyjs
// https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/get
//
// Values start as null and are populated
// on redirect from Lightspeed
export const initAuth = location => {
  try {
    console.log("init Auth")
    if (location) {
      const params = new URLSearchParams(location.search)
      const code = params.get("code")
      // const state = params.get("state")

      if (code !== null) {
        // sessionStorage.setItem("tempToken", code)
        requestAccessToken(code)
      }
    }
  } catch (e) {
    console.error(e)
  }
}

// There must be something wrong with this request..
export const requestAccessToken = async urlCode => {
  console.log("urlCode: ", urlCode)

  // const url = "https://cloud.lightspeedapp.com/oauth/access_token.php"

  // const headers = {
  //   "content-type": "application/json",
  // }

  // const body = {
  //   client_id: process.env.GATSBY_CLIENT_ID,
  //   client_secret: process.env.GATSBY_CLIENT_SECRET,
  //   code: urlCode,
  //   grant_type: "authorization_code",
  // }

  // const config = {
  //   method: "POST",
  //   headers,
  //   body: JSON.stringify(body),
  // }

  // const response = await fetch(url, config)

  // console.log(response)

  // Send a POST request
  var options = {
    method: "POST",
    url: "https://cloud.lightspeedapp.com/oauth/access_token.php",
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: {
      client_id: process.env.GATSBY_CLIENT_ID,
      client_secret: process.env.GATSBY_CLIENT_SECRET,
      code: urlCode,
      grant_type: "authorization_code",
    },
  }

  const response = await axios
    .request(options)
    .then(function (response) {
      // not returned
      console.log(`response`)
      // not returned
      console.log(response)
      console.log(response.data)
      // not returned
      return response.data
    })
    .catch(function (error) {
      // always returned
      console.error(error)
    })
  // Is always undefined...
  console.log("access_token: ", response)
}
