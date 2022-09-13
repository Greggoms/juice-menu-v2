import { navigate } from "gatsby"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { login, selectAuth } from "../app-redux/features/authSlice"

// This is what happens immediately after being
// redirected from spotify's auth login process.
const OAuthRedirect = ({ location }) => {
  // to store & select keys in redux
  const dispatch = useDispatch()
  const userAuth = useSelector(selectAuth)

  // https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
  // This stores the code=${code} URL param returned when the
  // user logs in with spotify.
  const params = new URLSearchParams(location.search)
  const code = params.get("code")

  const formData = new FormData()
  formData.append("client_id", process.env.GATSBY_CLIENT_ID)
  formData.append("client_secret", process.env.GATSBY_CLIENT_SECRET)
  formData.append("code", code)
  formData.append("grant_type", "authorization_code")

  // Retreieve an access_token once you hit the redirect_uri
  if (code && !userAuth) {
    try {
      fetch("https://cloud.lightspeedapp.com/oauth/access_token.php", {
        method: "POST",
        headers: {
          //   "Access-Control-Allow-Origin": "http://localhost:8000",
          // "Content-Type": "application/x-www-form-urlencoded",
          "Content-Type": "multipart/form-data",
        },
        body: formData,
        // // An alternative below
        // body: new URLSearchParams({
        //   client_id: process.env.GATSBY_CLIENT_ID,
        //   client_secret: process.env.GATSBY_CLIENT_SECRET,
        //   grant_type: "authorization_code",
        //   code: code,
        // }),
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
