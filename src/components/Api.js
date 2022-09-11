import React, { useState } from "react"
import { useSelector } from "react-redux"
import { selectAuth } from "../app-redux/features/authSlice"
import { v4 as uuid } from "uuid"
import { Button, ResponseContainer } from "../css"

const Api = () => {
  const userAuth = useSelector(selectAuth)
  const [recentlyPlayed, setApiCall] = useState()

  const baseUri = "https://cloud.lightspeedapp.com/oauth/authorize.php"
  const responseType = "code"
  const clientId = process.env.GATSBY_CLIENT_ID
  const scope = "employee:all"
  const state = uuid()

  const getApiResult = () => {
    console.log("API Test Call")
    // fetch(
    //   `${baseUri}`,
    //   {
    //     method: "GET",
    //     headers: {
    //       Authorization: `Bearer ${userAuth.access_token}`,
    //       "Content-Type": "application/json",
    //     },
    //   }
    // )
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data.item)
    //     // setApiCall(data.item)
    //   })
    //   .catch(err => console.error(err))
  }

  return (
    <ResponseContainer>
      <aside>
        <Button onClick={() => getApiResult()}>Get Data</Button>
      </aside>
      <div className="response-content"></div>
    </ResponseContainer>
  )
}

export default Api
