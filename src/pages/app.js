import React from "react"
import { Router } from "@reach/router"
import OAuthRedirect from "../components/OAuthRedirect"

// This is how I handle the redirect. If a user
// lands on http...com/app then show the OAuthRedirect
// component to handle gaining the access_token.
const App = () => {
  return (
    <Router>
      <OAuthRedirect path="/app" />
    </Router>
  )
}

export default App
