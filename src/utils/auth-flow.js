import axios from "axios"

export const requestAccessToken = urlCode => {
  var options = {
    method: "POST",
    url: "https://cloud.lightspeedapp.com/oauth/access_token.php",
    headers: { "content-type": "multipart/form-data" },
    data: new URLSearchParams({
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      code: urlCode,
      grant_type: "authorization_code",
      // redirect_uri: "https://YOUR_APP/callback",
    }),
  }

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data)
    })
    .catch(function (error) {
      console.error(error)
    })
}
