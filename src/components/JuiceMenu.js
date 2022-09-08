import React from "react"
import { initAuth, tempToken } from "../utils/auth-flow"
import getAccount from "../utils/getAccount"

const JuiceMenu = ({ location }) => {
  initAuth(location)

  return (
    <div>
      {!tempToken ? (
        <h1>Hacking into the Mainframe...</h1>
      ) : (
        <div>
          <p>Mainframe hacked?</p>
          <p>{tempToken}</p>
          <button onClick={() => getAccount(tempToken)}>
            get account info
          </button>
        </div>
      )}
    </div>
  )
}
export default JuiceMenu
