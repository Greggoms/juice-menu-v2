const express = require("express")
const axios = require("axios")
const port = process.env.PORT || 8001
const oAuth = require("./middleware/oAuth")
const app = express()

const lightspeedAPIEndpoint = "http://localhost:8000/app/oauth-redirect"

app.use(oAuth)

app.get("/auth-redirect", async (req, res) => {
  try {
    const { access_token } = req.oauth

    const response = await axios({
      method: "get",
      url: lightspeedAPIEndpoint,
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })
    res.json(response.data)
  } catch (error) {
    console.error(error)
    if (error.response.status === 401) {
      res.status(401).json("Unauthorized to access data")
    } else if (error.response.status === 403) {
      res.status(401).json("Permission Denied")
    } else {
      res.status(500).json("Whoops, something went wrong")
    }
  }
})

app.listen(port, () => console.log("Started"))
