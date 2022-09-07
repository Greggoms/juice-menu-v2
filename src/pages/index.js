import React from "react"
import { v4 as uuid } from "uuid"
import { HomepageContainer } from "../css"
import { requestAccessToken } from "../utils/auth-flow"

export default function Home({ location }) {
  // https://stackoverflow.com/questions/53800162/getting-url-parameters-on-gatsbyjs
  // https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/get
  const params = new URLSearchParams(location.search)
  const code = params.get("code")
  const state = params.get("state")

  // Values start as null and are populated
  // on redirect from Lightspeed
  console.log("CODE =>", code)
  console.log("STATE =>", state)

  if (code !== null) {
    requestAccessToken(code)
  }

  return (
    <HomepageContainer>
      <h1>Lightspeed API Testing</h1>
      <button>
        <a
          href={`https://cloud.lightspeedapp.com/oauth/authorize.php?response_type=code&client_id=${
            process.env.CLIENT_ID
          }&scope=employee:all&state=${uuid()}`}
        >
          Connect to Lightspeed
        </a>
      </button>
    </HomepageContainer>
  )
}
