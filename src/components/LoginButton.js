import React from "react"
import { v4 as uuid } from "uuid"

// All this does is render a link to initiate the auth flow.
// It includes a lot of parameters, some ~optional~.
const LoginButton = () => {
  const baseUri = "https://cloud.lightspeedapp.com/oauth/authorize.php"
  const clientId = process.env.GATSBY_CLIENT_ID
  const responseType = "code"
  const scope = "employee:all"
  const state = uuid()

  const fullUrl = `${baseUri}?response_type=${responseType}&client_id=${clientId}&scope=${scope}&state=${state}`

  return (
    <a href={fullUrl} className="login-btn">
      Login with Lightspeed
    </a>
  )
}

export default LoginButton
