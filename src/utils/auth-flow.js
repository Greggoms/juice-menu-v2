import axios from "axios"

// To avoid using redux.
//
// The localSession / sessionStorage is a hot topic
// of debate. Some warn of XSS / CRSF attacks, others
// say it's fine, if you trust your app's packages.
export const tempToken = sessionStorage.getItem("tempToken")
console.log("tempToken =>", tempToken)

// https://stackoverflow.com/questions/53800162/getting-url-parameters-on-gatsbyjs
// https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/get
//
// Values start as null and are populated
// on redirect from Lightspeed
export const initAuth = location => {
  if (location) {
    const params = new URLSearchParams(location.search)
    const code = params.get("code")
    // const state = params.get("state")

    if (code !== null) {
      sessionStorage.setItem("tempToken", code)
    }
  }
}

// There must be something wrong with this request..
export const requestAccessToken = async urlCode => {
  var options = {
    method: "POST",
    url: "https://cloud.lightspeedapp.com/oauth/access_token.php",
    headers: { "content-type": "multipart/form-data" },
    data: new URLSearchParams({
      client_id: process.env.GATSBY_CLIENT_ID,
      client_secret: process.env.GATSBY_CLIENT_SECRET,
      code: urlCode,
      grant_type: "authorization_code",
      // redirect_uri: "http://localhost:8000/app/oauth-redirect",
      // redirect_uri: "https://juicemenu2.netlify.app/app/oauth-redirect",
    }),
  }

  const response = await axios
    .request(options)
    .then(function (response) {
      // not returned
      console.log(`response`)
      // not returned
      console.log(response())
      // not returned
      return response
    })
    .catch(function (error) {
      // always returned
      console.error(error)
    })
  // Is always undefined...
  console.log("access_token: ", response)
}
