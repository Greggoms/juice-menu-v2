import React from "react"
import { v4 as uuid } from "uuid"
import { HomepageContainer } from "../css"

export default function Home() {
  return (
    <HomepageContainer>
      <h1>Lightspeed API Testing</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          alignItems: "flex-start",
        }}
      >
        <a
          href={`https://cloud.lightspeedapp.com/oauth/authorize.php?response_type=code&client_id=${
            process.env.GATSBY_CLIENT_ID
          }&scope=employee:all&state=${uuid()}`}
        >
          (re)connect to lightspeed
        </a>
      </div>
    </HomepageContainer>
  )
}
