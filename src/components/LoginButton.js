import React from "react"
import { v4 as uuid } from "uuid"

const LoginButton = () => {
  const domain = "cloud.lightspeedapp.com/oauth/authorize.php"
  const responseType = "code"
  const clientId = process.env.GATSBY_CLIENT_ID
  const scope = "employee:all"
  const state = uuid()
  const fullUrl = `https://${domain}?response_type=${responseType}&client_id=${clientId}&scope=${scope}&state=${state}`

  return <a href={fullUrl}>Login</a>
}

export default LoginButton
