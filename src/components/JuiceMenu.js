import React, { useState, useEffect } from "react"

const JuiceMenu = ({ location }) => {
  const params = new URLSearchParams(location.search)
  const domain = "cloud.lightspeedapp.com/oauth/access_token.php"
  const clientId = process.env.GATSBY_CLIENT_ID
  const clientSecret = process.env.GATSBY_CLIENT_SECRET
  const code = params.get("code")
  // const state = params.get("state")
  const grantType = "authorization_code"

  const formData = new FormData()
  formData.append("client_id", clientId)
  formData.append("client_secret", clientSecret)
  formData.append("code", code)
  formData.append("grant_type", grantType)

  const [juiceData, setJuiceData] = useState("None")

  useEffect(() => {
    fetch(`https://${domain}`, {
      method: "POST",
      // mode: "no-cors",
      cache: "no-cache",
      headers: {
        // "Content-Type": "application/json",
        // "Content-Type": "multipart/form-data",
        // "Access-Control-Allow-Origin": "http://localhost:8000",
        // Accept: "application/json",
      },
      body: formData,
    })
      .then(res => {
        console.log(res)
      })
      .catch(err => console.error(err))
    // eslint-disable-next-line
  }, [code])

  return (
    <div>
      <h1>Juice Menu</h1>
      <div className="response">{juiceData}</div>
    </div>
  )
}
export default JuiceMenu
