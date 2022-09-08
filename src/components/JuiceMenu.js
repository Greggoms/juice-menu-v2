import React from "react"
import { initAuth } from "../utils/auth-flow"
import getAccount from "../utils/getAccount"

const JuiceMenu = ({ location }) => {
  initAuth(location)

  return (
    <div>
      <h1>Hacking into the Mainframe...</h1>
      <div>
        <p>Mainframe hacked?</p>
        <button onClick={() => getAccount()}>get account info</button>
      </div>
    </div>
  )
}
export default JuiceMenu
