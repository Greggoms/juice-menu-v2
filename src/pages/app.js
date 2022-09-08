import React from "react"
import { Router } from "@reach/router"
import JuiceMenu from "../components/JuiceMenu"

const App = () => {
  return (
    <Router>
      <JuiceMenu path="/app/oauth-redirect" />
    </Router>
  )
}

export default App
