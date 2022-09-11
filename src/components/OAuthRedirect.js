import { navigate } from "gatsby"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { login, selectAuth } from "../app-redux/features/authSlice"

// This is what happens immediately after being
// redirected from spotify's auth login process.
const OAuthRedirect = ({ location }) => {
  // to store keys in redux
  const dispatch = useDispatch()
  const userAuth = useSelector(selectAuth)

  const baseUri = "https://cloud.lightspeedapp.com/oauth/access_token.php"
  // const redirectUri = "http://localhost:8000/app"
  const redirectUri = "https://juicemenu2.netlify.app/app"

  // https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
  // This stores the code=${code} URL param returned when the
  // user logs in with spotify.
  const params = new URLSearchParams(location.search)
  const code = params.get("code")

  // const formData = new FormData()
  // formData.append("client_id", process.env.GATSBY_CLIENT_ID)
  // formData.append("client_secret", process.env.GATSBY_CLIENT_SECRET)
  // formData.append("code", code)
  // formData.append("grant_type", "authorization_code")
  // formData.append("redirect_uri", redirectUri)

  // Retreieve an access_token once you hit the redirect_uri
  if (code && !userAuth) {
    try {
      fetch(baseUri, {
        method: "POST",
        headers: {
          // "Access-Control-Allow-Origin": "http://localhost:8000/app",
          // Accept: "application/json",
        },
        // body: formData,
        body: new URLSearchParams({
          grant_type: "authorization_code",
          code: code,
          redirect_uri: redirectUri,
          client_id: process.env.GATSBY_CLIENT_ID,
          client_secret: process.env.GATSBY_CLIENT_SECRET,
        }),
      })
        .then(response => console.log(response))
        // .then(data => {
        //   console.log(data)
        //   dispatch(login(data))
        //   navigate("/")
        // })
        .catch(err => console.error(err))
    } catch (err) {
      console.error(err)
    }
  } else if (userAuth) {
    navigate("/")
  }

  return (
    <div>
      <h1>You are being authenticated...</h1>
    </div>
  )
}

export default OAuthRedirect
