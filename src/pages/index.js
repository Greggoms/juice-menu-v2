import React from "react"
import LoginButton from "../components/LoginButton"
import { HomepageContainer } from "../css"

export default function Home() {
  return (
    <HomepageContainer>
      <h1>Lightspeed API Testing</h1>

      <LoginButton />
    </HomepageContainer>
  )
}
