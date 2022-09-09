const axios = require("axios")

const tokenEndpoint = "https://cloud.lightspeedapp.com/oauth/access_token.php"

const oAuth = (req, res, next) => {
  const code = req.query.code
  if (!code) {
    res.status(401).send("Missing authorization code")
  }

  const params = new URLSearchParams()
  params.append("grant_type", "authorization_code")
  params.append(
    "client_id",
    "602f814f7708435e6798b5b62834d72dd3ad27eaed35ef9a748b6beb0ae0fd47"
  )
  params.append(
    "client_secret",
    "e4ee4dea4dcaf834c92ed8bbbfa357bc89bec7674fa81d98d9cd365059df97e4"
  )
  params.append("code", code)
  params.append("redirect_uri", "http://localhost:8000/app/oauth-redirect")

  axios
    .post(tokenEndpoint, params)
    .then(response => {
      req.oauth = response.data
      next()
    })
    .catch(error => {
      console.error(error)
      res.status(403).json(`Reason: ${error.message}`)
    })
}

module.export = oAuth
