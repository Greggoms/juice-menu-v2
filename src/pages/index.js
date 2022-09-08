import React from "react"
import { v4 as uuid } from "uuid"
import { tempToken } from "../utils/auth-flow"
import { HomepageContainer } from "../css"
import JuiceMenu from "../components/JuiceMenu"

export default function Home() {
  console.log("temptoken home-", tempToken)

  return (
    <HomepageContainer>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          alignItems: "flex-start",
        }}
      >
        <h1>Lightspeed API Testing</h1>
        <a
          href={`https://cloud.lightspeedapp.com/oauth/authorize.php?response_type=code&client_id=${
            process.env.GATSBY_CLIENT_ID
          }&scope=employee:all&state=${uuid()}`}
        >
          {tempToken !== null ? `try to reconnect?` : `Lightspeed API Testing`}
        </a>
        {!tempToken ? <p>No Token</p> : <JuiceMenu />}
      </div>
    </HomepageContainer>
  )
}
