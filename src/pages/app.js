import React from "react"
import { Router, navigate } from "@reach/router"
import { tempToken } from "../utils/auth-flow"
import JuiceMenu from "../components/JuiceMenu"

const App = () => {
  // // navigate back to home page.
  // // replace connect button with the menu
  // if (tempToken !== null) {
  //   navigate("/")
  // }
  return (
    <Router>
      <JuiceMenu path="/app/oauth-redirect" />
    </Router>
  )
}

export default App
